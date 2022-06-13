import "./About.css";
const About = () => {
  return (
    <div className="About" id="About">
      <h1 data-aos="fade-up">About Me</h1>
      <div className="about">
        <div
          className="profile-pic"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="picture"></div>
        </div>
        <div className="card" data-aos="fade-left" data-aos-duration="1500">
          <h3
            style={{
              fontSize: "2rem",
            }}
          >
            Details
            <span
              style={{
                margin: "7px",
                color: "white",
              }}
            >
              <i class=" profile fas fa-id-card"></i>
            </span>{" "}
          </h3>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Name :
            </span>{" "}
            Karan Saini
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              College :
            </span>{" "}
            National Institute of Technology Hamirpur
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Year :
            </span>{" "}
            2020-24
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Hobby :
            </span>{" "}
            Singing{" "}
          </p>
          <p className="para">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Brief :
            </span>
            My belief that every moment of life teaches us a new lesson and
            gives us the chance of upgrading to the better version of our's.
          </p>

          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Achievements:{" "}
            </span>
            Participated in Electrothon 3.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
