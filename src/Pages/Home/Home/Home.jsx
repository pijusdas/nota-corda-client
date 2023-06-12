import PopularInstractor from "../../PopularInstructor/PopularInstractor";
import PopularClass from "../PopularClass/PopularClass";
import Banner from "./Banner/Banner";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;