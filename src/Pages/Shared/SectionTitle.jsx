
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className=" mx-auto text-center w-4/12 my-8">
            <p className="text-red-800 mb-4 text-2xl">{subHeading}</p>
            <h1 className=" text-4xl uppercase border-y-4 py-4">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;