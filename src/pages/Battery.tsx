function Battery() {
  return (
    <div className="text-white">
      <div>
        <div className="mt-14">
          <h3 className="text-3xl text-center font-medium my-4">Tú tienes el poder</h3>
          <div className="flex w-full mb-8">
            <div className="w-1/2 p-2">
              <h4 className="text-xl font-medium">La opción más rápida</h4>
              <p className="text-sm">Conéctate a velocidad de 5G sin tener que preocuparte de la duración de la batería con sus 4020 mAh y carga la batería para todo el día en tan solo diez minutos con la tecnología TurboPower™ de 68 W.</p>
            </div>
            <div className="w-1/2 p-2">
              <h4 className="text-xl font-medium">Potencia sin ataduras</h4>
              <p className="text-sm">Evita tener cables por todos lados gracias a la carga inalámbrica.</p>
            </div>
          </div>
        </div>
      </div>
      <img src="src/assets/battery.jpg" alt="" className="md:w-2/3 md:m-auto"/>
    </div>
  )
}

export default Battery