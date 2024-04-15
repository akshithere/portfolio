import p1 from '../../assets/p1.jpeg'
import hero from '../../assets/hero.png'
export default function Projects(){
    return(
        <div className="bg-bgPrimary flex justify-start items-start w-full flex-col mt-10 mx-10">

        <div className='flex-grow justify-start'>
         <h1 className="font-primaryFont text-6xl font-bold mx-2">
           <i> "You are what you ship" </i>
        </h1>
        </div>

        <div>
            <h1 className="font-primaryFont text-6xl font-bold my-2 mx-4">What I have been working on: </h1>
         </div>
         
            <div className="w-full my-6 flex justify-center items-center" >
                

             <div className='relative border border-solid border-white border-6 w-60 h-60 overflow-hidden'>
                <a href="https://github.com/akshithere/codejam-v4">
                  
                <img className='object-cover' src={p1} alt="" />
                <h1 className='opacity-0 absolute bottom-5 right-0 left-0 text-center text-white border border-black border-solid border-2 font-bold font-primaryFont text-4xl hover:opacity-100 duration-10 transition-opacity'>Rhythmic Realm</h1>

                </a>
             </div>

             <div className='w-1/4 border border-solid border-white border-6 '>
             <video className='object-cover' src="https://framerusercontent.com/assets/HLmzf8kGBtkW76bWgrw1gM1Y.mp4" autoPlay loop />
             </div>

             <div className='relative border border-solid border-white border-6 w-60 h-60 overflow-hidden'>
                <a href="https://www.github.com/akshithere/portfolio">
                <img className='object-cover' src={hero} alt="" />
                <h1 className='opacity-0 absolute bottom-5 right-0 left-0 text-center border border-black border-solid border-2 text-white font-bold font-primaryFont text-4xl hover:opacity-100 duration-10 transition-opacity'>Portfolio</h1>
                </a>
             </div>

             <div className='w-1/4 border border-solid border-white border-6 '>
             <video className='object-cover' src="https://framerusercontent.com/assets/HLmzf8kGBtkW76bWgrw1gM1Y.mp4" autoPlay loop />
             </div>
  
            </div>
       
       

        </div>
      
    )
} 