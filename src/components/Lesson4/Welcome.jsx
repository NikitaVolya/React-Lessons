

function Welcome({ name }) {
    const isLoggedIn = true;
    return( <>
        { isLoggedIn 
        ? <h1>Welcome! {name}</h1>
        : <h1>Error</h1>    
        }
    </>);
}

export default Welcome;