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

    const [books, setBooks] = useState<IState["books"]>([])

  return (
    <div className="App">
    <h1>Books to Read</h1>
        <List books = {books} />
    </div>
  );
};

export default App;
