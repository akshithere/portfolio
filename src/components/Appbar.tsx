import { NavLink } from "react-router-dom"
export default function Appbar(){
    return(
        <>
        <div className="flex justify-between items-center py-4 px-6">
            <div>
                <img src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/61defd565b95860877484fe4_Logo_Bazil.svg" alt="" />
            </div>
            <div>
                <ul className="font-abc text-2xl flex justify-evenly items-center space-x-20">
                    <li className="hover:transform hover:text-blue-900 hover:scale-110 transition-all"><NavLink className="project-link" to="/">Home</NavLink></li>
                    <li className="hover:transform hover:text-blue-900 hover:scale-110 transition-all"><NavLink className="project-link" to="/about">About</NavLink></li>
                    <li className="hover:transform hover:text-blue-900 hover:scale-110 transition-all"><NavLink className="project-link" to="/projects">Projects</NavLink></li>
                    <li className="hover:transform hover:text-blue-900 hover:scale-110 transition-all"><NavLink className="project-link" to="/contact">Contact</NavLink></li>
                    <button className="bg-black text-white hover:text-selectColor text-xl rounded px-6 py-3 flex items-center hover:px-10 hover:shadow-lg transition-all duration-300 ease-in-out">Drop an Email</button>
                    
                    
                </ul>
            </div>
        </div>
        </>
    )
}