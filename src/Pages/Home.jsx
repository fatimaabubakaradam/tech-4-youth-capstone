import { Link } from "react-router-dom";
import { Code2, BookOpen, Users, Rocket, Laptop, Heart, ArrowRight } from "lucide-react";
import Navbar from "../Components/Navbar";
import techImage from "../assets/tech.jpg";
import Footer from "../Components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            🚀 Free for every young learner
          </div>

          <h1>
            Empowering the Next Generation of
            <span> Software Developers</span>
          </h1>

          <p>
            Learn to code by building real things. Five core courses,
            thousands of students and a community that has your back —
            from your first HTML tag to full-stack apps.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="btn-primary">
              <BookOpen size={18} />
              Explore Courses
            </Link>

            <Link to="/register" className="btn-secondary">
              Join Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-image">
         <img
           src={techImage}
           alt="Modern technology and computer coding"
         />
          <div className="floating-card">
            <div className="floating-icon">
              <Code2 size={22} />
            </div>
            <div>
              <strong>Learn by Doing</strong>
              <span>Build real-world projects</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE US</span>
          <h2>Why Tech for Youth?</h2>
          <p>
            Built by developers who started exactly where you are —
            curious, ambitious and ready to build.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">
              <Laptop size={26} />
            </div>
            <h3>Project-based learning</h3>
            <p>
              Every track ships with real projects you build, break
              and fix — no passive theory marathons, just code you
              can show off.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple">
              <BookOpen size={26} />
            </div>
            <h3>Free video tracks</h3>
            <p>
              Curated, full-length video courses for every step of
              your journey — completely free, forever, on every device.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">
              <Heart size={26} />
            </div>
            <h3>Local community support</h3>
            <p>
              Join study groups, hackathons and mentor sessions with
              young developers in your area who cheer you on.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-icon">
            <Rocket size={30} />
          </div>

          <h2>Your coding journey starts today</h2>

          <p>
            Create a free account, pick your track and start building —
            your first project is one click away.
          </p>

          <div className="cta-buttons">
            <Link to="/register" className="btn-primary">
              Join Now <ArrowRight size={18} />
            </Link>

            <Link to="/courses" className="btn-light">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
