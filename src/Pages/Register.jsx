
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Register.css";

function Register() {
  return (
    <>
      <Navbar />

      <div className="register-page">
        <div className="register-card">
          <h1>Create Account</h1>
          <p>Join Tech for Youth and start learning today.</p>

          <form>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />

            <button type="submit">Create Account</button>
          </form>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;
