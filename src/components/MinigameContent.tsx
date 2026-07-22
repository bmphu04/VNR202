import { useState, useEffect } from 'react';
import { 
  DndContext, 
  DragOverlay, 
  useDraggable, 
  useDroppable,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'; 

// --- KIỂU DỮ LIỆU ---
interface EventData {
  id: string;
  year: string;
  text: string;
}

// --- DỮ LIỆU GỐC ---
const HISTORICAL_EVENTS: EventData[] = [
  { id: "e1", year: "1975", text: "Đại thắng mùa Xuân, đất nước thống nhất, bước vào thời kỳ quá độ lên CNXH" },
  { id: "e2", year: "1986", text: "Đại hội VI quyết định Đổi Mới toàn diện (Lạm phát chạm đỉnh 774%)" },
  { id: "e3", year: "1989", text: "Bắt đầu có dự trữ và xuất khẩu gạo, bứt phá khỏi tình trạng thiếu đói" },
  { id: "e4", year: "2006", text: "Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO)" },
  { id: "e5", year: "2026", text: "Kỷ niệm 40 năm Đổi mới, hướng tới nước công nghiệp hiện đại" },
  { id: "e6", year: "2045", text: "Khát vọng hiện thực hóa một Việt Nam phồn vinh, hạnh phúc" },
];

// --- COMPONENT THẺ KÉO (DRAGGABLE) ---
function DraggableEventCard({ event, isChecking, isCorrect }: { event: EventData, isChecking?: boolean, isCorrect?: boolean }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: event.id, data: event });

  let cardClass = "minigame-card";
  if (isDragging) cardClass += " dragging";
  if (isChecking) {
    cardClass += isCorrect ? " correct" : " incorrect";
  }

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className={cardClass}>
      <div className="card-indicator"></div>
      <p className="card-text">{event.text}</p>
    </div>
  );
}

// --- COMPONENT Ô THẢ (DROPPABLE) ---
function DroppableSlot({ year, currentEvent, isChecking }: { year: string, currentEvent: EventData | null, isChecking: boolean }) {
  const { isOver, setNodeRef } = useDroppable({ id: `slot-${year}`, data: { type: 'slot', year } });
  const isCorrect = currentEvent?.id === HISTORICAL_EVENTS.find(e => e.year === year)?.id;

  return (
    <div className="timeline-slot-wrapper">
      <div className="slot-year">{year}</div>
      <div 
        ref={setNodeRef} 
        className={`slot-dropzone ${isOver ? 'is-over' : ''} ${currentEvent ? 'filled' : ''}`}
      >
        {currentEvent ? (
          <DraggableEventCard event={currentEvent} isChecking={isChecking} isCorrect={isCorrect} />
        ) : (
          <span className="slot-placeholder">Thả sự kiện vào đây...</span>
        )}
      </div>
    </div>
  );
}

// --- COMPONENT CHÍNH ---
export default function MinigameContent() {
  const [pool, setPool] = useState<EventData[]>([]);
  const [slots, setSlots] = useState<Record<string, EventData | null>>({
    "1975": null, "1986": null, "1989": null, "2006": null, "2026": null, "2045": null
  });
  const [activeEvent, setActiveEvent] = useState<EventData | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 180, tolerance: 6 } })
  );

  const initGame = () => {
    const shuffled = [...HISTORICAL_EVENTS].sort(() => Math.random() - 0.5);
    setPool(shuffled);
    setSlots({ "1975": null, "1986": null, "1989": null, "2006": null, "2026": null, "2045": null });
    setIsChecking(false);
    setScore(null);
  };

  useEffect(() => { initGame(); }, []);

  const handleDragStart = (e: DragStartEvent) => {
    const { active } = e;
    setIsChecking(false);
    const eventData = HISTORICAL_EVENTS.find(ev => ev.id === active.id);
    if (eventData) setActiveEvent(eventData);
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    setActiveEvent(null);
    if (!over) return;

    const draggedEvent = HISTORICAL_EVENTS.find(ev => ev.id === active.id)!;
    const overId = String(over.id);

    let sourceSlotYear: string | null = null;
    for (const [year, ev] of Object.entries(slots)) {
      if (ev?.id === draggedEvent.id) sourceSlotYear = year;
    }

    const newSlots = { ...slots };
    let newPool = [...pool];

    if (overId === 'events-pool') {
      if (sourceSlotYear) {
        newSlots[sourceSlotYear] = null;
        if (!newPool.find(p => p.id === draggedEvent.id)) newPool.push(draggedEvent);
      }
    } 
    else if (overId.startsWith('slot-')) {
      const targetYear = overId.replace('slot-', '');
      const itemInTargetSlot = newSlots[targetYear];

      if (sourceSlotYear) {
        newSlots[sourceSlotYear] = itemInTargetSlot;
        newSlots[targetYear] = draggedEvent;
      } else {
        newPool = newPool.filter(ev => ev.id !== draggedEvent.id);
        if (itemInTargetSlot) newPool.push(itemInTargetSlot);
        newSlots[targetYear] = draggedEvent;
      }
    }

    setSlots(newSlots);
    setPool(newPool);
  };

  const handleCheck = () => {
    let correct = 0;
    HISTORICAL_EVENTS.forEach(ev => {
      if (slots[ev.year]?.id === ev.id) correct++;
    });
    setScore(correct);
    setIsChecking(true);
  };

  const { setNodeRef: setPoolRef } = useDroppable({ id: 'events-pool' });

  return (
    // Tăng maxWidth lên 1400px để không gian rộng rãi hơn
    <div className="quiz-container animate-fade-in" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
      <header className="quiz-header" style={{ marginBottom: '40px' }}>
        <h2 className="quiz-main-title">Ghép Mốc Lịch Sử Đổi Mới</h2>
        <p className="quiz-subtitle">Kéo mỗi sự kiện thả vào đúng năm tương ứng. Hoàn thành 6 mốc để mở khoá "Nhà sử học Gen Z".</p>
      </header>

      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="minigame-layout">
          
          {/* CỘT TRÁI: DÒNG THỜI GIAN (Rộng hơn) */}
          <div className="mg-panel timeline-panel">
            <h3 className="mg-panel-title">Dòng thời gian</h3>
            <div className="timeline-grid">
              {Object.keys(slots).map((year) => (
                <DroppableSlot key={year} year={year} currentEvent={slots[year]} isChecking={isChecking} />
              ))}
            </div>

            <div className="mg-actions-container">
              <div className="mg-actions">
                <button className="btn-mg check" onClick={handleCheck} disabled={Object.values(slots).includes(null)}>
                  ✦ Kiểm tra
                </button>
                <button className="btn-mg reset" onClick={initGame}>
                  ↻ Làm lại
                </button>
              </div>
              
              {isChecking && score !== null && (
                <div className={`mg-result-badge ${score === 6 ? 'success' : 'warning'}`}>
                  {score === 6 ? "🎉 Tuyệt vời! Bạn là Nhà sử học Gen Z!" : `Bạn ghép đúng ${score}/6 mốc. Hãy thử lại nhé!`}
                </div>
              )}
            </div>
          </div>

          {/* CỘT PHẢI: KHO SỰ KIỆN (Gọn hơn) */}
          <div className="mg-panel events-panel">
            <h3 className="mg-panel-title">Sự kiện</h3>
            <div ref={setPoolRef} className="events-pool">
              {pool.length === 0 && <div className="pool-empty">✨ Tất cả sự kiện đã được ghép! ✨</div>}
              {pool.map((event) => (
                <DraggableEventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

        </div>

        <DragOverlay dropAnimation={{ duration: 250, easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)' }}>
          {activeEvent ? (
            <div style={{ cursor: 'grabbing', opacity: 0.9, transform: 'scale(1.02)' }}>
              <DraggableEventCard event={activeEvent} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}