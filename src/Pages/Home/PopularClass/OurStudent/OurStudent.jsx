import { Link } from "react-router-dom";




const OurStudents = () => {
    return (
        <div className=" w-full h-screen mt-36 " style={{
            backgroundImage: `url("https://i.ibb.co/gzLBP5S/gabriel-gurrola-2-Uuh-MZEChdc-unsplash.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
        }}>

            <div className="w-full h-screen px-36 backdrop-blur-sm flex justify-evenly items-center gap-20">
                <div className=" text-white">

                    <h1 className=" text-white text-2xl font-bold mb-5">Our Classes</h1>
                    <h1 className=" text-4xl font-extrabold">About School</h1>

                    <p className=" text-xl font-bold my-9">Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada.</p>

                    <p className=" mb-9 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum sem ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus ligula, nec mattis libero. Donec eget felis odio.</p>

                    <Link to={'/learn'} className=" btn w-40 text-white font-bold border-none bg-red-600  hover:bg-red-800">View More</Link>
                </div>

                <div className="h-80 w-full border-y-8 rounded-3xl border-sky-500">

                    <img className=" h-80 w-full bg-cover rounded-2xl" src="https://i.ibb.co/TtPHg2x/soundtrap-1-NAYq-Sln-Xo8-unsplash.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default OurStudents;