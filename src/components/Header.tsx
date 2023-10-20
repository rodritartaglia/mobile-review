function Header() {
  return (
    <header className="px-4 flex w-full justify-between text-white p-4 h-28 items-center">
      <span className="w-1/2 h-full flex"><img src="./logoMotoEdge.svg" alt="" className="h-10 m-auto"/></span>
      <div className="flex items-center gap-5 w-1/2 justify-center h-full">
        <button className='spikyButton py-1.5 px-6 rounded-tl-3xl rounded-br-3xl text-xl drop-shadow-xl'>COMPRAR</button>
      </div>
    </header>
  )
} 

export default Header