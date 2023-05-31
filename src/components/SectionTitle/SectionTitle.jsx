

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 my-4 md:w-1/3 mx-auto">{heading}</h3>
        </div>
    );
};

export default SectionTitle;