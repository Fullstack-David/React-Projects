    
const Greeting = (isLoggedIn) => {
    const name = "David";
    // const isLoggedIn = true;
    return (
        <div>
            {/* <h3>
                {isLoggedIn && <h1>Välkommen {name}</h1>}
            </h3> */}
            {isLoggedIn ? (<h1>Välkommen tillbaka {name}</h1>) : (<h1>Vänligen logga in</h1>)}
            
        </div>
    );
}

export default Greeting;