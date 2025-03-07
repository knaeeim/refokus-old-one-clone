// import React from 'react'

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2 text-[11rem] font-semibold leading-none tracking-tight">
          refouks.
        </div>
        <div className="basis-1/2 flex gap-5">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => {
              return <a key={index} className="block mt-3 text-zinc-600">{item}</a>;
            })}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => {
              return <a key={index} className="block mt-3 text-zinc-600">{item}</a>;
            })}
          </div>

          <div className="basis-1/2 text-right flex flex-col items-end">
            <p className="text-sm mb-10">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
            <img className="bg-sky-600 px-3 py-1 w-24 rounded-full" src="/public/footer.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
