import React, { useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import { BreadCrumb, Button } from "../components/index";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Contact() {
  const formRef = useRef();

  const notify = () => {
    toast.success("message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_apcv2ro",
        "template_t8g4xa8",
        formRef.current,
        "user_E2i581JA81vY913Zv4M2u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    notify();
    e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <BreadCrumb title="Contact" />
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <div className={styles.formWrapper}>
            <div className={styles.left}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.908767078868!2d30.330542315299965!3d40.74203297932867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccadf2977958d7%3A0xc7996fa884f94c03!2sSakarya%20University!5e0!3m2!1sen!2str!4v1638547172912!5m2!1sen!2str"
                style={{ width: "100%", height: "100%" }}
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.right}>
              <h3>Get in touch! </h3>
              <p>
                If you have any project ideas,opportunities or want to
                collaborate,my inbox is open. kindly leave me a message, i'll
                try to get back as soon as possible.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.formTxt}
                  name="user_name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.formTxt}
                  name="user_email"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className={styles.formTxt}
                  name="user_subject"
                />
                <textarea
                  placeholder="Message"
                  className={styles.formTxtArea}
                  name="message"
                ></textarea>
                <Button btnText="Send Message" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
