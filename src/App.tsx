import React, { useState } from 'react';
import './App.css';
import List from "./components/List";

interface IState {
    books: {
        title: string
        url: string
        score: number
        author: string
        note?: string
    }[]
}

function App() {

    const [books, setBooks] = useState<IState["books"]>([
        {
            title:"A Wrinkle in Time (Time Quintet, #1)",
            url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507963312l/33574273._SX318_.jpg",
            score: 4,
            author: "Madeleine L'Engle",
            note: "Out of this wild night, a strange visitor comes to the Murry house and beckons Meg, her brother Charles Wallace, and their friend Calvin O'Keefe on a most dangerous and extraordinary adventure—one that will threaten their lives and our universe."
        }
    ])

  return (
    <div className="App">
    <h1>Books to Read</h1>
        <List books = {books} />
    </div>
  );
};

export default App;
