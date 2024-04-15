
import { NavLink } from "react-router-dom";
import gmail from '../../assets/gmail.png'
import X from '../../assets/X.png'
export default function Contact(){
    return(
        <>
        <div className="flex justify-center items-start mx-12 my-12 flex-col">
                <h1 className="font-primaryFont font-bold text-6xl">Contact Me:</h1>
                <h1 className="font-primaryFont font-bold text-6xl"><i>"Changing lives one at a time"</i></h1>
                
        </div>
        <div className="mt-4 flex justify-center items-center shadow-lg rounded-md text-center">
                    <div className="font-abc text-2xl w-1/4 h-64 shadow-2xl rounded-md mx-2 flex justify-center items-center flex-col "><NavLink to="https://www.github.com/akshithere">
                        <img className="object-cover w-full h-full rounded-md" src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-500x281.png" alt="" />
                     <p className="mb-2">Gihub</p>
                        </NavLink></div>
                    <div className="font-abc text-2xl w-1/4 h-64 shadow-lg rounded-md mx-2 flex justify-center mt-2 mb-2 items-center flex-col">
                        <img className="object-cover h-full rounded-md" src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="" />
                        <NavLink to="https://www.linkedin.com/in/akshit-54244a225/"> Linkedin </NavLink></div>                    
                    <div className="font-abc text-2xl w-1/4 h-64 shadow-lg rounded-md mx-2 flex justify-center items-center flex-col">
                        <img className="object-cover  h-full rounded-md" src={gmail} alt="" />
                         <a href="mailto:akshitrajputbusiness.com">Send email</a></div>            
                    <div className="font-abc text-2xl w-1/4 h-64 shadow-lg rounded-md py-2 mx-2 flex justify-center items-center flex-col">
                        <img className="object-cover h-full rounded-md " src={X} alt="" />
                        <NavLink to="https://twitter.com/iamakshithere">X</NavLink></div>        
         </div>   
                    </>
    )
}