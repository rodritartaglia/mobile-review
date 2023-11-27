interface FeatureCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

function FeatureCard({ title, description, imageSrc  } : FeatureCardProps) {
    return (
        <div className="flex flex-col mt-6 gap-4 relative min-h-[400px] min-w-[250px]">
            <div className="w-[90%] grow border-[5px] rounded-3xl p-4 border-[rgba(143,209,181,0.5)] mx-auto md:m-auto">
                <h3 className="text-2xl font-medium text-center mb-3 text-[#2CCF89] md:text-4xl">{title}</h3>
                <p className="text-sm text-white md:text-base">{description}</p>
            </div>
            <img src={imageSrc} alt="" className="rounded-2xl object-cover absolute bottom-0 md:w-1/2 md:m-auto w-full h-[40%]" />
        </div>
    )
}

export default FeatureCard