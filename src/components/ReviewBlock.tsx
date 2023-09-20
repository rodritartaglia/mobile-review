import { IconCheck, IconStarFilled, IconStar, IconX } from '@tabler/icons-react';

interface ReviewBlockProps{
    name: string;
    title: string;
    message: string;
    check: boolean;
}

function ReviewBlock({name, title, message, check} : ReviewBlockProps) {

    const checkIcon = check ? <IconCheck/> : <IconX/>

    return (
        <div className="text-white py-2">
            <div className='flex w-24 text-primary'>
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStar />
                <IconStar />
            </div>
            <div className='flex gap-2 text-sm'>
                <span>{name}</span><span>·</span><span className='text-gray-400'>hace un año</span>
            </div>
            <h5 className='font-bold text-xl'>{title}</h5>
            <p className='my-4'>{message}</p>
            <div className='flex gap-2 font-semibold'>
                <span>Recomienda este producto</span> <span>{checkIcon}</span>
            </div>
        </div>
    )
}

export default ReviewBlock