import Link from "next/link"
export default function Projects() {
    return (
        <div id="projects" className="w-full h-fit mt-10 mb-10 lg:mb-30">{/*Projects section height and width */}
        <p className=" text-center text-red-300 lg:text-xl sm:text-4xl mb-10 ">Projects</p>
            <div className="flex flex-col items-center gap-10">{/* column alignment for list view */}
                {/* row alignment for project box */}
                <div className="flex sm:flex-row flex-col rounded-t-2xl rounded-bl-2xl w-[80%] lg:w-[50%] p-8 lg:text-xl md:text-4xl sm:text-4xl" style={{
                    background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                }}>{/* styling box*/}
                    <div className="flex flex-col w-full">{/* col alignment for text */}
                        <div className="text-red-300">CollabBoard</div>
                        <div className=" text-wrap text-white">A Collaborative whiteboard made using Socket.io+ react.js+ axios+ node.js+ express+ mongodb</div>
                    </div>
                    <div className="flex sm:flex-col justify-end flex-row gap-2">
                        <Link href="https://github.com/AaryaK05/CollabBoard">
                        <img className="lg:w-[22px] lg:h-[22px] w-[50px] h-[50px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/github.png" />
                        </Link>
                        <Link href="https://whiteboard-collab-u87n.onrender.com/">
                        <img className="lg:w-[22px] lg:h-[22px] w-[50px] h-[50px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/chain.png" />
                        </Link>
                    </div>
                </div>
                {/* Box ends here*/}
                {/* row alignment for project box */}
               <div className="flex sm:flex-row flex-col rounded-t-2xl rounded-bl-2xl w-[80%] lg:w-[50%] p-8 lg:text-xl md:text-4xl sm:text-4xl p-8" style={{
                    background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                }}>{/* styling box*/}
                    <div className="flex sm:flex-col justify-end flex-row gap-2">
                        <Link href="https://github.com/AaryaK05/BookNest">
                        <img className="lg:w-[22px] lg:h-[22px] w-[50px] h-[50px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/github.png" />
                        </Link>
                        <Link href="https://bookstore-mern-app-kfk9.onrender.com/">
                        <img className="lg:w-[22px] lg:h-[22px] w-[50px] h-[50px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/chain.png" />
                        </Link>
                    </div>
                    <div className="flex flex-col w-full items-end">{/* col alignment for text */}
                        <div className="text-red-300">BookNest</div>
                        <div className=" text-wrap text-right text-white">An ecommerce site made using react+node.js+ express + mongodb</div>
                    </div>
                </div>
                {/* Box ends here*/}
               {/* row alignment for project box */}
               <div className="flex sm:flex-row flex-col rounded-t-2xl rounded-bl-2xl w-[80%] lg:w-[50%] p-8 lg:text-xl md:text-4xl sm:text-4xl p-8" style={{
                    background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                }}>{/* styling box*/}
                    <div className="flex flex-col w-full">{/* col alignment for text */}
                        <div className="text-red-300">Slingyphus</div>
                        <div className=" text-wrap text-white">A simple 3d game made using Godot and GDscript.</div>
                    </div>
                    <div className="flex sm:flex-col justify-end flex-row gap-2">
                        <Link href="https://github.com/AaryaK05/Slingyphus">
                        <img className="lg:w-[22px] lg:h-[22px] w-[50px] h-[50px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/github.png" />
                        </Link>
                        <Link href="https://ak05.itch.io/gmtk-game">
                        <img className="lg:w-[22px] lg:h-[22px] w-[50px] h-[50px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/chain.png" />
                        </Link>
                    </div>
                </div>
                {/* Box ends here*/}
               
                
            </div>
        </div>
    )
}