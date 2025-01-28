import bed from "../src/assets/bed.jpg";
import eye from "../src/assets/eye.jpg";
import eye2 from "../src/assets/eye2.jpg";
import mri from "../src/assets/mri.jpg";
import monitor from "../src/assets/monitor.jpg";




export function ImageRender() {
    return <div className="mt-20 grid grid-cols-4 gap-20 ">
         <img  className=" rounded-lg  shadow-lg scale-down p-2 m-2  " src={bed} alt="Bed" />
        <img  className=" rounded-lg shadow-lg scale-down p-2 m-2" src={eye} alt="Eye" />
        <img  className="rounded-lg shadow-lg scale-down p-2 m-2" src={mri} alt="MRI" />
        <img  className=" rounded-lg  shadow-lg scale-down p-2 m-2" src={monitor} alt="Monitor" />
        
    </div>
}

