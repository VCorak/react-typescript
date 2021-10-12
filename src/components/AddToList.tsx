import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    books: Props["books"]
    setBooks: React.Dispatch<React.SetStateAction<Props["books"]>>
}

const AddToList: React.FC<IProps> = ({books, setBooks}) => {
    
    const [input, setInput]= useState({
        title:"",
        author:"",
        img:"",
        score:"",
        note:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value // overriding the input name with written value
        })

        // with the "void" we are returning nothing in function
    }

    const handleClick = (): void => {
        if (
            !input.title ||
            !input.author ||
            !input.img
        ) {
            return
        }

        setBooks([
            ...books,
            {
                title: input.title,
                author: input.author,
                url: input.img,
                score: parseInt(input.score),
                note: input.note
            }
        ])

        setInput({
            title:"",
            author:"",
            img:"",
            score:"",
            note:""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Title"
                className="AddToList-input"
                value={input.title} // two way binding typical React thing
                onChange={handleChange}
                name="title"
            />
            <input
                type="text"
                placeholder="Author"
                className="AddToList-input"
                value={input.author}
                onChange={handleChange}
                name="author"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <input
                type="number"
                placeholder="Score"
                className="AddToList-input"
                value={input.score}
                onChange={handleChange}
                name="score"
            />
            <textarea
                placeholder="Note"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}

            >

                Add to List</button>

        </div>
    );
}

export default AddToList;