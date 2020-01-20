import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../service";
import "./FlatItem.css";
import Gallary from "../Gallery/Gallary";
import FlatInfo from "../FlatInfo/FlatInfo";
import Loader from "../Loader/Loader";

const FlatItem = ({ id }) => {
    const apiService = new ApiService();
    const [loading, setLoading] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const [imgLength, setImgLength] = useState(1);
    const [flatsData, setFlatsData] = useState({
        id: 0,
        address: "",
        price: 0,
        description: "",
        sellerName: "",
        images: []
    });

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await apiService.getFlatItem(id);
            setFlatsData(data[0]);
            setImgLength(data[0].images.length);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleSelectClick = e => {
        setImgIndex(e.target.id);
    };

    const handleChangeImg = e => {
        if (e.target.className === "flat__button flat__button-nextImage") {
            if (imgIndex === imgLength - 1) {
                setImgIndex(0);
            } else {
                setImgIndex(imgIndex + 1);
            }
        }
        if (e.target.className === "flat__button flat__button-prevImage") {
            if (imgIndex === 0) {
                setImgIndex(imgLength - 1);
            } else {
                setImgIndex(imgIndex - 1);
            }
        }
    };

    return (
        <>
            <Link to="/" className="back">
                <button className="back__button">Назад</button>
            </Link>
            {(loading && <Loader />) || (
                <div className="flat">
                    <div className="flat__title">
                        <h1>{flatsData.title}</h1>
                    </div>
                    <div className="flat__gallery">
                        <button
                            className="flat__button flat__button-prevImage"
                            type="button"
                            onClick={e => handleChangeImg(e)}
                        >
                            ❮
                        </button>
                        <img
                            className="flat__gallery-image"
                            src={flatsData.images[imgIndex]}
                            alt={flatsData.title}
                            index={imgIndex}
                        />
                        <button
                            className="flat__button flat__button-nextImage"
                            type="button"
                            onClick={e => handleChangeImg(e)}
                        >
                            ❯
                        </button>
                    </div>
                    <Gallary
                        onClick={e => handleSelectClick(e)}
                        imgIndex={imgIndex}
                        images={flatsData.images}
                    />
                    <FlatInfo
                        address={flatsData.address}
                        price={flatsData.price}
                        description={flatsData.description}
                        sellerName={flatsData.sellerName}
                    />
                </div>
            )}
        </>
    );
};

export default FlatItem;
