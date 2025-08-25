import { useState, useRef } from "react";
import "./UserList.css";


export default function UserListAsync() {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const abortRef = useRef(null);


    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);
        setResult(null);

        const ctrl = new AbortController();
        abortRef.current = ctrl;

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ title,  body,  userId: 1 }),
                signal: ctrl.signal
                });

            if (!res.ok) {
                throw new Error("Faild to fetch");
            }

            const data = await res.json();
            setResult(data);
        } catch(err) {
            if (err.name != "AbortError") {
                console.log(ErrorEvent);
                setError(err.message);
            }
        } finally {
            setLoading(false);
            abortRef.current = null;
        }
    };

    const cancel = () => {
        abortRef.current?.abort();
    }


    return <>
        <form onSubmit={onSubmit}>
            <input 
            placeholder="Title"
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} />

            <input 
            placeholder="Body"
            type="text"
            value={body} 
            onChange={(e) => setBody(e.target.value)} />
            <button type="submit" disabled={loading}>Submit</button>
            <button onClick={cancel} disabled={!loading}>Cancel</button>
        </form>
        {loading && <p>Submiting...</p>}
        {error && <p style={{color: "crimson"}}>Error: {error}</p>}
        {result && 
        <>
            <h3>Created</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </>}
    </>

}