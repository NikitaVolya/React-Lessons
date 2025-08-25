import React from "react";
import "./Painter.css";


class PainterGallery extends React.Component {

    constructor() {
        super();

        this.images = [
            "https://lihtaryk.com.ua/wp-content/uploads/2018/03/van-gog.jpg",
            "https://www.uagallery.com.ua/files/categories/xpeizag.jpg.pagespeed.ic.8D_4J7ir71.jpgs",
            "https://print4you.com.ua/upload/iblock/162/162b90296df890c2295d9170e3d70943.jpg",
            "https://lihtaryk.com.ua/wp-content/uploads/2018/03/claude-monet-vpechatlenie-voshod-solnca.jpg"
        ];
    }

    render() {
        return <>
            <div className="page-container">
                <h1>Gallery</h1>
                <div className="gallery-grid">
                    {
                        this.images.map((src, index) => (
                            <img key={index} src={src} alt={`Painting ${index + 1}`} className="gallery-image"/>
                        ))
                    }
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt...
                </p>
            </div>
        </>;
    }
}

export default PainterGallery;