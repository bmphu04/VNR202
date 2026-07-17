import { useState } from 'react';

interface Question {
  id: number;
  questionText: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Lạm phát Việt Nam năm 1986 đạt mức bao nhiêu?",
    options: [
      { key: "A", text: "77,4%" },
      { key: "B", text: "774%" },
      { key: "C", text: "174%" },
      { key: "D", text: "374%" }
    ],
    correctAnswer: "B",
    explanation: "Đỉnh điểm lạm phát phi mã vào năm 1986 lên tới 774,7%, khiến đồng tiền mất giá trầm trọng và đời sống nhân dân cực kỳ khó khăn."
  },
  {
    id: 2,
    questionText: "Sự kiện Đổi Mới nông nghiệp năm 1989 nổi tiếng dưới tên gọi nghị quyết khoán nào?",
    options: [
      { key: "A", text: "Khoán 10 (Nghị quyết 10)" },
      { key: "B", text: "Khoán 100" },
      { key: "C", text: "Khoán 20" },
      { key: "D", text: "Khoán 5" }
    ],
    correctAnswer: "A",
    explanation: "Khoán 10 (Nghị quyết 10 của Bộ Chính trị ban hành năm 1988) giao quyền tự chủ sản xuất và ruộng đất lâu dài cho hộ nông dân, giúp nông nghiệp bùng nổ năm 1989."
  },
  {
    id: 3,
    questionText: "Việt Nam chính thức bình thường hóa quan hệ ngoại giao với Mỹ và gia nhập ASEAN vào năm nào?",
    options: [
      { key: "A", text: "Năm 1986" },
      { key: "B", text: "Năm 1989" },
      { key: "C", text: "Năm 1995" },
      { key: "D", text: "Năm 2007" }
    ],
    correctAnswer: "C",
    explanation: "Tháng 7 năm 1995 đánh dấu mốc lịch sử kép trong chính sách đối ngoại khi Việt Nam bình thường hóa quan hệ với Hoa Kỳ và chính thức gia nhập ASEAN."
  },
  {
    id: 4,
    questionText: "Khi gia nhập Tổ chức Thương mại Thế giới (WTO) năm 2007, Việt Nam là thành viên thứ bao nhiêu?",
    options: [
      { key: "A", text: "Thành viên thứ 140" },
      { key: "B", text: "Thành viên thứ 150" },
      { key: "C", text: "Thành viên thứ 160" },
      { key: "D", text: "Thành viên thứ 170" }
    ],
    correctAnswer: "B",
    explanation: "Ngày 11/01/2007, Việt Nam chính thức trở thành thành viên thứ 150 của WTO sau 11 năm đàm phán kiên trì."
  },
  {
    id: 5,
    questionText: "Năm 2020, Việt Nam chính thức phê duyệt Chương trình quốc gia về lĩnh vực then chốt nào?",
    options: [
      { key: "A", text: "Chuyển đổi số quốc gia" },
      { key: "B", text: "Phát triển năng lượng hạt nhân" },
      { key: "C", text: "Đô thị hóa xanh tuần hoàn" },
      { key: "D", text: "Hiện đại hóa hạ tầng hàng không" }
    ],
    correctAnswer: "A",
    explanation: "Thủ tướng Chính phủ đã phê duyệt 'Chương trình Chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030', thúc đẩy kinh tế số bùng nổ mạnh mẽ."
  },
  {
    id: 6,
    questionText: "Mục tiêu cam kết Net-Zero (phát thải ròng bằng không) của Việt Nam hướng tới mốc năm nào?",
    options: [
      { key: "A", text: "Năm 2030" },
      { key: "B", text: "Năm 2045" },
      { key: "C", text: "Năm 2050" },
      { key: "D", text: "Năm 2060" }
    ],
    correctAnswer: "C",
    explanation: "Tại Hội nghị COP26 năm 2021, Việt Nam cam kết mạnh mẽ đạt mức phát thải ròng bằng '0' (Net-Zero) vào năm 2050, hướng tới chuyển đổi xanh bền vững."
  }
];

export default function QuizContent() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIdx];

  const handleOptionClick = (optionKey: string) => {
    if (isAnswered) return;

    setSelectedAnswer(optionKey);
    setIsAnswered(true);

    const correct = optionKey === currentQuestion.correctAnswer;
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextClick = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Render Result Screen
  if (quizFinished) {
    let evaluation = "";
    if (score === quizQuestions.length) {
      evaluation = "Xuất sắc! Bạn có kiến thức lịch sử Đổi Mới vô cùng sâu sắc.";
    } else if (score >= 4) {
      evaluation = "Rất tốt! Bạn nhớ được hầu hết các cột mốc quan trọng của đất nước.";
    } else if (score >= 2) {
      evaluation = "Khá tốt! Bạn đã hiểu sơ bộ về lịch sử Đổi Mới, hãy đọc thêm tạp chí nhé.";
    } else {
      evaluation = "Hãy dành thời gian khám phá dòng chảy lịch sử ở mục Tạp Chí Số để hiểu rõ hơn nhé!";
    }

    return (
      <div className="quiz-container">
        <header className="quiz-header">
          <span className="quiz-section-tag">PHẦN 4 • TƯƠNG TÁC</span>
          <h2 className="quiz-main-title">Kết Quả Quiz</h2>
        </header>

        <div className="quiz-card result-card">
          <div className="result-score-circle">
            <span className="score-num">{score}</span>
            <span className="score-total">/ {quizQuestions.length}</span>
          </div>
          
          <h3 className="result-heading">Bạn đạt {score * 10} điểm!</h3>
          <p className="result-evaluation">{evaluation}</p>

          <div className="result-buttons">
            <button className="btn-restart" onClick={resetQuiz}>
              ✦ Chơi lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container animate-fade-in">
      
      {/* Quiz Title Header */}
      <header className="quiz-header">
        <span className="quiz-section-tag">PHẦN 4 • TƯƠNG TÁC</span>
        <h2 className="quiz-main-title">Quiz Đổi Mới</h2>
        <p className="quiz-subtitle">{quizQuestions.length} câu hỏi — bạn nhớ được bao nhiêu?</p>
      </header>

      {/* Main Quiz Card */}
      <div className="quiz-card">
        {/* Card Header */}
        <div className="quiz-card-header">
          <span className="question-counter">CÂU {currentQuestionIdx + 1} / {quizQuestions.length}</span>
          
          {/* Custom segment progress bar */}
          <div className="progress-segments">
            {quizQuestions.map((_, idx) => (
              <div 
                key={idx}
                className={`progress-segment-item ${idx === currentQuestionIdx ? 'active' : (idx < currentQuestionIdx ? 'passed' : '')}`}
              />
            ))}
          </div>
        </div>

        {/* Card Body Grid (Left text/Question, Right dividing line options) */}
        <div className="quiz-card-body">
          <div className="quiz-body-left">
            <h3 className="quiz-question-text">{currentQuestion.questionText}</h3>
            
            {/* Show explanation after user has answered */}
            <div className={`question-explanation-panel ${isAnswered ? 'show' : ''}`}>
              <div className="expl-tag">✦ Giải thích lịch sử:</div>
              <p className="expl-text">{currentQuestion.explanation}</p>
            </div>
          </div>

          <div className="quiz-body-divider"></div>

          <div className="quiz-body-right">
            <div className="quiz-options-list">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.key;
                const isCorrect = option.key === currentQuestion.correctAnswer;
                
                let optionClass = "";
                if (isAnswered) {
                  if (isCorrect) {
                    optionClass = "correct-option";
                  } else if (isSelected) {
                    optionClass = "incorrect-option";
                  } else {
                    optionClass = "disabled-option";
                  }
                }

                return (
                  <button
                    key={option.key}
                    className={`quiz-option-button ${optionClass} ${isSelected ? 'selected-option' : ''}`}
                    onClick={() => handleOptionClick(option.key)}
                    disabled={isAnswered}
                  >
                    <span className="option-letter">{option.key}.</span>
                    <span className="option-text">{option.text}</span>
                    
                    {/* Visual Check/Cross indicator icons */}
                    {isAnswered && isCorrect && (
                      <span className="option-indicator-icon correct">✓</span>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <span className="option-indicator-icon incorrect">✗</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card Footer Next button */}
        {isAnswered && (
          <div className="quiz-card-footer">
            <button className="btn-next-question" onClick={handleNextClick}>
              {currentQuestionIdx === quizQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"} <span className="arrow">→</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
