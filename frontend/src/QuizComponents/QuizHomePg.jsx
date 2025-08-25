import { useNavigate } from "react-router-dom";
import { Brain, Trophy, Users, Zap } from "lucide-react";
import { getAllDomains } from "../QuizComponents/data/questionBank";
import "./QuizHomePg.css"; 

const QuizHomePg = () => {
  const navigate = useNavigate();
  const domains = getAllDomains();

  const handleDomainSelect = (domainId) => {
    navigate(`/quiz/${domainId}`);
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master Your
              <span className="highlight-text">Tech Skills</span>
            </h1>
            <p className="hero-subtitle">
              Challenge yourself with expertly crafted quizzes across multiple
              tech domains. Track your progress and become a better developer.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                <Brain className="icon" onClick={() => navigate("/sidenav")}/>
                Start Learning
              </button>
              <div className="hero-users">
                <Users className="icon" />
                <span>Join 10K+ developers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Zap className="icon" />
            </div>
            <h3 className="feature-title">Instant Feedback</h3>
            <p className="feature-text">
              Get immediate explanations for every answer to accelerate your
              learning.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Brain className="icon" />
            </div>
            <h3 className="feature-title">Smart Randomization</h3>
            <p className="feature-text">
              Every quiz attempt provides unique questions for varied learning
              experiences.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Trophy className="icon" />
            </div>
            <h3 className="feature-title">Track Progress</h3>
            <p className="feature-text">
              Detailed results and review capabilities to monitor your
              improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="domain-section">
        <div className="domain-header">
          <h2 className="domain-title">Choose Your Domain</h2>
          <p className="domain-subtitle">
            Select from our comprehensive collection of technology domains. Each
            quiz contains 20 carefully crafted questions.
          </p>
        </div>

        <div className="domain-grid">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="domain-card"
              onClick={() => handleDomainSelect(domain.id)}
            >
              <div className="domain-card-content">
                <div className="domain-icon">{domain.icon}</div>
                <h3 className="domain-name">{domain.name}</h3>
                <p className="domain-description">{domain.description}</p>
                <button className="btn-domain">
                  Start Quiz <Brain className="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to Test Your Knowledge?</h2>
          <p className="cta-subtitle">
            Start with any domain above and challenge yourself with questions
            designed by industry experts.
          </p>
          <button className="btn-success btn" onClick={() => navigate("/courses")}>
            <Trophy className="icon" />
            Begin Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default QuizHomePg;
