import './Home.css';

function Home() {
    return (
        <div className='bg-multiple'>
            <div className="flex flex-col items-center justify-center text-white py-8 md:flex md:flex-row-reverse md:justify-center mx-12">
                <span className='font-light text-3xl tracking-widest'>Discover the new</span>
                <span className='text-transparent bg-gradient-to-br from-[#8684FF] to-[#84FFFF] bg-clip-text font-black text-3xl'>EDGE 30 NEO</span>
            </div>
        </div>
    )
}

export default Home