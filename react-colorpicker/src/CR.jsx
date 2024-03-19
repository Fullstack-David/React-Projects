const CR = (props) => {
    
    const welcomeMessage = <h2>Welcome {props.username}</h2>;
    const loginPrompt = <h2>Please login to continue</h2>

    return (
        <>
            { props.isLoggedIn && props.username === "David" ?welcomeMessage: loginPrompt} 

            <button onClick={() => props.handleLogin()}>Login</button>
        </>
    );
}

export default CR