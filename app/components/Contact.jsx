import Link from "next/link";

export default function Contact() {
    return (
        <div id="contact" className="w-full h-fit flex flex-col grow lg:text-xl md:text-4xl sm:text-6xl">
            <div className="flex flex-col items-center justify-center lg:h-[50vh] md:h-[40vh] h-[60vh]">
            <img className="w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] absolute opacity-50" src="/Ellipse.png"/>
                <p className="text-red-300">Spark an idea?</p>
                <p className="text-white">Shoot it over — I’ll catch it and make it real.</p>
                <div
                    className="px-4 py-2 m-6 mt-10 w-72 rounded-xl flex justify-center sm:gap-6 text-xl font-bold"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                        backdropFilter: 'blur(2px)',
                        boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                    }}
                >
                    <div>kasbeaarya05@gmail.com</div>
                </div>
            </div>

            <div className="flex justify-between items-center px-5 py-10 sm:px-40">
                <div className="text-white">©Aarya Kasbe</div>
                <div className="flex gap-10">
                    <Link href=" https://github.com/AaryaK05">
                    <img className="lg:w-[25px] lg:h-[25px] md:h-[50px] md:w-[50px] w-[30px] h-[30px]" src="/github1.png" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/aarya-kasbe-87bab3227/">
                    <img className="lg:w-[25px] lg:h-[25px]md:h-[50px] md:w-[50px] w-[30px] h-[30px]" src="/linkedin.png" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
