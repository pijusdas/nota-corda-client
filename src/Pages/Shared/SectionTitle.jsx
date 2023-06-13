import { Fade } from "react-awesome-reveal";
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className=" mx-auto text-center w-4/12 my-8">
            <Fade cascade>
            <p className="text-red-800 mb-4 text-2xl font-bold">{subHeading}</p>
            <h1 className=" text-4xl uppercase text-sky-500 font-bold border-y-4 py-4">{heading}</h1>
            </Fade>
            
        </div>
    );
};

export default SectionTitle;