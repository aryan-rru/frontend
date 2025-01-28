import {Home} from "./Home";
import {FindAHospital} from "./FindAHospital";
import {FindADoctor} from "./FindADocter";
import {BedAvailability} from "./BedAvailability.jsx";
import {BookAnAppointment} from "./BookAnAppointment.jsx";
import {Login} from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export function MainApp() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/findahospital" element={<FindAHospital />} />
                <Route path="/findadoctor" element={<FindADoctor />} />
                <Route path="/bedavailibility" element={<BedAvailability />} />
                <Route path="/bookanappointment" element={<BookAnAppointment />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </>
    
    
}