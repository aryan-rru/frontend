import {TopBar} from "../components/TopBar";
import {Footer} from "../components/Footer";
import {Toogle} from "../components/Toogle";
import {InputBox} from "../components/InputBox";

export function Login() {
    return <div>
        <TopBar />
        <LoginForm />
        <Footer />
    </div>
}

function LoginForm() {

    return<>
    <div className="flex justify-center items-center h-screen">
        
        <div className="bg-[#ffe7e7] rounded-md shadow-md p-4 w-1/2 ">
        <Toogle />
       
        </div>
    
    </div>

    </>
}