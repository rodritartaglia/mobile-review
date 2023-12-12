
function Design() {
  return (
    <div className="mx-6 md:flex  md:mx-0 md:relative md:mb-24">
      <div className="md:w-[60%] md:absolute md:right-0 md:drop-shadow-2xl md:px-6">
        <span className="font-semibold text-[2rem] text-[#FF6384] tracking-wider md:text-[1.75rem]">Diseñado pensando en ti</span>
        <p className="font-kantumruy font-light tracking-wider my-4 md:text-sm md:z-10">Con un diseño fino, ligero y muy elegante. El Motorola Edge 30 Neo es un teléfono que destaca en todos los sentidos. Se ve tan bien como se siente, ofreciéndote las características lideres del sector para sacar el máximo partido a tu día a día</p>
      </div>
      <div className="relative mb-24 md:m-0 md:w-[50%] md:static md:-z-10">
        <div className="">
          {/* <span className=" w-1/2 h-full block absolute"></span> */}
          <img src="./image4shadow.svg" alt="" className="h-full object-cover absolute w-1/2 hidden md:block" />
          <img src="./image4.png" alt="" className="md:h-full md:object-cover" />
        </div>
        <button className="spikyButton rounded-tr-3xl rounded-bl-3xl w-[80%] h-16 absolute -bottom-8 left-0 right-0 m-auto text-2xl md:w-1/3 md:-bottom-12">ADQUIERELO YA</button>
      </div>
    </div>
  )
}

export default Design