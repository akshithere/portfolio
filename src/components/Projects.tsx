import peera from '../../assets/peeraEdit.mp4'
export default function Projects(){
    return(
        <div className="bg-bgPrimary flex justify-start w-full">

        <div className='flex-grow justify-start'><h1 className="font-primaryFont text-6xl font-bold my-4 mx-2">
            What I have been working on
        </h1></div>
        {/* slider */}
        <div className="flex justify-end items-center w-1/3 ">
            <div className='animate-slideUp'>

                {/* <video className='object-cover' autoPlay muted src={peera}></video> */}
                <img src="https://s3.amazonaws.com/www-inside-design/uploads/2020/09/aspect-ratios-blogpost-thumbnail-810x810.png" alt="" />
                
            </div>
            
                <div className=''>
                <video className='object-cover' autoPlay muted src={peera}></video>
                </div>
            
        </div>

        </div>
    )
} 