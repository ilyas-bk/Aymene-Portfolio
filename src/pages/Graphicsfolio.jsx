import React from "react";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Graphicsfolio() {
  return (
    <>
      <Header />
      <main className="relative mt-20">
        {/* graphicsfolio Section */}
        <section
          id="work"
          className="relative bg-black w-full flex flex-col items-center gap-20 md:py-20 py-10 "
        >
          <h2
            style={{
              fontFamily: "montserrat, sans-serif",
              fontWeight: 900,
              WebkitTextStroke: "2px white",
            }}
            className="text-white text-5xl text-center"
          >
            GRAPHICS FOLIO
          </h2>

          <div className="w-full flex flex-col items-center gap-16">
            {/* Videos Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full xl:px-24 md:px-8 sm:px-6 px-4 gap-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`video-${i}`}
                  className="aspect-[16/9] rounded bg-zinc-900 border border-zinc-600"
                />
              ))}
            </div>
            <line className=" w-full h-[1px] bg-gradient-to-l from-black via-zinc-500 to-black"></line>
            {/* Reels Grid */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 w-full xl:px-24 md:px-8 sm:px-6 px-4">  
              {[...Array(4)].map((_, i) => (
                <div
                  key={`reel-${i}`}
                  className="aspect-[9/16] rounded bg-zinc-900 border border-zinc-600"
                />
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Graphicsfolio;
