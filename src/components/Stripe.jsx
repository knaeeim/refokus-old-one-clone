// import React from 'react'

function Stripe({item}) {
  return (
    <div className="w-1/3 px-10 py-5 border-2 border-l-0 border-zinc-700 flex justify-between items-center">
        <img src={item.url} alt="" />
        <span className="font-semibold">{item.number}</span>
    </div>
  )
}

export default Stripe