import logo from "../src/assets/logo.png";
import { Button1 } from "./Button1";
import {useNavigate} from "react-router-dom";

export function TopBar() {
    const navigate = useNavigate();
    return <> <div className=" fixed top-0 left-0 right-0  bg-background h-20 flex justify-between items-center text-center px-4">
        <img className="w-20 h-20 mx-6 " src={logo} alt="logo" />
        <div className="flex-1 justify-center items-center  gap-4">
            <Button1 text="Home" onClick={() => {navigate("/home") }} />
            <Button1 text="Find a hospital" onClick={() => {navigate("/findahospital") }} />
            <Button1 text="Find a doctor" onClick={() => {navigate("/findadoctor") }} />
            <Button1 text="Beds Availability" onClick={() => {navigate("/bedavailibility") }} />
            <Button1 text="Book an Appointment" onClick={() => {navigate("/bookanappointment") }} />
                
        </div>
        <button 
          onClick={() => {navigate("/login")}} 
          className="text-black bg-background px-5 mx-4 py-2 rounded-md border-2 border-black shadow-md hover:bg-[#ff7b54] hover:text-black hover:border-black hover:font-bold"
        >Login →</button>
    
    </div>
    </>
}