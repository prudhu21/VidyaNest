import { useLocation, useNavigate } from 'react-router-dom';
import { Trophy, RotateCcw, Home, Clock, Target, CheckCircle, XCircle } from 'lucide-react';
import './Results.css'

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;


  if (!result) {
    navigate('/');
    return null;
  }

  const scorePercentage = (result.score / result.totalQuestions) * 100;
  const timeInMinutes = Math.round(result.timeSpent / 60000);
  const timeInSeconds = Math.round((result.timeSpent % 60000) / 1000);

  const getScoreColor = () => {
    if (scorePercentage >= 80) return 'score-success';
    if (scorePercentage >= 60) return 'score-warning';
    return 'score-error';
  };

  const getScoreMessage = () => {
    if (scorePercentage >= 90) return 'Outstanding! 🏆';
    if (scorePercentage >= 80) return 'Great work! 🎉';
    if (scorePercentage >= 70) return 'Good job! 👏';
    if (scorePercentage >= 60) return 'Not bad! 👍';
    return 'Keep practicing! 💪';
  };

  return (
    <div className="results-page">
      <div className="results-hero">
        <div className="results-hero-content">
          <div className="results-hero-card">
            <div className="trophy-icon text-white">
              <Trophy />
            </div>
            <h1 className='text-white'>Quiz Complete!</h1>
            <p className='text-white'>
              {result.domainName} • {getScoreMessage()}
            </p>
          </div>
        </div>
      </div>

      <div className="results-summary">
        <div className="results-card">
          <div className="score-display text-white">
            <div className={`score-value ${getScoreColor()}`}>
              {result.score}/{result.totalQuestions}
            </div>
            <div className="score-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${scorePercentage}%` }}
                ></div>
              </div>
              <p>{Math.round(scorePercentage)}% Accuracy</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-box correct">
              <CheckCircle className="stat-icon" />
              <div className="stat-value">{result.score}</div>
              <div className="stat-label">Correct</div>
            </div>

            <div className="stat-box incorrect">
              <XCircle className="stat-icon" />
              <div className="stat-value">
                {result.totalQuestions - result.score}
              </div>
              <div className="stat-label">Incorrect</div>
            </div>

            <div className="stat-box time">
              <Clock className="stat-icon" />
              <div className="stat-value">
                {timeInMinutes > 0 ? `${timeInMinutes}m` : `${timeInSeconds}s`}
              </div>
              <div className="stat-label">Time Taken</div>
            </div>
          </div>

          <div className="action-buttons">
            <button
              className="btn primary"
              onClick={() => navigate(`/quiz/${result.domainId}`)}
            >
              <RotateCcw /> Retake Quiz
            </button>
            <button
              className="btn btn-success"
              onClick={() => navigate('/review', { state: { result } })}
            >
              <Target /> Review Answers
            </button>
            <button className="btn secondary" onClick={() => navigate('/quiz')}>
              <Home /> Back to Home
            </button>
          </div>
        </div>

        <div className="results-card">
          <h3>Performance Insights</h3>
          <div className="insight-list">
            <div className="insight-item">
              <span>Questions Answered Correctly </span>
              <span className="highlight">
                {result.score} / {result.totalQuestions}
              </span>
            </div>
            <div className="insight-item">
              <span>Accuracy Rate </span>
              <span className={`highlight ${getScoreColor()}`}>
                {Math.round(scorePercentage)}%
              </span>
            </div>
            <div className="insight-item">
              <span>Average Time Per Question </span>
              <span className="highlight time">
                {Math.round(result.timeSpent / result.totalQuestions / 1000)}s
              </span><br/><br/>
            </div>
          </div>

          <div className="improvement-tip">
            <h4>💡 Tip for Improvement</h4>
            <p>
              {scorePercentage >= 80
                ? 'Excellent performance! Try other domains to expand your knowledge.'
                : scorePercentage >= 60
                ? 'Good foundation! Review the explanations and try again to improve your score.'
                : 'Focus on the fundamentals. Review each explanation carefully and practice more.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
