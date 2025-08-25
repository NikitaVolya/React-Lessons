import React from "react";
import "./Painter.css";


class PainterBio extends React.Component {

    render() {
        return <>
            <div className="page-container">
            <h1>Artist Biography</h1>
            <img 
                src="https://www.museothyssen.org/sites/default/files/imagen/obras/1980.27_retrato-pintor-m-trankler.jpg" 
                alt="Artist portrait" 
                className="page-image"/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
            </p>
            </div>
        </>;
    }
}

export default PainterBio;