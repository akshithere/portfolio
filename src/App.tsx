// Root.tsx

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Appbar from "./components/Appbar";
// import Home from "./components/Home";
import About from "./components/About";
import RootLayout from "./layouts/RootLayout";
import ProjectMenu from "./layouts/ProjectLayout";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./components/Home";
import { Navigate } from "react-router-dom";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


const router = createBrowserRouter([
  {path: "/",Component: RootLayout,

    errorElement: <ErrorComponent />,

    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About},
      {path:"/contact", Component: Contact},
      {path:"/projects", Component: Projects},
    ],
  },


  // { path: "*", Component: Root },
  //as a children agar mai kara contact add ta fer appbar dikahi de raha hai seperately nahi
  {
    path:"*",
    element:<Navigate to="/"/>,
    
  }
  
]);





// export function Root() {
//   return (
//     <div className="selection:bg-selectColor text-pink-500 bg-black">
//       <Outlet />
//     </div>
//   );
// }

export default function App() {
  return <RouterProvider router={router} />
  

}
