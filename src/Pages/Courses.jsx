
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Courses.css";

function Courses() {

  const courses = [
    {
      title: "HTML Fundamentals",
      description: "Learn how to create website structures.",
      video: "https://www.youtube.com/watch?v=kUMe1FH4CHE"
    },
    {
      title: "CSS & Web Design",
      description: "Learn how to style beautiful websites.",
      video: "https://www.youtube.com/watch?v=OXGznpKZ_sA"
    },
    {
      title: "JavaScript",
      description: "Learn how to make websites interactive.",
      video: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    },
    {
      title: "React Development",
      description: "Learn how to build websites with React.",
      video: "https://www.youtube.com/watch?v=bMknfKXIFA8"
    },
    {
      title: "Node.js",
      description: "Learn how to build backend applications.",
      video: "https://www.youtube.com/watch?v=Oe421EPjeBE"
    },
    {
      title: "MongoDB",
      description: "Learn how to store and manage data.",
      video: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u"
    },
    {
      title: "Git",
      description: "Learn how to track changes in your code.",
      video: "https://www.youtube.com/watch?v=apGV9Kg7ics"
    },
    {
      title: "GitHub",
      description: "Learn how to upload and share your projects.",
      video: "https://www.youtube.com/watch?v=Ez8F0nW6S-w"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="courses-page">

        <div className="courses-heading">
          <h1>Explore Our Learning Hub</h1>
          <p>
            Learn the skills you need to become a professional software developer.
          </p>
        </div>

        <div className="courses-grid">

          {courses.map((course, index) => (
            <div className="course-card" key={index}>

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <a href={course.video} target="_blank" rel="noreferrer">
                Watch Lessons →
              </a>

            </div>
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Courses;
