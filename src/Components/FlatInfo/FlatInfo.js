import React from "react";
import "./FlatInfo.css";

const FlatInfo = ({ address, price, description, sellerName }) => {
    return (
        <div className="flat__info">
            <div className="flat__info__address ">{address}</div>
            <div className="flat__info__price">{price}</div>
            <div className="flat__info__description">{description}</div>
            <p className="flat__info__sellerName">{sellerName}</p>
        </div>
    );
};

export default FlatInfo;
