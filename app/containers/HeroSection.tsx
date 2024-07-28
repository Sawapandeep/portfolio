import myImage from "@/public/Images/myImage.jpg";
import Image from "next/image";
const HeroSection = () => {
    return (
        <div id='HeroSection' className=' flex overflow-hidden justify-around items-center gap-x-0 gap-y-0 mb-[50px] pb-9 px-[30px]' >
            <div id='heroContainer' className=' overflow-visible max-w-none order-none pb-0'>
                <div id='heroQuickstack' className="grid grid-cols-2 grid-rows-none w-auto max-w-[60vw] gap-x-0 gap-y-0.5 mb-0 px-0 py-2.5">
                    <div id="heroCell1" className="flex flex-col justify-center flex-nowrap items-baseline cursor-text pl-0">
                        <h1 id="heroHeading" className="self-start grow-0 shrink basis-auto font-semibold text-4xl leading-10">hi.
                            <br />
                            i'm
                            <br />
                            sawapan
                        </h1>
                        <p id="heroParagrah" className="static overflow-visible self-start grow-0 shrink basis-auto aspect-auto text-left cursor-auto object-contain mt-2.5 font-medium text-xl leading-5">
                            Visioning to craft visually stunning, user-friendly websites that provide unforgettable user experience.
                            Using trusted techniques and deep understanding and user needs.
                        </p>
                    </div>
                    <div id="heroCell2" className="block flex-row justify-center flex-nowrap items-center bg-clip-content pt-0">
                        <Image src={myImage} alt="myImage" className="self-auto align-baseline object-fill" />
                    </div>
                    <div id="heroCell3" className="flex flex-row justify-between flex-nowrap items-center">
                        <button id="heroButton" className="static overflow-visible box-border clear-none aspect-auto bg-transparent text-center no-underline object-fill pl-2 pr-2.5 py-2 rounded-full border-2 border-white text-2xl leading-5">
                            → say hi
                        </button>
                    </div>
                    <div id="heroCell4" className="block flex-row justify-center flex-nowrap items-center bg-clip-content pt-0"></div>
                </div>

                {/* <div id='heroQuickstack' className="w-auto max-w-[60vw] gap-x-0 gap-y-0.5 mb-0 px-0 py-2.5">
                    <div id="heroCell1" className="flex flex-col justify-center flex-nowrap items-baseline cursor-text pl-0">
                        <h1 id="heroHeading" className="self-start grow-0 shrink basis-auto font-medium">hi.
                            <br />
                            i'm
                            <br />
                            sawapan</h1>
                        <p id="heroParagrah" className="static overflow-visible self-start grow-0 shrink basis-auto aspect-auto text-left cursor-auto object-contain mt-2.5">Visioning to craft visually stunning, user-friendly websites that provide unforgettable user experience.
                            Using trusted techniques and deep understanding and user needs.</p>
                    </div>
                    <div id="heroCell2" className="block flex-row justify-center flex-nowrap items-center bg-clip-content pt-0">
                        <Image src={myImage} alt="myImage" className="self-auto align-baseline object-fill" />
                    </div>
                    <div id="heroCell3" className="flex-row justify-between flex-nowrap items-center">
                        <button id="heroButton" className="static overflow-visible box-border clear-none aspect-auto bg-transparent  text-[white] text-center no-underline cursor-auto object-fill pl-2 pr-2.5 rounded-br-[30px] rounded-t-[30px] rounded-bl-[30px] border-2 border-[white]" >→ say hi</button>
                    </div>
                    <div id="heroCell4" className=" block flex-row justify-center flex-nowrap items-center bg-clip-content pt-0"></div>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection;