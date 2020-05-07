import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Reviews from "./Components/Reviews/Reviews";
import Questions from "./Components/Questions/Questions";
import Cases from "./Components/Cases/Cases";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Main/>
                <Reviews/>
                <Questions/>
                <Cases/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
