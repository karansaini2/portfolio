import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const sendform = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xf0u4qq",
        "template_bh1i81g",
        e.target,
        "user_SJ8UFSLLkFCnpDyAv0IG4"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };
  return (
    <div className="contact-container" id="contact-container">
      <div id="inner">
        <form id="form" onSubmit={sendform}>
          <h2>Contact Me</h2>

          <label class="labels">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Enter your name"
          />

          <label class="labels">Email</label>
          <input
            type="text"
            name="user_email"
            id="email"
            class="form-control"
            placeholder="email@gmail.com"
          />

          <label class="labels">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            class="form-control"
            placeholder="Subject"
          />

          <label class="labels">Message</label>
          <textarea
            placeholder="Write the message"
            rows=""
            cols=""
            id="textarea"
            name="message"
          />

          <button id="btn" type="submit">
            Submit <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
