import Link from "next/link";

export default function Contact() {
    return (
        <div className="w-full h-fit flex flex-col grow">
            <div className="flex flex-col items-center justify-center h-[90vh]">
            <img className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] absolute" src="/Ellipse.png"/>
                <p className="text-red-300">Spark an idea?</p>
                <p>Shoot it over — I’ll catch it and make it real.</p>
                <div
                    className="px-4 py-2 m-6 mt-10 w-72 rounded-xl flex justify-center sm:gap-6 text-xl font-bold"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                        backdropFilter: 'blur(2px)',
                        boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                    }}
                >
                    <Link href={'/'}>Contact Me</Link>
                </div>
            </div>

            <div className="flex justify-between px-5 py-10 sm:px-40">
                <div>©Aarya Kasbe</div>
                <div className="flex gap-10">
                    <img className="w-[15px] h-[15px]" src="/twitter.png" />
                    <img className="w-[15px] h-[15px]" src="/telegram.png" />
                    <img className="w-[15px] h-[15px]" src="/instagram.png" />
                    <img className="w-[15px] h-[15px]" src="/facebook.png" />
                    <img className="w-[15px] h-[15px]" src="/discord.png" />
                </div>
            </div>
        </div>
    )
}
