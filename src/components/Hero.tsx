// import Typed from 'typed.js';
// import { useRef, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import hero from '../../assets/hero.png'
// export default function Hero(){
//     return(
//         <div className="relative flex justify-center">
//             {/*  */}
//     {/* <img src='https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/627a6ebf32659497910541fb_Photo_profil2-p-500.webp' alt="" /> */}
//     <img src={hero} className='w-1/2 h-1/2' alt="" />

//     <div className="absolute inset-0 flex justify-center items-center flex-col">

//         <TypingAnimation />

//         <div className='flex justify-center items-center '>
//         <button className="text-black font-primaryFont bg-transparent border border-solid border-10 border-black  hover:bg-black hover:text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-2 rounded  mr-1 mb-1 ease-linear transition-all duration-150 mx-5" type="button"
//       >
//   <NavLink to="/projects">Check my projects</NavLink>
// </button>
// <button className="text-black font-primaryFont bg-transparent border border-solid border-10 border-black  hover:bg-black hover:text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-2 rounded mr-1 mb-1 ease-linear transition-all duration-150 mx-5" type="button"
//       >
//   <NavLink to="https://www.github.com/akshithere">Github</NavLink>
// </button>

//         </div>
       
//         </div>
//         {/* 
//           */}
        
//         </div>
//     )
// }



// function TypingAnimation() {
//   // Create reference to store the DOM element containing the animation
//   const el = useRef(null);

//  useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['<b>Web Developer.</b>', '<b>&amp;</b> <b>Sophomore.</b>','<b>Open Source Contributor.</b> ', '<b>&amp;</b> <b>Freelancer.</b>'],
//       typeSpeed: 70,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className="App font-primaryFont text-6xl text-black mb-10">
//       <span ref={el} />
//     </div>
//   );
// }

 
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import hero from '../../assets/hero.png'
export default function Hero(){
    return(
        <div className="flex justify-center w-full scrollbar">
            <div className="flex justify-center items-center flex-grow w-1/2 flex-col">

            <div className='mx-14'>
            <h1 className='font-primaryFont text-6xl font-bold mx-14 selection:text-white'><i> "Change is the only Constant" </i></h1>
              </div>   

<div className='mt-20 selection:text-white'>
<TypingAnimation />
</div>

<div className=''>
  
<button className="text-black font-primaryFont bg-transparent border border-solid border-10 border-black  hover:bg-black hover:text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-2 rounded  mr-1 mb-1 ease-linear transition-all duration-150 mx-5" type="button"
>
<NavLink to="/projects">Check my projects</NavLink>
</button>
<button className="text-black font-primaryFont bg-transparent border border-solid border-10 border-black  hover:bg-black hover:text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-2 rounded mr-1 mb-1 ease-linear transition-all duration-150 mx-5" type="button"
>
<NavLink to="https://www.github.com/akshithere">Github</NavLink>
</button>

</div>

</div>

            <div className='w-1/2'>
    <img src={hero} className='' alt="" />
    </div>

    
        
        </div>
    )
}



function TypingAnimation() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

 useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<b>Web Developer.</b>', '<b>&amp;</b> <b>Sophomore.</b>','<b>Open Source Contributor.</b> ', '<b>&amp;</b> <b>Freelancer.</b>'],
      typeSpeed: 70,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App font-primaryFont text-6xl text-black mb-10">
      <span ref={el} />
    </div>
  );
}

 


