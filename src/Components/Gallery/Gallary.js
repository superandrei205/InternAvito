import React from "react";
import "./Gallary.css";

const Gallary = ({ images, imgIndex, onClick }) => {
    return (
        <div className="gallery">
            {images.map((item, index) => {
                if (imgIndex === index) {
                    return (
                        <div key={index} className="gallery__item">
                            <img
                                onClick={onClick}
                                className="gallery__item-current"
                                src={item}
                                id={index}
                            />
                        </div>
                    );
                }
                return (
                    <div key={index} className="gallery__item">
                        <img onClick={onClick} src={item} id={index} />
                    </div>
                );
            })}
        </div>
    );
};

export default Gallary;
