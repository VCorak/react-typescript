import React from "react";

interface IProps {
    books: {
        title: string
        url: string
        score: number
        author: string
        note?: string
    }[]
}

const List: React.FC<IProps>= ({ books }) => {
    return (
        <div>
            I am list
        </div>
    );
};

export default List;