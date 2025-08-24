export default function Projects() {
    return (
        <div className="w-full h-screen mt-10">{/*Projects section height and width */}
            <div className="flex flex-col items-center gap-10">{/* column alignment for list view */}
                {/* row alignment for project box */}
                <div className="flex sm:flex-row flex-col rounded-t-2xl rounded-bl-2xl w-[40%] p-8" style={{
                    background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                }}>{/* styling box*/}
                    <div className="flex flex-col w-full">{/* col alignment for text */}
                        <div className="text-red-300">CollabBoard</div>
                        <div className=" text-wrap">A Collaborative whiteboard made using Socket.io+ react.js+ axios+ node.js+ express+ mongodb</div>
                    </div>
                    <div className="flex sm:flex-col justify-end flex-row gap-2">
                        <img className="w-[22px] h-[22px]" src="/github.png" />
                        <img className="w-[22px] h-[22px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/chain.png" />
                    </div>
                </div>
                {/* Box ends here*/}
                {/* row alignment for project box */}
               <div className="flex sm:flex-row flex-col rounded-t-2xl rounded-bl-2xl w-[40%] p-8" style={{
                    background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                }}>{/* styling box*/}
                    <div className="flex sm:flex-col justify-end flex-row gap-2">
                        <img className="w-[22px] h-[22px]" src="/github.png" />
                        <img className="w-[22px] h-[22px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/chain.png" />
                    </div>
                    <div className="flex flex-col w-full items-end">{/* col alignment for text */}
                        <div className="text-red-300">CollabBoard</div>
                        <div className=" text-wrap text-right">A Collaborative whiteboard made using Socket.io+ react.js+ axios+ node.js+ express+ mongodb</div>
                    </div>
                </div>
                {/* Box ends here*/}
               {/* row alignment for project box */}
               <div className="flex sm:flex-row flex-col rounded-t-2xl rounded-bl-2xl w-[40%] p-8" style={{
                    background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                }}>{/* styling box*/}
                    <div className="flex flex-col w-full">{/* col alignment for text */}
                        <div className="text-red-300">CollabBoard</div>
                        <div className=" text-wrap">A Collaborative whiteboard made using Socket.io+ react.js+ axios+ node.js+ express+ mongodb</div>
                    </div>
                    <div className="flex sm:flex-col justify-end flex-row gap-2">
                        <img className="w-[22px] h-[22px]" src="/github.png" />
                        <img className="w-[22px] h-[22px] filter hover:drop-shadow-[0_0_6px_rgba(172,121,206,0.8)] transition-all duration-200" src="/chain.png" />
                    </div>
                </div>
                {/* Box ends here*/}
               
                
            </div>
        </div>
    )
}