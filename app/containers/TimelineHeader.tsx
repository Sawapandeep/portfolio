import { Spotlight } from '../components/acternityui/Spotlight'

const TimelineHeader = () => {
    return (
        <div id="TimelineHeader" className="bg-black z-10">
            <div id="TimelineHEaderContainer" className="w-[90vw] max-w-[1360px] mx-auto">
                <div id="PaddingContainer" className="py-[120px] max-md:py-[90px]">
                    <div id="TimelineHeaderWrapper" className="max-w-screen-sm text-white text-center mx-auto">
                        <div id="MarginHeader" className=" bg-black">
                            <Spotlight
                                className="-top-40 left-0 md:left-60 md:-top-20"
                                fill="white"
                            />
                            <h1 id="HeadingTimeline" className="text-white font-medium text-5xl ">Originating My Ideas into  Reality</h1>
                        </div>
                        <p id="ParagraphTimeline" className="max-md:text-sm+ text-xl font-light"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineHeader