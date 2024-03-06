

const Message = () => {
    const name = "David";
   
    return (
        <>
            {name ? <h1>Hello Arnar </h1>: <h1>Hello world</h1>}
        </>
    );
}

export default Message