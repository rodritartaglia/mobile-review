import ReviewBlock from '../components/ReviewBlock'

function Reviews() {
  return (
    <div className='divide-y-2 divide-gray-600 flex flex-col gap-4 mt-4 mx-4'>
      <ReviewBlock 
      name={'Gabo Gabriel'} 
      title={'Increíble desempeño buena perfomance'} 
      message={'Me encanta muchisímo estoy muy complacido, me ha durado un montón la bateria'} 
      check={true} />
      <ReviewBlock 
      name={'Jere Jerito'} 
      title={'No sirve para nada'} 
      message={'Procesador malo, no me sirve para los juegos'} 
      check={false} />
      <ReviewBlock 
      name={'Tomi tomito'} 
      title={'Buen precio calidad'} 
      message={'Diseño perfecto, muy comodo a la mano'} 
      check={true} />
      
    </div>
  )
}

export default Reviews