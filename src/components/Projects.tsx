import peera from '../../assets/peeraEdit.mp4'
export default function Projects(){
    return(
        <div className="bg-bgPrimary flex justify-start w-full">

        <div className='flex-grow justify-start'><h1 className="font-primaryFont text-6xl font-bold my-4 mx-2">
            What I have been working on
        </h1></div>
        {/* slider */}
        <div className="flex justify-end items-center w-1/3">
            <div className=''>
                <video className='object-cover animate-slideUp' autoPlay muted src={peera}></video>
                
            </div>
            
                <div className=''>
                <video className='object-cover' autoPlay muted src={peera}></video>
                </div>
            
        </div>

        </div>
    )
} 