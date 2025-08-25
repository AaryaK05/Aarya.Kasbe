import Link from "next/link";
import { Fira_Code } from "next/font/google";

const fira=Fira_Code({
    weight:"400"
  })

export default function Navbar() {
    const list = {
        'Home': '#home',
        'About': '#about',
        'Projects': '#projects',
        'Contact': '#contact'
    };

    return (
        <div 
            className={` text-white px-4 py-2 m-6 mt-10 rounded-xl w-80 sm:w-[610px] md:w-[558px] lg:w-[1024px] flex justify-center sm:gap-6 ${fira.className}`}
            style={{
                background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                backdropFilter: 'blur(2px)',
                boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
            }}
        >
            {Object.entries(list).map(([key, href]) => (
                <Link key={key} href={href}>
                    <p 
                        className=" sm:text-[1.9rem] md:text-[1.7rem] lg:text-[1.2rem] px-3 py-2 rounded-sm hover:text-[rgba(252, 252, 252, 0.4)] navelement hover:text-shadow-white text-shadow-sm hover:w-20 flex justify-center items-center font-bold"
                    >{key}</p>
                </Link>
            ))}
        </div>
    );
};