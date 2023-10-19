function Header() {
  return (
    <header className="px-4 flex w-full justify-between text-white p-4 h-28 items-center">
      <span className="w-1/2 h-full flex"><img src="./logoMotoEdge.svg" alt="" className="h-10 m-auto"/></span>
      <div className="flex items-center gap-5 w-1/2 justify-center h-full">
        <button className='bg-gradient-to-br from-[#FF6384] to-[#B41637] py-1.5 px-6 rounded-tl-3xl rounded-br-3xl outline outline-2 -outline-offset-2 outline-[rgba(224,212,255,0.3)] drop-shadow-xl font-MPLUS2 text-xl font-black text-white'>COMPRAR</button>
      </div>
    </header>
  )
} 

export default Header