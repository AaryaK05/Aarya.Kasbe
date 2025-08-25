import Link from "next/link";

export default function About() {
    return (
        <div id="about" className="w-full h-fit mb-30 sm:text-4xl md:text-4xl lg:text-xl">
            <p className=" text-center text-red-300 lg:text-xl sm:text-4xl mb-10 ">About</p>
            <div className="flex gap-10 sm:w-[80%] lg:w-[50%] mx-auto"> {/*About section */}
                <div className="w-fit p-8 h-auto  rounded-2xl" style={{
                    background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                }}>{/*Styling the box */}
                    <p className="text-red-300">Education</p>
                    <div className="flex gap-3 pt-2">{/*row alignment of children */}
                        <div className="w-[2px] h-[100px] bg-black"></div>{/*vertical line */}
                        <div className="flex flex-col text-white"><div>{/*coloumn alignment for name of colleges*/}
                            <div className="w-[10px] h-[10px] rounded-2xl absolute left-6 bg-[#D9D9D9]"></div>{/*circles*/}
                            <p>AISSMS COE </p>
                            <p>2022-2025</p>
                        </div>
                            <div>
                                <div className="w-[10px] h-[10px] rounded-2xl absolute  left-6 bg-[#D9D9D9]"></div>{/*circles*/}
                                <p>Cusrow Wadia Institute of Technology</p>
                                <p>2019-2022</p>
                            </div>
                        </div>
                    </div>
                </div>{/* First box ends here*/}
                <div className="flex flex-col gap-2">{/* column alignment for second column*/}
                    <div className="w-full p-5 h-fit rounded-2xl" style={{
                        background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                        backdropFilter: 'blur(2px)',
                        boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                    }}>{/*Styling the box */}
                        <p className=" text-center text-red-300">Tech I Use</p>
                        <div className="flex gap-2 flex-wrap text-white">
                        <div className="w-fit h-fit p-2 bg-[#000000] rounded-2xl ">Express.js</div>
                        <div className="w-fit h-fit p-2 bg-[#000000] rounded-2xl">Node.js</div>
                        <div className="w-fit h-fit p-2 bg-[#000000] rounded-2xl">TailwindCSS</div>
                        <div className="w-fit h-fit p-2 bg-[#000000] rounded-2xl">React.js</div>
                        <div className="w-fit h-fit p-2 bg-[#000000] rounded-2xl">Socket.io</div>
                        </div>
                    </div>
                    <div className="flex sm:flex-col md:flex-col lg:flex-row  w-full gap-2">{/* row alignment for second row in second column*/}
                        <div className="sm:w-full md:w-full w-full h-full">{/*Styling the box */}
                            <img className=" rounded-2xl" src="/coding.gif"/>
                        </div>
                        <div className="w-full wrap-normal p-8 h-full  rounded-2xl" style={{
                            background: 'linear-gradient(to bottom, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.1))',
                            backdropFilter: 'blur(2px)',
                            boxShadow: 'inset 1px 1px 6px 0.1px rgba(252, 252, 252, 0.4), inset -3px -2px 6px 0.1px rgba(252, 252, 252, 0.4)'
                        }}>{/*Styling the box */}
                            <p className="text-white"> Eager to join a fast-paced team and contribute to real-world solutions.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};
