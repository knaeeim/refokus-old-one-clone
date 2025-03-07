// import React from 'react'

function Stripe({item}) {
  return (
    <div className="w-1/2 md:w-1/3 md:px-10 py-5 border-2 border-l-0 border-zinc-700 flex flex-col gap-2 md:justify-between items-center">
        <img src={item.url} alt="" />
        <span className="font-semibold">{item.number}</span>
    </div>
  )
}

export default Stripe