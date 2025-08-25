import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRandomQuestions, getAllDomains } from '../QuizComponents/data/questionBank';
import { CheckCircle, XCircle, ArrowRight, Clock, Brain, RefreshCw } from 'lucide-react';
import './Quiz.css';

const Quiz = () => {
  const { domainId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState(domainId || '');

  useEffect(() => {
    if (selectedDomain) {
      loadQuestions(selectedDomain);
    }
  }, [selectedDomain]);

  useEffect(() => {
    if (domainId) {
      setSelectedDomain(domainId);
    }
  }, [domainId]);

  const loadQuestions = (domain) => {
    setIsLoading(true);
    const domainQuestions = getRandomQuestions(domain, 20);
    if (domainQuestions.length === 0) {
      navigate('/');
      return;
    }
    setQuestions(domainQuestions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
    setIsLoading(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const domain = getAllDomains().find((d) => d.id === selectedDomain);
  const allDomains = getAllDomains();

  const handleDomainChange = (e) => {
    const newDomain = e.target.value;
    setSelectedDomain(newDomain);
    navigate(`/quiz/${newDomain}`, { replace: true });
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    const timeSpent = Date.now() - questionStartTime;
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    const answer = {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      timeSpent,
    };

    setAnswers((prev) => [...prev, answer]);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setQuestionStartTime(Date.now());
    } else {
      const totalTime = Date.now() - startTime;
      const score = answers.filter((a) => a.isCorrect).length;

      const result = {
        domainId: selectedDomain,
        domainName: domain?.name || '',
        questions,
        answers,
        score,
        totalQuestions: questions.length,
        timeSpent: totalTime,
      };

      navigate('/results', { state: { result } });
    }
  };

  const getAnswerClassName = (optionIndex) => {
    if (!showFeedback) {
      if (selectedAnswer === optionIndex) {
        return 'answer-selected';
      }
      return 'answer-neutral';
    }

    if (optionIndex === currentQuestion.correctAnswer) {
      return 'answer-correct';
    }

    if (selectedAnswer === optionIndex && optionIndex !== currentQuestion.correctAnswer) {
      return 'answer-incorrect';
    }

    return 'answer-neutral-disabled';
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (isLoading) {
    return (
      <div className="quiz-loading">
        <div className="loading-card">
          <div className="loading-icon">
            <Brain />
          </div>
          <p>Loading your quiz...</p>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="quiz-empty">
        <div className="card">
          <h2>Quiz not found</h2>
          <button onClick={() => navigate('/')}>Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className='d-flex flex-row mb-3'>
        <h1 className='quiz-header-text'>Quiz Dashboard</h1>
        <p className="domain-icon">{domain?.icon}</p>
      </div>
      <div className="quiz-header">
        <div className="header-left">
          <div className="question-count">
            <Clock /> Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>

        <div className="header-right">
          <select value={selectedDomain} onChange={handleDomainChange}>
            {allDomains.map((domainOption) => (
              <option key={domainOption.id} value={domainOption.id}>
                {domainOption.name}
              </option>
            ))}
          </select>
          <button onClick={() => loadQuestions(selectedDomain)}>
            <RefreshCw /> New Quiz
          </button>
        </div>
      </div>

      <div className="progress-wrapper">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
        </div>
        <div className="progress-info">
          <span>Progress</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
      </div>

      <div className="quiz-question">
        <div className="card">
          <h2>{currentQuestion.question}</h2>

          <div className="options-list">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`option ${getAnswerClassName(index)}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span>{option}</span>
                {showFeedback && (
                  <>
                    {index === currentQuestion.correctAnswer ? (
                      <CheckCircle className="correct-icon" />
                    ) : selectedAnswer === index ? (
                      <XCircle className="wrong-icon" />
                    ) : null}
                  </>
                )}
              </div>
            ))}
          </div>

          {showFeedback && (
            <div className="feedback-box">
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <CheckCircle className="correct-icon" />
              ) : (
                <XCircle className="wrong-icon" />
              )}
              <div>
                <h4>
                  {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h4>
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>
          )}

          <div className="footer">
            <p>
              {showFeedback
                ? 'Review the explanation above'
                : 'Select an answer to continue'}
            </p>
            {showFeedback && (
              <button onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1
                  ? 'Next Question'
                  : 'View Results'}{' '}
                <ArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
