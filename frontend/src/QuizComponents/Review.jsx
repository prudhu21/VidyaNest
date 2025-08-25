import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft, Home, RotateCcw } from 'lucide-react';
import './Review.css';

const Review = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    navigate('/');
    return null;
  }

  return (
    <div className="review-container">
      {/* Header */}
      <div className="review-hero">
        <div className="review-header">
          <div>
            <h1 className="review-title">Quiz Review</h1>
            <p className="review-subtitle">
              {result.domainName}
            </p>
            <p className='review-subtitle'> • {result.score}/{result.totalQuestions} Correct</p>
          </div>
          <button
            onClick={() => navigate('/results', { state: { result } })}
            variant="primary"
            size="m"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Results
          </button>
        </div>
      </div>


      <div className="review-content">
        <div className="review-questions">
          {result.questions.map((question, index) => {
            const userAnswer = result.answers[index];
            const isCorrect = userAnswer?.isCorrect || false;
            const selectedOption = userAnswer?.selectedAnswer;

            return (
              <div key={question.id} className="review-card">
                <div className="question-header">
                  <div className="question-status-icon">
                    {isCorrect ? (
                      <CheckCircle className="icon-correct" />
                    ) : (
                      <XCircle className="icon-incorrect" />
                    )}
                  </div>
                  <div className="question-info">
                    <div className="question-meta">
                      <span className="question-badge">
                        Question {index + 1}
                      </span>
                      <span className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <h3 className="question-text">{question.question}</h3>
                  </div>
                </div>

                <div className="options-list">
                  {question.options.map((option, optionIndex) => {
                    let className = "option";

                    if (optionIndex === question.correctAnswer) {
                      className += " option-correct";
                    } else if (selectedOption === optionIndex && optionIndex !== question.correctAnswer) {
                      className += " option-incorrect";
                    } else {
                      className += " option-neutral";
                    }

                    return (
                      <div key={optionIndex} className={className}>
                        <div className="option-content">
                          <span className="option-text">{option}</span>
                          <div className="option-tags">
                            {optionIndex === question.correctAnswer && (
                              <span className="tag tag-correct">Correct</span>
                            )}
                            {selectedOption === optionIndex && optionIndex !== question.correctAnswer && (
                              <span className="tag tag-incorrect">Your Answer</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="explanation">
                  <h4 className="explanation-title">Explanation</h4>
                  <p className="explanation-text">{question.explanation}</p>
                </div>
              </div>
            );
          })}

          <div className="review-footer">
            <div className="footer-actions">
              <button 
                onClick={() => navigate(`/quiz/${result.domainId}`)}
                className="btn-retake btn "
                size="lg"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Retake Quiz
              </button>
              <button 
                onClick={() => navigate('/quiz')}
                className='btn btn-success'
                variant="outline"
                size="lg"
              >
                <Home className="mr-4 h-5 w-5" />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
