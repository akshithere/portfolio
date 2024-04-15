import p1 from '../../assets/p1.jpeg'
export default function Projects(){
    return(
        <div className="bg-bgPrimary flex justify-start items-start w-full flex-col mt-10 mx-10">

        <div className='flex-grow justify-start'><h1 className="font-primaryFont text-6xl font-bold mx-2">
           <i> "You are what you ship" </i>
        </h1></div>
        <div>
            <h1 className="font-primaryFont text-6xl font-bold my-2 mx-4">What I have been working on: </h1> </div>
            <div className="w-full my-6 flex justify-center items-center" >
                

             <div className='w-1/4 border border-solid border-white border-6 '>
                <img className='object-cover' src={p1} alt="" />
             </div>

             <div className='w-1/4 border border-solid border-white border-6 '>
                <video className='object-cover' src="https://framerusercontent.com/assets/HLmzf8kGBtkW76bWgrw1gM1Y.mp4" autoPlay loop />
             </div>

             <div className='w-1/4 border border-solid border-white border-6 '>
                <img className='object-cover' src="https://media.licdn.com/dms/image/D5622AQFIVCKM2BuJ9w/feedshare-shrink_2048_1536/0/1707328640223?e=1715817600&v=beta&t=5c5R0PVXqxLf0bJV1_NmQcOFWD2-Aay5J8xUW0ONOPk" alt="" />
             </div>

             <div className='w-1/4 border border-solid border-white border-6 '>
             <video className='object-cover' src="https://framerusercontent.com/assets/HLmzf8kGBtkW76bWgrw1gM1Y.mp4" autoPlay loop />
             </div>
  
            </div>
       
       

        </div>
      
    )
} 