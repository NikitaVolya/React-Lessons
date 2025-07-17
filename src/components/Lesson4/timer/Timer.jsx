
import "./Timer.css";


function Timer({ colors, showDate = false, fontFamily = "'Courier New', monospace"}) {
    let backgrounds = {};
    if (!colors)  
    {
        backgrounds = {
            6: "black",
            12: "yellow",
            20: "blue",
            24: "black"
        };
    } else {
        backgrounds = colors;
    }

    const time = new Date();

    const getBackgroundColor = (time) => {
        let hours = time.getHours();
        for (let key in backgrounds)
        {
            if (hours < key)
            {
                return backgrounds[key];
            }
        }
        return null;
    }

    const formatTime = (date) => {
        const h = String(date.getHours()).padStart(2, '0');
        const m = String(date.getMinutes()).padStart(2, '0');
        const s = String(date.getSeconds()).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="timerWrapper" style={{ backgroundColor: getBackgroundColor(time), fontFamily: fontFamily }}>
            <div className="timerText">{formatTime(time)}</div>
            {
                showDate ? <b className="dateText">{Intl.DateTimeFormat('uk-UA').format(time)}</b> : null
            }
        </div>
    );
}

export default Timer;