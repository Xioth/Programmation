import './Home.css';

function Home(){
    return (
        <section id='home' className='bg-zinc-900 h-screen flex justify-center items-center snap-start section-with-background'>
            <div className='absolute right-64'>
                <div className='text-white text-center'>
                    <p className='font-bold text-5xl py-10'>Cyril Buée</p>
                    <p className='text-orange-400 font-bold'>Web technologies / Cybersecurity</p>
                </div>
            </div>
        </section>
    )
}

export default Home;