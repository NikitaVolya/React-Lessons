import { useState, useEffect } from "react";


export default function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);


    return (
        <button onClick={() => setCount(count + 1)}>
            Pressed {count} times
        </button>
    );

}