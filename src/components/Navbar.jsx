// import React from 'react'

import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <div className="flex items-center">
          <img
            src="../../public/Screenshot 2025-02-17 at 4.32.44 PM.png"
            alt=""
          />
          <h1>Refoukus</h1>
        </div>

        <div className="links flex gap-10 items-center justify-center ml-32 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-600"></span>
            ) : (
              <a className="flex items-center gap-1" href="#" key={index}>
                {index == 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <Button title={"Get Started"}/>
    </div>
  );
}

export default Navbar;
