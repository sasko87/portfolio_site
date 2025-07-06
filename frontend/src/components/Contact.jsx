import React, { useState } from "react";
import Section from "./Section";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import Input from "./Input";
import Modal from "./Modal";

const Contact = () => {
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setServerMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setIsError(true);
        setServerMessage(data.error);
      }
    } catch (error) {
      setIsError(true);
      setServerMessage(data.error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section id="contact" className={"pb-15"}>
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="flex   gap-7  items-center justify-between max-md:flex-col">
          <div className="w-2/6 mb-10 self-baseline max-md:w-full ">
            <div className="text-neutral-200 ">
              <h3 className="text-2xl font-bold mb-7">
                Let's Talk About Your Project
              </h3>
              <p className="mb-10">
                I'm currently available for freelace work or full-time
                positions. If you have a project that needs creative solutions
                or just want to say hi, feel free to reach out
              </p>
              <div className="max-md:flex   max-md:gap-5 max-sm:flex-col ">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-rose-200 rounded-xl">
                    <MdOutlineEmail className="text-2xl text-rose-600" />
                  </div>
                  <div className="">
                    <p className="leading-4">Email Me</p>
                    <p>astevkovski87@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center mt-7 gap-3 max-md:mt-0">
                  <div className="p-2 bg-rose-200 rounded-xl">
                    <IoLocationOutline className="text-rose-600 text-2xl " />
                  </div>
                  <div className="">
                    <p className="leading-4">Location</p>
                    <p>Skopje, North Macedonia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            className="w-3/6 bg-stone-900  rounded-2xl text-neutral-200 flex flex-col p-7 max-md:w-full"
            onSubmit={submitMessage}
          >
            <Input
              label="Your Name"
              name="name"
              placeholder="John Doe"
              onChange={handleChange}
              value={formData.name}
            />
            <Input
              label="Your Email"
              name="email"
              placeholder="john@example.com"
              onChange={handleChange}
              value={formData.email}
            />
            <Input
              label="Subject"
              name="subject"
              placeholder="Project inquiry"
              onChange={handleChange}
              value={formData.subject}
            />
            <div className="flex flex-col mt-5 ">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="bg-stone-800 resize-none p-2 placeholder:p-2 placeholder:text-stone-600 mt-2 focus:outline-none focus:ring-1 focus:ring-rose-600 rounded-xl focus:placeholder-transparent"
                placeholder="Your Message..."
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>

            {serverMessage && (
              <Modal onClose={() => setServerMessage("")}>
                {isError ? (
                  <MdErrorOutline className="text-red-500 text-7xl" />
                ) : (
                  <MdCheckCircleOutline className="text-green-500 text-7xl" />
                )}
                {serverMessage.split(". ").map((sentence, index) => (
                  <p key={index}>{sentence.trim()}.</p>
                ))}
                <button
                  className="text-neutral-200 bg-rose-600 rounded-2xl p-1 pl-3 pr-3 mt-5 cursor-pointer hover:bg-rose-500"
                  onClick={() => {
                    setServerMessage("");
                    setLoading(false);
                  }}
                >
                  Close
                </button>
              </Modal>
            )}

            <button className="bg-rose-600 rounded-lg mt-7 p-6 pt-1 pb-1 w-fit self-center hover:bg-rose-200 hover:text-rose-600 duration-500 cursor-pointer">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
