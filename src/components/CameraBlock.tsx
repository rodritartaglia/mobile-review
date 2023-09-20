interface CameraBlockProps {
    title: string;
    description: string;
    imageSrc: string;
    reverse: boolean;
}

function CameraBlock({ title, description, imageSrc, reverse } : CameraBlockProps) {
    return (
        <div className={`flex flex-col mt-6 gap-4 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="md:m-auto">
                <h3 className="text-2xl font-medium text-center mb-3 text-primary md:text-4xl">{title}</h3>
                <p className="text-sm md:text-base">{description}</p>
            </div>
            <img src={imageSrc} alt="" className="rounded-full md:w-1/2 md:m-auto" />
        </div>
    )
}

export default CameraBlock