import { Link } from "react-router-dom";

const LearnMore = () => {
    return (
        <>
            <div className="bg-red-100 h-20 px-24 flex justify-between items-center">
                <h1 className="cursor-vertical-text font-serif text-sky-500 font-bold text-2xl">PRIVATE  LESSON</h1>
                <div className=" flex justify-between gap-6 font-serif">
                    <Link to={'/'} >Home</Link>
                    <p>Private Lession</p>
                </div>
            </div>
            <div className="h-full px-32 mb-14">
                <img className="" src="https://i.ibb.co/zPjGsqC/image-7.jpg" alt="" />
                <div>
                    <h1 className=" my-10 text-2xl font-sans font-bold"> Discover Our Unique Learning System</h1>

                    <p className=" text-gray-500">At Nota Corda, we take pride in offering a one-of-a-kind learning experience that goes far beyond traditional music education. Our comprehensive and innovative learning system is designed to nurture the musical talents of students of all ages and skill levels, ensuring that every student can reach their full potential.</p>

                    <h1 className=" my-8 text-2xl font-sans font-bold">What Sets Our Learning System Apart?</h1>
                    <p className=" text-gray-500">1. Tailored Curriculum: We understand that every student is unique. That's why we have developed a tailored curriculum that can be customized to meet the individual needs, goals, and musical interests of each student. Whether you are a beginner or an advanced musician, we have a program that suits you. <br /> <br />

                        2. Expert Instructors: Our team of experienced and passionate music instructors are dedicated to guiding you on your musical journey. They bring their expertise and knowledge to help you master your chosen instrument and develop your musical skills. Our instructors not only possess excellent musical abilities but also have a gift for teaching and mentoring students, ensuring that you receive the best education possible. <br /> <br />

                        3. Interactive Learning: We believe that music is best learned through active engagement. Our learning system encourages students to be actively involved in their learning, which fosters a deeper understanding and love for music. We employ a variety of teaching methods, including one-on-one instruction, group lessons, and interactive online resources to make learning enjoyable and effective.
                            <br /> <br />
                        4. Performance Opportunities: We understand the importance of practical experience in a musician's journey. We provide regular performance opportunities for our students, including recitals, concerts, and open mic events. These experiences help build confidence, stage presence, and a real-world understanding of what it means to be a musician.
                            <br /> <br />
                        5. State-of-the-Art Facilities: Our school is equipped with top-notch facilities, including soundproof practice rooms, recording studios, and a comfortable, inspiring environment that promotes creativity. Our facilities are designed to enhance your learning experience and provide a space where you can explore and hone your skills.</p>
                </div>

                <Link className=" btn w-44 rounded-full my-10 animate-bounce antialiased text-white bg-sky-400 hover:bg-sky-500">Take Classes</Link>
            </div>
        </>
    );
};

export default LearnMore;