import { TopBar } from "../components/TopBar";
import { CardRender } from "../components/CardRender";
import hospitalHome from "../src/assets/hospitalHome.jpg";
import { ImageRender } from "../components/ImageRender";
import { RenderImage2 } from "../components/RenderImage2";
import {Footer} from "../components/Footer";

export function Home() {
    return <div className="relative z-0">
        <TopBar />
        <img className="w-full h-full" src={hospitalHome} alt="Landing Page" />
        <div 
            className="absolute w-9/12  shadow-[0_35px_60px_-15px_rgba(0,0,1,1)] rounded-full h-28 pt-6 bg-[#f8f1e9]" 
            style={{ top: '37%', left: '50%', transform: 'translateX(-50%)' }}
        >
            <CardRender />
        </div>
        <div className="flex-row p-20 w-full ">
            <ImageRender />
        </div>
        <div className="grid grid-cols-2 gap-20 h-3/4 w-3/4 ">
            <div className="flex flex-col mt-32 text-4xl text-[#6c757d] ">
                <div className=" justify-items-end">
                <div className=" mt-6 ">An</div>
                <div className="mt-5">Ecosystem for</div>
                <div className="mt-5">Clinical Excellence</div>
                </div>
            </div>
            <div>
                <RenderImage2 />
            </div>
        </div>
        <Footer />
    </div>
}