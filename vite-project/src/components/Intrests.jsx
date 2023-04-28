const Intrests = (props) => {

    // eslint-disable-next-line react/prop-types
    const Name = props.name;
    // eslint-disable-next-line react/prop-types
    const Image = props.image;

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <div
                    className="image"
                >
                    <img
                        src={Image}
                        alt="about image"
                    />
                </div>
                <div
                    className="text"
                >
                    <h1
                        style={{
                            textAlign: "center"
                        }}
                    >
                        {Name}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Intrests;
