import Link from "next/link";

export default function Hero() {
    return(
        <div id="home" className="w-screen h-screen flex justify-center items-center">
            <div className="sm:w-[620px] lg:w-[824px] flex flex-col items-center justify-center lg:mb-10 sm:mb-0">
                <p className="text-left w-full lg:text-2xl sm:text-6xl text-blue-300 pl-2">{"//"}serving profile.jsx</p>
                <h1 className="lg:text-7xl md:text-9xl font-bold text-white">
                    Crafting Scalable Solution With <span className="text-red-300">Precision</span>
                </h1>
                <p className="w-full pl-2 lg:text-xl sm:text-5xl text-white">👩‍💻 Hi, My name is <span className="underline">Aarya Kasbe,</span> I&apos;m a React + Node developer.</p>
                <div className="mt-16">
                    <div 
                        className="text-white px-4 lg:py-2 py-8 m-6 mt-10 lg:w-72 w-100 rounded-xl flex justify-center sm:gap-6 lg:text-xl text-4xl font-bold"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                            backdropFilter: 'blur(2px)',
                            boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                        }}
                    >
                        <Link href={'/Resume.pdf'}>Resume</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
