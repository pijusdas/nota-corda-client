import PopularInstractor from "../../PopularInstructor/PopularInstractor";
import PopularClass from "../PopularClass/PopularClass";
import Banner from "./Banner/Banner";
import OurStudent from "./OurStudent/OurStudent";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
            <OurStudent/>
        </div>
    );
};

export default Home;