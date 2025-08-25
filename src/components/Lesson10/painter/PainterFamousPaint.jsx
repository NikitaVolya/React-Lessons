import React from "react";
import "./Painter.css";


class PainterFamousPaint extends React.Component {

    render() {
        return <>
            <div className="page-container">
                <h1>Famous Painting</h1>
                <img 
                    src="https://uamodna.com/assets/articles/image/y/g/j/ygjntzgr/fullsize.jpg" 
                    alt="Famous painting" 
                    className="page-image"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada...
                </p>
            </div>
        </>;
    }
}

export default PainterFamousPaint;