import React, { useRef } from "react";

import formDeco from '/images/form-deco.webp'

import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_i6u7mkc', 'template_q51lqon', form.current, {
      publicKey: 'uVzjSPTRvtw_FoMjj',
    }).then(
      () => {
        console.log('success');
      },
      (error) => {
        console.log('failed..', error.text);
      },
    );

    
  };

  return (
    <section
      id="contact"
      className="w-full aspect-[16/9] flex flex-col-reverse md:flex-row justify-center 2xl:gap-24 md:gap-8 sm:gap-4 gap-1 items-center 2xl:px-72 xl:px-48 lg:px-40 md:px-8 sm:px-6 px-4 2xl:py-28 md:py-16 py-10"
    >
      <div className="sm:h-full md:w-3/6 w-full flex flex-col md:gap-8 justify-end items-center">
        <div className="lg:h-1/5 md:h-2/5 h-full w-full flex flex-col justify-center items-center ">
          <h2
            style={{ fontFamily: "billock, sans-serif", lineHeight: 0.7 }}
            className="text-white text-nowrap 2xl:text-[8rem] lg:text-[5rem] md:text-[5rem] text-[4rem] text-center"
          >
            Let's Work <br/><span className="2xl:text-[9rem] md:text-[7rem]">Together!</span>
          </h2>
        </div>

        <form
          style={{ fontFamily: "montserrat, sans-serif" }}
          className="w-full flex flex-col 2xl:gap-3 gap-2 justify-end h-3/5 text-white"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col md:flex-row w-full gap-2">
            <input
              type="text"
              placeholder="FULL NAME"
              name="name"
              className=" 2xl:h-16 h-14 w-full rounded-lg bg-neutral-900 border-2 border-neutral-700 xl:p-8 p-4 outline-none placeholder-neutral-500"
              required
            />
            <input
                type="tel"
              placeholder="PHONE"
              name="phone"
              className="2xl:h-16  h-14 w-full rounded-lg bg-neutral-900 border-2 border-neutral-700 xl:p-8 p-4 outline-none placeholder-neutral-500"
              required
            />
          </div>
          <input
            type="email"
            placeholder="E-MAIL"
            name="email"
            className="2xl:h-16  h-14 rounded-lg bg-neutral-900 border-2 border-neutral-700 xl:p-8 p-4 outline-none placeholder-neutral-500"
            required
          />
          <textarea
            style={{ resize: "none" }}
            placeholder="MESSAGE"
            name="message"
            className="h-40 rounded-lg bg-neutral-900 border-2 border-neutral-700 xl:p-8 p-4 outline-none py-3 placeholder-neutral-500"
            required
          />
          <button type="submit" className="2xl:h-16 2xl:text-xl h-14 bg-white text-black text-xl font-extrabold rounded-lg">SEND</button>
        </form>
      </div>

      <div
        className="sm:h-full h-[60vh] md:w-3/6 w-full bg-zinc-900 border border-zinc-600 rounded-xl xl:rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <img src= {formDeco} alt="" className="scale-125" />
      </div>
    </section>
  );
}

export default Contact;
