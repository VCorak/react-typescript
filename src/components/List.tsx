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
// we are not returning JSX element and TS hasn't caught this yet...
    // so when it comes to function we always want to define what to retun, and
    // here I want to return bunch of jsx elements, array of jsx elements but first
    // TS refered that I want to return array of nothing "void"
    // so we need to define that we want to return JSX.Element[], array of elements
    // hover over function name and see that is refering to jsx element
    const renderList = (): JSX.Element[] => {
        return books.map((book) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={book.url} />
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                    </div>
                    <p>{book.score} is a score on Goodreads</p>
                    <p className="List-note">{book.note}</p>
                </li>
            )
        });
    };
    return (
        <ul>
            {renderList()}
        </ul>
    );
};

export default List;