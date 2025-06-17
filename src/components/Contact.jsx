import React from "react";

import formDeco from '/images/form-deco.webp'

function Contact() {
  return (
    <section
      id="contact"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="xl:w-8/12 w-10/12 gap-[5%] h-5/6 flex justify-center flex-col-reverse md:flex-row">
        <div className="lg:w-3/6  w-full h-full flex flex-col justify-between">
          <div className="  w-full xl:py-12 py-4 flex flex-col justify-center items-center ">
            <h2
              style={{ fontFamily: "billock, sans-serif", lineHeight: 0.7 }}
              className="text-white xl:text-[11rem] lg:text-[6rem] md:text-[5rem] text-[4rem] text-center"
            >
              Let's Work <span className="xl:text-[14rem] lg:text-[7rem] md:text-[6rem] text-[5rem]">Together!</span>
            </h2>
          </div>

          <form
            style={{ fontFamily: "montserrat, sans-serif" }}
            className="w-full flex  flex-col xl:gap-5 gap-2 justify-end  text-white"
          >
            <input
              type="text"
              placeholder="FULL NAME"
              className=" xl:text-3xl xl:h-24 md:h-12 h-20 rounded-lg bg-neutral-900 border border-neutral-500 xl:p-10 p-4 outline-none placeholder-neutral-400"
            />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="PHONE"
              className=" xl:text-3xl xl:h-24 md:h-12 h-20 rounded-lg bg-neutral-900 border border-neutral-500 xl:p-10 p-4 outline-none placeholder-neutral-400"
            />
            <input
              type="email"
              placeholder="E-MAIL"
              className=" xl:text-3xl xl:h-24 md:h-12 h-20 rounded-lg bg-neutral-900 border border-neutral-500 xl:p-10 p-4 outline-none placeholder-neutral-400"
            />
            <textarea
              style={{ resize: "none" }}
              placeholder="MESSAGE"
              className="xl:h-44 h-30 xl:text-3xl rounded-lg bg-neutral-900 border border-neutral-500 xl:p-10 p-4 outline-none  placeholder-neutral-400"
            />
            <button className="xl:h-28 xl:text-4xl h-14  bg-indigo-600 rounded-3xl">SUBMIT</button>
          </form>
        </div>
        <div className="lg:w-3/6 w-full">
          <div
            className="sm:h-full h-[60vh] w-full bg-zinc-900 border border-zinc-600 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${formDeco})` }}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;


      // <div className="sm:h-full xl:w-2/6 md:w-3/6 w-full flex flex-col md:gap-8 justify-end items-center ">
        // <div className="lg:h-1/5 border md:h-2/5 h-full w-full flex flex-col justify-center items-center ">
        //   <h2
        //     style={{ fontFamily: "billock, sans-serif", lineHeight: 0.6 }}
        //     className="text-white xl:text-9xl lg:text-[5rem] md:text-[5rem] text-[4rem] text-center"
        //   >
        //     Let's Work Together!
        //   </h2>
        // </div>

        // <form
        //   style={{ fontFamily: "montserrat, sans-serif" }}
        //   className="w-full flex flex-col gap-2 justify-end h-3/5 text-white"
        // >
        //   <input
        //     type="text"
        //     placeholder="FULL NAME"
        //     className="md:h-14 h-20 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none placeholder-neutral-400"
        //   />
        //   <input
        //     type="tel"
        //     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        //     placeholder="PHONE"
        //     className="md:h-14 h-20 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none placeholder-neutral-400"
        //   />
        //   <input
        //     type="email"
        //     placeholder="E-MAIL"
        //     className="md:h-14 h-20 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none placeholder-neutral-400"
        //   />
        //   <textarea
        //     style={{ resize: "none" }}
        //     placeholder="MESSAGE"
        //     className="h-40 rounded-lg bg-neutral-900 border border-neutral-500 px-4 outline-none py-3 placeholder-neutral-400"
        //   />
        // </form>
      // </div>

      // <div
      //   className="sm:h-full h-[60vh] md:w-3/6 w-full bg-zinc-900 border border-zinc-600 rounded-lg bg-cover bg-center bg-no-repeat"
      //   style={{ backgroundImage: `url(${formDeco})` }}
      // />