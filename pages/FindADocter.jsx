import {TopBar} from "../components/TopBar";
import {Footer} from "../components/Footer";
import {DoctorSearch} from "../components/DoctorSearch";
import {useState} from "react";

export function FindADoctor() {
    const [doctor] = useState([{name:"doctor1",speciality:"speciality1",phone:"phone1",email:"email1",website:"website1"},{name:"doctor2",speciality:"speciality2",phone:"phone2",email:"email2",website:"website2"},{name:"doctor3",speciality:"speciality3",phone:"phone3",email:"email3",website:"website3"}]);
    return <div>
        <TopBar />
        <DoctorSearch />
        <DoctorRender doctor={doctor} />
        <Footer />
    </div>
}

function DoctorRender({doctor}) {
    return  <div className="bg-[#DCDCDC] p-4">  
    <div className="grid grid-cols-4 gap-4">
        {doctor.map((doctor) =>
            <div className="bg-[#F5F5F5] p-4 rounded-md shadow-md ">
                <div>
                    <div>{doctor.name}</div>
                    <div>{doctor.speciality}</div>
                    <div>{doctor.phone}</div>
                    <div>{doctor.email}</div>
                    <div>{doctor.website}</div>
                </div>
            </div>
        )}
    </div>
</div>
}