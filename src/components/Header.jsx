import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll')
  };

  return (
    <header className="absolute z-20 top-0 flex w-screen bg-gradient-to-b from-[#1e1b1b76] to-[#00000000]">
      <div
        id="navbar"
        className="flex w-screen h-20 z-20 items-center justify-between lg:px-20 md:px-8 px-6"
      >
        <Link to="/">
          <div className="cursor-pointer flex justify-between w-6 h-8">
            {/* Logo SVGs */}
            <div>
              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="34"
                fill="none"
                viewBox="0 0 42 34"
              >
                <path
                  fill="#fff"
                  d="M41.368 17.468a80.413 80.413 0 0 0-6.594-.423A467.648 467.648 0 0 0 31.995 27.5c-.785 3.235-1.24 5.307-1.366 6.217h-1.742c.094-1.004.533-3.124 1.318-6.358a292.17 292.17 0 0 1 2.732-10.361c-2.166 0-3.815.015-4.945.047C20.519 27.343 16.154 32.9 14.898 33.717l-3.155-.753c1.758-1.664 6.013-6.908 12.763-15.73-6.97.407-13.501 1.333-19.592 2.778l.847.753-1.177.801a39.506 39.506 0 0 1-3.061-1.648C.58 19.32.298 18.976.675 18.88c7.284-1.915 15.558-2.904 24.82-2.967l8.431-11.162C35.81 2.21 36.925.733 37.27.325l2.355 1.366c-.408.753-1.036 2.48-1.884 5.18a261.024 261.024 0 0 0-2.732 9.279c2.387.157 4.537.345 6.453.565l-.094.753Z"
                />
              </svg>
            </div>
            <div>
              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="30"
                fill="none"
                viewBox="0 0 61 30"
              >
                <path
                  fill="#fff"
                  d="M60.399 14.691c-1.602 2.292-4.679 4.616-9.231 6.97-4.522 2.355-9.718 4.302-15.59 5.84-5.872 1.54-11.492 2.308-16.861 2.308l-2.92-3.72 1.271-.612 1.696 2.119c5.024-.157 10.236-.91 15.637-2.26 5.432-1.382 10.283-3.125 14.553-5.229 4.27-2.103 7.285-4.27 9.043-6.5v-.093c-.408-.566-1.554-1.02-3.438-1.366-1.853-.346-4.082-.518-6.688-.518-4.522 0-8.792.502-12.811 1.507l-.612-1.366 1.271-.66c3.046-1.538 5.668-3.03 7.866-4.474 2.23-1.476 3.846-3.077 4.85-4.804h.19c-1.696-.063-3.894.33-6.594 1.178-2.67.816-5.495 2.01-8.478 3.58-2.983 1.538-5.715 3.296-8.195 5.274.722 1.319 2.213 2.292 4.474 2.92 2.26.628 5.306 1.225 9.137 1.79.314.031 1.036.141 2.167.33 1.13.157 2.088.33 2.873.518.785.157 1.413.33 1.884.518l-.283 2.402c-10.173-1.664-21.288-2.496-33.346-2.496-8.823 0-1.18-.88-12.264 0v-1.272c10.581-.471.6-.565 7.602-.565 8.98 0 17.19.377 24.632 1.13-2.23-.596-4.066-1.224-5.51-1.884-1.413-.66-2.324-1.413-2.732-2.26l-.99-1.79c2.23-1.978 4.946-3.862 8.149-5.652 3.203-1.821 6.358-3.234 9.467-4.239C43.726.28 46.254-.145 48.2.043l2.45 2.873c-.88 1.382-2.136 2.748-3.768 4.098a35.028 35.028 0 0 1-5.181 3.532c2.323-.345 4.898-.518 7.724-.518 2.418 0 4.521.157 6.311.471 1.79.283 2.92.707 3.391 1.272l1.272 2.92Z"
                />
              </svg>
            </div>
          </div>
        </Link>
        <div
          id="hamburger_menu"
          className="cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="menu-container">
            <div className={`line upper ${isMenuOpen ? "active" : ""}`}></div>
            <div className={`line lower ${isMenuOpen ? "active" : ""}`}></div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        className="absolute right-0 z-10 h-screen lg:min-w-[30rem] sm:min-w-[100vw] min-w-full font-semibold"
        style={{ fontFamily: "montserrat, sans-serif" }}
      >
        <div
          id="menu"
          className="text-3xl fixed flex flex-col items-center justify-center lg:w-[30rem] w-full h-screen bg-[#000000d0] gap-10"
          style={{
            transition: ".5s",
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
            <div className="w-full h-12 flex items-center justify-center">
              <Link to="/">
                <h2 className="cursor-pointer" onClick={toggleMenu} >ABOUT ME</h2>
              </Link>
            </div>
            <div className="w-full h-12 flex items-center justify-center">
              <Link to="/graphicsfolio">
                <h2 className="cursor-pointer" onClick={toggleMenu}>GRAPHICS FOLIO</h2>
              </Link>
            </div>
            <div className="w-full h-12 flex items-center justify-center">
              <Link to="/products">
                <h2 className="cursor-pointer" onClick={toggleMenu}>MY PRODUCTS</h2>
              </Link>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;