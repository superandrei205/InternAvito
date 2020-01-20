import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ApiService from "../../service";
import PreviewFlatComponent from "../PreviewFlatComponent/PreviewFlatComponent";
import Loader from "../Loader/Loader";
import "./FlatList.css";

const FlatList = ({ history }) => {
    const apiService = new ApiService();

    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await apiService.getFlatsList();
            setItems(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleSelect = idx => {
        history.push(`/${idx}`);
    };

    return (
        <div className="flats-wrapper">
            {(loading && <Loader />) ||
                (items &&
                    items.map(item => (
                        <PreviewFlatComponent
                            key={item.id}
                            handleSelected={id => handleSelect(id)}
                            {...item}
                        />
                    )))}
        </div>
    );
};

export default withRouter(FlatList);
