import styles from './ContactStyles.module.css';

function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let name = formData.get("name");
    const subject = formData.get("subject");
    let message = formData.get("message");
    const encodedSubject = encodeURIComponent(subject);
    message = message.replace(/\n/g, '\r\n');
    const encodedMessage = encodeURIComponent(message);
    name = "\n\nFrom, \n" + name;
    const encodedName = encodeURIComponent(name);
    const url = `mailto:gouravsinghc2003@gmail.com?subject=${encodedSubject}&body=${encodedMessage}${encodedName}`;
    window.open(url); 
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="subject" hidden>
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required>
          </textarea>
        </div>
        <input className="hover btn" type="submit" />
      </form>
    </section>
  );
}

export default Contact;