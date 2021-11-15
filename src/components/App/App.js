import React from 'react';
import CardPage from "../Pages/CardPage";
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import './App.css'
import ShopHeader from "../ShopHeader/ShopHeader";

class App extends React.Component {
    render() {
        return (
            <main className='container' role='main'>
                <ShopHeader/>
                <Routes>
                    <Route exact path={'/'} element={<HomePage/>}/>
                    <Route path={'/card-page/'} element={<CardPage/>}/>
                </Routes>
            </main>
        )
    }
}

export default App;