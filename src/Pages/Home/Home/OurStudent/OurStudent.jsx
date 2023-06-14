import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import './OurStudent.css';
import './css/slider.css'
import SectionTitle from "../../../Shared/SectionTitle";


const content = [
    {
        title: "A Life-Changing Musical Journey Igniting Passion and Excellence",
        description:
            "Since joining our music school, I have uncovered a world of musical brilliance. The dedicated instructors have nurtured my talent, guiding me towards excellence. The supportive community of musicians has inspired collaboration and growth. I am grateful for the unforgettable experiences and the remarkable musical journey at our esteemed music school",
        button: "Read More",
        image: "https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=600",
        user: "Luan Gjokaj",
        userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
        title: "Unleashing Creativity Finding Harmony in Our Music School",
        description:
            "Embarking on this musical journey at our school has unleashed my artistic expression. The passionate instructors have cultivated my skills and encouraged creative exploration. The inclusive community of fellow musicians has fostered collaboration and personal growth. I am indebted to our music school for the profound impact it has had on my musicality.",
        button: "Discover",
        image: "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "Empowering Artistic Growth Unforgettable Memories at Our Music School",
        description:
            "Harmonizing passion and growth, our music school has become my artistic haven. The dedicated instructors have nurtured my love for music, pushing me to achieve new heights. The vibrant community of musicians has fostered lifelong friendships and inspiring collaborations. I am forever grateful for the transformative experience and the opportunities it has provided",
        button: "Buy now",
        image: "https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    },
    {
        title: "Inspiring Connections Building Lifelong Musical Relationships",
        description:
            "Embarking on this empowering musical journey at our school has been a life-changing experience. The dedicated instructors have empowered me to embrace my musical potential. The supportive community of musicians has provided encouragement and invaluable connections. I am indebted to our music school for nurturing my passion and guiding me towards musical fulfillment.",
        button: "Buy now",
        image: "https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    },
];




// const img = 'https://images.pexels.com/photos/7521310/pexels-photo-7521310.jpeg?auto=compress&cs=tinysrgb&w=600'

const OurStudent = () => {
    return (
        <div>
           
                <div className=" mb-10">
                    <SectionTitle heading={'Our Student Says'}></SectionTitle>
                    <Slider className="slider-wrapper">
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` }}
                            >
                                <div className="inner">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <button className=" bg-sky-800 text-white font-bold">{item.button}</button>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
        </div>
    );
};

export default OurStudent;