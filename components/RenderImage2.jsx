import slogo1 from "../src/assets/slogo1.jpg";
import slogo2 from "../src/assets/slogo2.jpg";
import slogo3 from "../src/assets/slogo3.jpg";  
import slogo4 from "../src/assets/slogo4.jpg";
import slogo5 from "../src/assets/slogo5.jpg";
import slogo6 from "../src/assets/slogo6.jpg";


export function RenderImage2() {
    return <div className="grid grid-cols-2 gap-4 shadow-2xl px-20 " >
        <img className="rounded-lg  shadow-inner scale-down p-2 m-2 " src={slogo1} alt="slogo1" />
        <img className="rounded-lg  shadow-inner scale-down p-2 m-2 " src={slogo2} alt="slogo2" />
        <img className="rounded-lg  shadow-inner scale-down p-2 m-2 " src={slogo3} alt="slogo3" />
        <img className="rounded-lg  shadow-inner scale-down p-2 m-2 " src={slogo4} alt="slogo4" />
        <img className="rounded-lg  shadow-inner scale-down p-2 m-2 " src={slogo5} alt="slogo5" />
        <img className="rounded-lg shadow-inner scale-down p-2 m-2 " src={slogo6} alt="slogo6" />
    </div>
}