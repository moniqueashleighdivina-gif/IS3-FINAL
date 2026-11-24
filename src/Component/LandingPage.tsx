interface Props {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: Props) {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-left">
          <h1>Conference Expense Planner</h1>
          <p>Plan your next major event with us!</p>
          <button className="get-started-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>

        <div className="landing-right">
          <p>
            Welcome to <strong>BudgetEase Solutions</strong>, your trusted partner in
            simplifying budget management and financial solutions. At BudgetEase, we
            understand the importance of effective budget planning and strive to
            provide intuitive, user-friendly solutions.
          </p>
          <p>
            With a commitment to efficiency and innovation, we empower individuals and
            businesses to take control of their finances and achieve their goals with
            ease.
          </p>
          <p>
            At BudgetEase Solutions, our mission is to make budgeting effortless and
            accessible for everyone. Whether you're a small business owner, a busy
            professional, or an individual managing personal finances, we offer
            tailored solutions to simplify your budgeting process.
          </p>
        </div>
      </div>
    </div>
  );
}