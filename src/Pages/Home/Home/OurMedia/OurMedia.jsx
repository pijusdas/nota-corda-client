
const OurMedia = () => {
    return (
        <div className=" flex flex-col justify-center items-center p-20 bg-red-50">
            <div className=" text-center">
                <h1 className=" text-2xl text-red-700 font-extrabold font-serif">Our Media</h1>

                <h1 className=" mt-3 mb-10 text-cyan-800 text-5xl font-serif font-extrabold">See what our students can do</h1>

                <p className=" mb-12 text-gray-500 font-bold">Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. <br /> Donec eu volutpat nibh, in maximus ligula.</p>
            </div>

            <div className=" rounded-2xl">
                <iframe className=" rounded-2xl border-y-8 border-amber-400" width="760" height="455" src="https://www.youtube.com/embed/TalgHWd550w?si=ewzfuX4sTXA1MlN7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>
    );
};

export default OurMedia;