import React from "react";

import formDeco from '/images/form-deco.webp'

function Contact() {
  return (
    <section
      id="contact"
      className="w-full aspect-[16/9] flex flex-col-reverse md:flex-row justify-center sm:gap-4 gap-1 items-center xl:px-48 lg:px-20 md:px-8 sm:px-6 px-4 md:py-16 py-10"
    >
      <div className="sm:h-full md:w-3/6 w-full flex flex-col md:gap-8 justify-end items-center ">
        <div className="lg:h-1/5 md:h-2/5 h-full w-full flex flex-col justify-center items-center ">
          <h2
            style={{ fontFamily: "billock, sans-serif", lineHeight: 0.6 }}
            className="text-white lg:text-[5rem] md:text-[5rem] text-[4rem] text-center"
          >
            Let's Work Together!
          </h2>
        </div>

        <form
          style={{ fontFamily: "montserrat, sans-serif" }}
          className="w-full flex flex-col gap-2 justify-end h-3/5 text-white"
        >
          <input
            type="text"
            placeholder="FULL NAME"
            className="md:h-14 h-20 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none placeholder-neutral-400"
          />
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="PHONE"
            className="md:h-14 h-20 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none placeholder-neutral-400"
          />
          <input
            type="email"
            placeholder="E-MAIL"
            className="md:h-14 h-20 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none placeholder-neutral-400"
          />
          <textarea
            style={{ resize: "none" }}
            placeholder="MESSAGE"
            className="h-40 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none py-3 placeholder-neutral-400"
          />
        </form>
      </div>

      <div
        className="sm:h-full h-[60vh] md:w-3/6 w-full bg-zinc-900 border border-zinc-600 rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${formDeco})` }}
      />
    </section>
  );
}

export default Contact;
