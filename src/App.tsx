import { useState, useEffect, useRef } from 'react';
import './App.css';
import ParticlesBg from './components/ParticlesBg';
import MagazineContent from './components/MagazineContent';
import QuizContent from './components/QuizContent';
import MiniGame from './components/MinigameContent';
import logoImg from './assets/logo.png';
import poinImg from './assets/poin.png';

// Milestone coordinates in SVG coordinate system (2400x1000) - Phân bổ cân đối, trải dài trọn vẹn khung hình
interface MilestoneCoord {
  x: number;
  y: number;
  year: string;
  label: string;
}

const milestoneCoords: MilestoneCoord[] = [
  { x: 180, y: 480, year: "1986", label: "Khủng hoảng & Quyết định" },
  { x: 500, y: 650, year: "1989", label: "Kỳ tích gạo xuất khẩu" },
  { x: 820, y: 380, year: "1995", label: "Bắt tay mở cửa hội nhập" },
  { x: 1140, y: 520, year: "2007", label: "Gia nhập WTO thế giới" },
  { x: 1460, y: 650, year: "2020", label: "Kinh tế số quốc gia" },
  { x: 1780, y: 480, year: "2026", label: "Việt Nam Hùng Cường" },
  { x: 2100, y: 590, year: "40 Năm", label: "Tổng kết Đổi Mới" }
];

export default function App() {
  const pathRef = useRef<SVGPathElement>(null);
  
  // App state
  const [currentTab, setCurrentTab] = useState<'timeline' | 'quiz' | 'minigame'>('timeline');
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Camera state: translation and scale
  const [camera, setCamera] = useState({ x: 0, y: 0, scale: 1 });
  const [cameraTransitionClass, setCameraTransitionClass] = useState(true);
  
  // Dimension tracking
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  // SVG Path lengths
  const [totalPathLength, setTotalPathLength] = useState(0);
  const [milestoneLengths, setMilestoneLengths] = useState<number[]>([]);

  const [flowCurrentLength, setFlowCurrentLength] = useState(0);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute path measurements once SVG path is loaded
  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const total = path.getTotalLength();
      setTotalPathLength(total);

      // Compute precise lengths along path matching each node's x position
      const lengths: number[] = [];
      let currentIdx = 0;
      // Scan along the path to find where X matches the milestone X coord
      for (let l = 0; l <= total; l += 0.5) {
        const pt = path.getPointAtLength(l);
        if (currentIdx < milestoneCoords.length && pt.x >= milestoneCoords[currentIdx].x) {
          lengths.push(l);
          currentIdx++;
        }
      }
      // Fail-safe check
      while (lengths.length < milestoneCoords.length) {
        lengths.push(total);
      }
      setMilestoneLengths(lengths);
      
      // Set initial flow position at the first node
      setFlowCurrentLength(lengths[0]);
    }
  }, []);

  // Compute responsive layout variables (Scale theo chiều rộng 2400 để line tràn viền màn hình hoàn hảo)
  const fitScale = dimensions.width / 2400;
  
  const overviewCamera = {
    x: (dimensions.width - 2400 * fitScale) / 2,
    y: (dimensions.height - 1000 * fitScale) / 2 + 120 * fitScale, // Shift down to avoid collision with header title
    scale: fitScale
  };

  // Synchronize camera in overview mode
  useEffect(() => {
    if (activeMilestone === null && !isTransitioning) {
      setCameraTransitionClass(true);
      setCamera(overviewCamera);
    }
  }, [dimensions, activeMilestone, isTransitioning]);

  // Animate line drawing in overview mode
  const drawLine = (fromLen: number, toLen: number, duration = 1200) => {
    const startTime = performance.now();
    const anim = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Quad Ease
      const current = fromLen + (toLen - fromLen) * ease;
      setFlowCurrentLength(current);
      if (progress < 1) {
        requestAnimationFrame(anim);
      }
    };
    requestAnimationFrame(anim);
  };

  // Node click handler
  const handleNodeClick = (index: number) => {
    if (isTransitioning) return;

    const targetLength = milestoneLengths[index] || 0;

    if (activeMilestone === null) {
      // Zooming in from overview
      setIsTransitioning(true);
      
      // Animate line drawing
      drawLine(flowCurrentLength, targetLength, 1200);

      // Camera Zoom calculations: Position active node on the left (25% width, 50% height)
      setCameraTransitionClass(true);
      const scale = 3.2 * fitScale;
      const zoomCam = {
        x: dimensions.width * 0.25 - scale * milestoneCoords[index].x,
        y: dimensions.height * 0.5 - scale * milestoneCoords[index].y,
        scale: scale
      };
      setCamera(zoomCam);
      setActiveMilestone(index);

      // Fade in magazine content after camera settles
      setTimeout(() => {
        setIsTransitioning(false);
        setContentVisible(true);
      }, 1400);
    } else {
      // Jump between nodes if already zoomed
      if (index === activeMilestone) return;
      setIsTransitioning(true);
      setContentVisible(false);

      setTimeout(() => {
        drawLine(flowCurrentLength, targetLength, 1000);

        setCameraTransitionClass(true);
        const scale = 3.2 * fitScale;
        setCamera({
          x: dimensions.width * 0.25 - scale * milestoneCoords[index].x,
          y: dimensions.height * 0.5 - scale * milestoneCoords[index].y,
          scale: scale
        });
        setActiveMilestone(index);

        setTimeout(() => {
          setIsTransitioning(false);
          setContentVisible(true);
        }, 1200);
      }, 400);
    }
  };

  // Return to Overview Mode
  const handleBack = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setContentVisible(false);

    // Zoom out camera
    setTimeout(() => {
      setCameraTransitionClass(true);
      setCamera(overviewCamera);
      setActiveMilestone(null);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 1400);
    }, 400);
  };

  // Travel along flow to next node
  const handleNext = () => {
    if (isTransitioning || activeMilestone === null || activeMilestone >= milestoneCoords.length - 1) return;

    setIsTransitioning(true);
    setContentVisible(false);

    const startIdx = activeMilestone;
    const endIdx = activeMilestone + 1;
    const startLength = milestoneLengths[startIdx] || 0;
    const endLength = milestoneLengths[endIdx] || 0;

    setTimeout(() => {
      // Disable CSS transitions for frame-by-frame canvas updates
      setCameraTransitionClass(false);


      const duration = 2500; // 2.5 seconds flight
      const startTime = performance.now();

      const travel = (now: number) => {
        const elapsed = now - startTime;
        const p = Math.min(elapsed / duration, 1);

        // Cubic Easing for cinematic speed curves
        const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        const currentLength = startLength + (endLength - startLength) * ease;

        // Keep flow progress drawing synced with travel
        setFlowCurrentLength(currentLength);

        if (pathRef.current) {
          try {
            const pt = pathRef.current.getPointAtLength(currentLength);

            // Frame-by-frame camera positioning:
            // Symmetrical Pan: Starts at 25% width, goes to 50% width during flight, ends at 25%
            let sfX = 0.5;
            if (p < 0.25) {
              sfX = 0.25 + (p / 0.25) * 0.25;
            } else if (p > 0.75) {
              sfX = 0.5 - ((p - 0.75) / 0.25) * 0.25;
            }

            // Dive zoom: scales up in the middle of travel for immersive depth
            const scaleMultiplier = 3.2 + Math.sin(p * Math.PI) * 1.0;
            const currentScale = scaleMultiplier * fitScale;

            setCamera({
              x: dimensions.width * sfX - currentScale * pt.x,
              y: dimensions.height * 0.5 - currentScale * pt.y,
              scale: currentScale
            });
          } catch (e) {
            console.error(e);
          }
        }

        if (p < 1) {
          requestAnimationFrame(travel);
        } else {
          // Finished flight, settle at the target milestone
          setActiveMilestone(endIdx);
          setCameraTransitionClass(true);
          setIsTransitioning(false);
          setContentVisible(true);
        }
      };

      requestAnimationFrame(travel);
    }, 400);
  };

  // Get current comet position on the path
  const cometPosition = (() => {
    if (!pathRef.current) return { x: 50, y: 500 };
    try {
      return pathRef.current.getPointAtLength(flowCurrentLength);
    } catch (e) {
      return { x: 50, y: 500 };
    }
  })();


  return (
    <div className="app-container">
      {/* 1. Golden embers background particles */}
      <ParticlesBg />
      
      {/* Vignette lighting overlay */}
      <div className="vignette-overlay" />

      {/* 2. Top Navigation header - fades out when zoomed in timeline view */}
      <header className={`main-navbar ${activeMilestone !== null && currentTab === 'timeline' ? 'fade-out-element' : ''}`}>
        <div className="brand-section-wrapper">
          <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'transparent', width: 'auto', height: '40px', borderRadius: '4px' }}>
            <img src={logoImg} alt="Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
          </div>
          <div className="brand-section">
            <h1 className="brand-title">40 Năm đổi mới</h1>
            <span className="brand-subtitle">Tạp chí số — Gen Z</span>
          </div>
        </div>

        <button
          type="button"
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <button
            className={`nav-link ${currentTab === 'timeline' ? 'active' : ''}`}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentTab('timeline');
                setActiveMilestone(null);
                setMobileMenuOpen(false);
              }
            }}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Tạp Chí Số
          </button>

          <a
            href="/map.html"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            Bản đồ
          </a>

          <button
            className={`nav-link ${currentTab === 'quiz' ? 'active' : ''}`}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentTab('quiz');
                setMobileMenuOpen(false);
              }
            }}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Quiz
          </button>

          <button
            className={`nav-link ${currentTab === 'minigame' ? 'active' : ''}`}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentTab('minigame');
                setMobileMenuOpen(false);
              }
            }}
            style={{ cursor: 'pointer', opacity: 1 }}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"></rect>
              <path d="M12 12h.01"></path>
              <path d="M17 10v4"></path>
              <path d="M15 12h4"></path>
              <path d="M6 12h4"></path>
              <path d="M8 10v4"></path>
            </svg>
            Mini Game
          </button>
        </nav>
      </header>

      {/* Main timeline tab content */}
      {currentTab === 'timeline' && (
        <>
          {/* 3. Main Landing Intro Title - fades out when zoomed in */}
          <div className={`intro-overlay ${activeMilestone !== null ? 'fade-out-element' : ''}`}>
            <div className="intro-tag">Tạp chí số đa phương tiện</div>
            <h2 className="intro-title">
              BƯỚC NGOẶT<br />
              <span>ĐỔI MỚI</span>
            </h2>
            <p className="intro-desc">Từ khủng hoảng 1986 đến khát vọng 2026</p>
            <div className="intro-hint">✦ Chạm vào mỗi mốc trên dòng chảy lịch sử để khám phá ✦</div>
          </div>

          {/* 4. Zoomable Timeline Viewport */}
          <div className="timeline-viewport">
            <div 
              className={`timeline-canvas ${cameraTransitionClass ? 'camera-transition' : ''}`}
              style={{
                transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.scale})`
              }}
            >
              {/* ViewBox 2400 giúp đường line kéo giãn trọn vẹn từ mép trái sang mép phải màn hình */}
              <svg viewBox="0 0 2400 1000" className="timeline-svg">
                <defs>
                  {/* Metallic Gold gradient for the path */}
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8f1d2b" />
                    <stop offset="30%" stopColor="#d4af37" />
                    <stop offset="70%" stopColor="#ffdf79" />
                    <stop offset="100%" stopColor="#d4af37" />
                  </linearGradient>
                </defs>

                {/* Inactive dark background track - Kéo dài mượt mà từ 0 đến 2400 */}
                <path
                  d="M 0 500 C 60 500, 120 480, 180 480 C 340 480, 340 650, 500 650 C 660 650, 660 380, 820 380 C 980 380, 980 520, 1140 520 C 1300 520, 1300 650, 1460 650 C 1620 650, 1620 480, 1780 480 C 1940 480, 2020 590, 2100 590 C 2200 590, 2300 520, 2400 520"
                  className="path-background"
                />

                {/* Glowing active flow line path */}
                <path
                  ref={pathRef}
                  d="M 0 500 C 60 500, 120 480, 180 480 C 340 480, 340 650, 500 650 C 660 650, 660 380, 820 380 C 980 380, 980 520, 1140 520 C 1300 520, 1300 650, 1460 650 C 1620 650, 1620 480, 1780 480 C 1940 480, 2020 590, 2100 590 C 2200 590, 2300 520, 2400 520"
                  className="path-flow-active"
                  strokeDasharray={totalPathLength}
                  strokeDashoffset={totalPathLength - flowCurrentLength}
                />

                {/* Glowing comet riding the active flow path edge */}
                {totalPathLength > 0 && (
                  <g transform={`translate(${cometPosition.x}, ${cometPosition.y})`} className="comet-glow">
                    <circle r="14" fill="#ffcf5c" opacity="0.4" />
                    <circle r="7" fill="#ffffff" />
                  </g>
                )}

                {/* Milestones nodes */}
                {milestoneCoords.map((node, idx) => {
                  const isActive = activeMilestone === idx;
                  return (
                    <g
                      key={idx}
                      className={`milestone-node ${isActive ? 'node-active' : ''}`}
                      transform={`translate(${node.x}, ${node.y})`}
                      onClick={() => handleNodeClick(idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      <circle r="32" className="node-pulse-ring" />
      
                      <image
                        href={poinImg}
                        x="-20"
                        y="-20"
                        width="40"
                        height="40"
                        style={{ objectFit: 'contain' }}
                      />
                      
                      {/* Labels: Show in overview, fade out in detailed mode */}
                      <g 
                        transform="translate(0, 45)" 
                        className="node-label-group"
                        style={{ opacity: activeMilestone === null ? 1 : 0 }}
                      >
                        <text className="node-label-year" y="0">{node.year}</text>
                        <text className="node-label-text" y="18">{node.label}</text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* 5. Detailed Magazine Panels */}
          {activeMilestone !== null && (
            <MagazineContent
              milestoneIndex={activeMilestone}
              onNext={handleNext}
              onBack={handleBack}
              isLast={activeMilestone === milestoneCoords.length - 1}
              isVisible={contentVisible}
            />
          )}
        </>
      )}

      {/* Quiz tab */}
      {currentTab === 'quiz' && <QuizContent />}

      {/* Mini Game tab */}
      {currentTab === 'minigame' && <MiniGame />}

    </div>
  );
}