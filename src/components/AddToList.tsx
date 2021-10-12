import React from "react";

const AddToList = () => {
    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Title"
                className="AddToList-input"
            />
            <input
                type="text"
                placeholder="Author"
                className="AddToList-input"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
            />
            <input
                type="text"
                placeholder="Score"
                className="AddToList-input"
            />
            <input
                type="text"
                placeholder="Note"
                className="AddToList-input"
            />

        </div>
    );
};

export default AddToList;