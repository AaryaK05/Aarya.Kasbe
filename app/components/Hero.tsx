import Link from "next/link";

export default function Hero() {
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-80 sm:w-[620px] flex flex-col items-center justify-center -mt-10">
                <p className="text-left w-full text-blue-300 pl-2">{"//"}serving profile.jsx</p>
                <h1 className="text-7xl font-bold">
                    Crafting Scalable Solution With <span className="text-red-300">Precision</span>
                </h1>
                <p className="w-full pl-2 text-xl">👩‍💻 Hi, My name is <span className="underline">Aarya Kasbe,</span> I&apos;m a React + Node developer.</p>
                <div className="mt-16">
                    <div 
                        className="px-4 py-2 m-6 mt-10 w-72 rounded-xl flex justify-center sm:gap-6 text-xl font-bold"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                            backdropFilter: 'blur(2px)',
                            boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                        }}
                    >
                        <Link href={'/'}>Resume</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
