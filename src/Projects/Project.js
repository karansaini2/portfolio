import "./Project.css";
const Projects = () => {
  return (
    <div className="container" id="container">
      <h1 data-aos="fade-up" data-aos-duration="1100">
        Projects
      </h1>
      <div className="project-container">
        <div
          className="project-card"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <h2 className="header">Chat App</h2>
          <div className=" image image1"></div>
          <div className="content">
            <p className="paragraph">
              This is the chat app made using the API Chatengine.io .Which
              includes image sharing and enables the different rooms to chat.
            </p>
            <button className="btn">
              <a
                href="https://web-chatting.netlify.app"
                style={{
                  textDecoration: "none",
                }}
              >
                Visit
              </a>
              <i class="fas fa-code-branch"></i>
            </button>
          </div>
        </div>
        <div
          className="project-card"
          data-aos="slide-right"
          data-aos-duration="1100"
        >
          <h2 className="header">Hotel</h2>
          <div className=" image image2"></div>
          <div className="content">
            <p className="paragraph">
              Frontend Hotel webpage using HTML,CSS and Bootstrap. Fully
              Responsive in all devices. This one of the early project of my
              learning days.
            </p>
            <button className="btn">
              <a
                href="https://jovial-hugle-381156.netlify.app"
                style={{
                  textDecoration: "none",
                }}
              >
                Visit
              </a>
              <i class="fas fa-code-branch"></i>
            </button>
          </div>
        </div>
        <div
          className="project-card"
          data-aos="slide-right"
          data-aos-duration="1200"
        >
          <h2 className="header">Form Validation</h2>
          <div className="image image3"></div>
          <div className="content">
            <p className="paragraph">
              This is the Client Side form validation using Regular expressions
              of Javascript. Best way of form validation.
            </p>
            <button className="btn">
              <a
                href="https://karansaini2-form.netlify.app"
                style={{
                  textDecoration: "none",
                }}
              >
                Visit
              </a>
              <i class="fas fa-code-branch"></i>
            </button>
          </div>
        </div>
        <div
          className="project-card"
          data-aos="slide-right"
          data-aos-duration="1300"
        >
          <h2 className="header">Blogs</h2>
          <div className="image image4"></div>
          <div className="content">
            <p className="paragraph">
              This is the blog website using React . Used Firebase to store
              data. Also contains theVisitgle Authentication, the best part is
              that blog added by the other user cannot be deleted by other user.{" "}
            </p>
            <button className="btn">
              <a
                href="https://github.com/karansaini2/blogs-web"
                style={{
                  textDecoration: "none",
                }}
              >
                Visit
              </a>
              <i class="fas fa-code-branch"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
