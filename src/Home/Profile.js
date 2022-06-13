import { Typewriter } from "react-simple-typewriter";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container" id="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
            <a href="https://www.linkedin.com/in/karan-saini-ab329b1bb/">
              <i
                class="fab fa-linkedin-in"
                data-aos="fade-down"
                data-aos-duration="1100"
              ></i>
            </a>

            <a href="https://www.instagram.com/official_ikaran/">
              <i
                class="fab fa-instagram"
                data-aos="fade-down"
                data-aos-duration="1120"
              ></i>
            </a>

            <a href="https://github.com/karansaini2">
              <i
                class="fab fa-github"
                data-aos="fade-down"
                data-aos-duration="1130"
              ></i>
            </a>
          </div>

          <div
            className="profile-detail-name"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <span className="primary-text">
              {" "}
              Hello , I'M <span className="highlighted-text">Karan Saini</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Good Learner",
                    "Enthusiastic Dev",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
