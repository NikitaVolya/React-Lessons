
import Login from "./Authorisation/Login";
import Timer from "./timer/Timer";

function Lesson4() {

    const colors = {
        8: "green",
        16: "red",
        24: "yellow"
    }

    return <>
        <Login></Login>
        <Timer 
        showDate={false} 
        colors={colors} 
        fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"></Timer>
    </>;
}

export default Lesson4;