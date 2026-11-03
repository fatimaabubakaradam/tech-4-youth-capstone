
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Login.css";

function Login() {
  return (
    <>
      <Navbar />

      <div className="login-page">

        <div className="login-card">

          <h1>Welcome Back!</h1>

          <p>Login to continue your learning journey.</p>

          <form>

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">Login</button>

          </form>

          <p className="register-text">
            Don't have an account? <a href="/register">Register</a>
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Login;
