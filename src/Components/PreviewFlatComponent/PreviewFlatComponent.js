import React from "react";
import "./PreviewFlatComponent.css";

const PreviewFlatComponent = ({
    id,
    address,
    title,
    previewImage,
    price,
    handleSelected
}) => {
    return (
        <div className="preview" onClick={() => handleSelected(id)}>
            <img className="preview__image" src={previewImage} alt={title} />
            <div className="preview__details">
                <a className="preview__link" href={`${id}`}>
                    {title}
                </a>
            </div>
            <div className="preview__price">
                <a className="preview__link" href={`${id}`}>
                    {price}
                </a>
            </div>
            <div className="preview__adress">{address}</div>
        </div>
    );
};

export default PreviewFlatComponent;
