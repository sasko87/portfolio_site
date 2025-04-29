import React from "react";
import Section from "./Section";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Input from "./Input";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="flex p-7  gap-7 mt-7 items-center justify-center max-md:flex-col">
          <div className="w-2/6 self-baseline max-md:w-full ">
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
          <form className="w-3/6 bg-stone-900 ml-5 mr-5 rounded-2xl text-neutral-200 flex flex-col p-7 max-md:w-full">
            <Input label="Your Name" name="name" placeholder="John Doe" />
            <Input
              label="Your Email"
              name="email"
              placeholder="john@example.com"
            />
            <Input
              label="Subject"
              name="subject"
              placeholder="Project inquiry"
            />
            <div className="flex flex-col mt-5 ">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="bg-stone-800 resize-none p-2 placeholder:p-2 placeholder:text-stone-600 mt-2"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button className="bg-rose-600 rounded-lg mt-7 p-6 pt-1 pb-1 w-fit self-center hover:bg-rose-200 hover:text-rose-600 duration-500 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
