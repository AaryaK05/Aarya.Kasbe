import Link from "next/link";

export default function Navbar() {
    const list = {
        'Home': '#home',
        'About': '#about',
        'Projects': '#projects',
        'Contact': '#contact'
    };

    return (
        <div 
            className="px-4 py-2 m-6 mt-8 rounded-4xl w-80 sm:w-[620px] flex justify-center sm:gap-6"
            style={{
                background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                backdropFilter: 'blur(2px)',
                boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
            }}
        >
            {Object.entries(list).map(([key, href]) => (
                <Link key={key} href={href}>
                    <p 
                        className="px-3 py-2 rounded-2xl hover:text-[rgba(252, 252, 252, 0.4)] navelement hover:text-shadow-white text-shadow-sm hover:w-20 flex justify-center items-center"
                    >{key}</p>
                </Link>
            ))}
        </div>
    );
};