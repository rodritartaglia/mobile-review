import { IconCheck, IconStarFilled, IconStar, IconX } from '@tabler/icons-react';

interface ReviewBlockProps {
    name: string
    title: string
    description: string
    recommend: boolean
    stars: number
    valueProduct: number
    easyToUse: number
    camera: number
    performance: number
    date: number
}

function ReviewBlock({ name, title, description, recommend, valueProduct, easyToUse, camera, performance, date }: ReviewBlockProps) {

    const checkIcon = recommend ? <IconCheck /> : <IconX />

    return (
        <div className="text-white py-4 flex flex-col gap-10">
            <div className='flex gap-2'>
                <div className='flex text-[#2CCF89] mr-4'>
                    <IconStarFilled />
                    <IconStarFilled />
                    <IconStarFilled />
                    <IconStar />
                    <IconStar />
                </div>
                <span>{name}</span><span>·</span><span className='text-gray-400'>hace {date} semanas</span>
            </div>
            <div className='flex'>
                <div className='w-3/5 pr-10'>
                    <h5 className='font-bold text-lg'>{title}</h5>
                    <p className='text-base my-4'>{description}</p>
                </div>
                <div className='w-2/5 relative'>
                    <span>Valor del producto</span>
                    <span className={`w-full h-6 bg-transparent border border-[#22855B] block rounded-full absolute`}></span>
                    <span style={{ width: `${valueProduct * 10}%` }} className={`h-6 bg-[#22855B] block rounded-full`}></span>
                    <span>Facilidad de uso</span>
                    <span className={`w-full h-6 bg-transparent border border-[#22855B] block rounded-full absolute`}></span>
                    <span style={{ width: `${easyToUse * 10}%` }} className={`h-6 bg-[#22855B] block rounded-full`}></span>
                    <span>Cámara</span>
                    <span className={`w-full h-6 bg-transparent border border-[#22855B] block rounded-full absolute`}></span>
                    <span style={{ width: `${camera * 10}%` }} className={`h-6 bg-[#22855B] block rounded-full`}></span>
                    <span>Rendimiento</span>
                    <span className={`w-full h-6 bg-transparent border border-[#22855B] block rounded-full absolute`}></span>
                    <span style={{ width: `${performance * 10}%` }} className={`h-6 bg-[#22855B] block rounded-full`}></span>
                </div>
            </div>
            <div className='flex gap-2 font-semibold'>
                <span>Recomienda este producto</span> <span>{checkIcon}</span>
            </div>
        </div>
    )
}

export default ReviewBlock