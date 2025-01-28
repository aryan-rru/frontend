import {TopBar} from "../components/TopBar";
import {Footer} from "../components/Footer";
import {HospitalSearch} from "../components/hospitalSearch";
import {useState} from "react";


export function FindAHospital() {
    const [hospital] = useState([{name:"hospital1",address:"address1",phone:"phone1",email:"email1",website:"website1"},{name:"hospital2",address:"address2",phone:"phone2",email:"email2",website:"website2"},{name:"hospital3",address:"address3",phone:"phone3",email:"email3",website:"website3"}]);
    return <div>
        <TopBar />
        <HospitalSearch />
        <HospitalRender  hospital={hospital} />
        <Footer />
    </div>
}

function HospitalRender({hospital}) {
    return <div className="bg-[#DCDCDC] p-4">
        <div className="grid grid-cols-4 gap-4">
            {hospital.map((hospital) =>
                <div className="bg-[#F5F5F5] p-4 rounded-md shadow-md ">
                    <div>
                        <div>{hospital.name}</div>
                        <div>{hospital.address}</div>
                        <div>{hospital.phone}</div>
                        <div>{hospital.email}</div>
                        <div>{hospital.website}</div>
                    </div>
                </div>
            )}
        </div>
    </div>
}

