import React, { useEffect } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




function Products() {

  useEffect(() => {
    const numInput = document.getElementById("numInput");
    if (numInput) {
      const handleInput = function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 2);
      };

      const handleWheel = function (event) {
        event.preventDefault();
      };

      numInput.addEventListener("input", handleInput);
      numInput.addEventListener("wheel", handleWheel);

      return () => {
        numInput.removeEventListener("input", handleInput);
        numInput.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);
  
  return (
    <>
      <Header />
      <main className="relative mt-20">
        <section className="h-auto w-full lg:px-24 px-6 flex flex-col pt-10 pb-20">
          <h2 className="text-5xl h-1/5 font-black flex items-center justify-center py-10 text-center">
            LENS STICKERS
          </h2>
          <div className="h-4/5 grid grid-cols-1 md:grid-cols-2 gap-14">
            {/*Product info*/}
            <div className=" w-full flex flex-col xl:gap-20 lg:gap-10 md:gap-10 gap-12  md:order-first order-last">
              <div className="flex flex-col gap-3 ">
                <h2 className="sm:text-3xl text-2xl font-extrabold">
                  DESCRIPTION
                </h2>
                <p className="xl:text-xl lg:text-lg ">
                  Quickly identify and organize your lenses. <br />
                  Waterproof and outdoor rated adhesive. <br />
                  UV & Scratch resistant.
                </p>
              </div>
              <dl className="flex justify-between items-center w-full">
                <dt className="text-4xl font-extrabold">TOTAL</dt>
                <dd className="text-5xl font-extrabold text-center w-full">
                  15$
                </dd>
              </dl>

              <div className="flex justify-between max-h-14">
                <input
                  type="number"
                  id="numInput"
                  className="w-14 rounded border border-spacing-3 h-14 text-center border-zinc-600 text-white text-3xl bg-zinc-900 outline-none font-bold"
                  min="0"
                  max="200"
                />
                <button
                  className="bg-zinc-600 rounded-lg w-5/6 py-2 font-extrabold text-3xl"
                  style={{
                    fontWeight: 900,
                    WebkitTextStroke: "1px white",
                  }}
                >
                  PURCHASE
                </button>
              </div>
            </div>

            {/*Product image place holder*/}
            <div className=" flex justify-center items-center w-full">
              <div className="aspect-[12/10] bg-zinc-900 border border-zinc-600 w-full rounded-lg"></div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Products;
