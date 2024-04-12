
export default function Hero(){
    return(
        <div className="relative flex justify-center">
            {/*  */}
    <img src='https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/627a6ebf32659497910541fb_Photo_profil2-p-500.webp' alt="" />
    <div className="absolute inset-0 flex justify-center items-center flex-col">
    <h1 className="text-8xl font-titleFont hover:text-selectColor"><span className=" text-stroke stroke-black">WEB</span></h1>
    <br />
    <h1 className="text-8xl font-titleFont  hover:text-selectColor">DEVELOPER</h1>
    </div>
        </div>
    )
}