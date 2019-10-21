import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./component/Home"
import Set from "./component/Set"
import Sta from "./component/Sta"
import Roll from "./component/Roll"
import Roll2 from "./component/Roll2"

function App() {
    let num = 888888888;
    let arr = [
        {
        Country: "中国",
        capital: "北京",
        later: true
        },
        {
            Country: "日本",
            capital: "东京",
            later: false
        },
        {
            Country: "美国",
            capital: "纽约",
            later: true
        }
        ];
    return (
        <div className="App">
            {/*<Home/>*/}
            {/*<Set num1={num} arr={arr} />*/}
            {/*<Sta/>*/}
            {/*<Roll/>*/}
            <Roll2 />
        </div>
    );
}

export default App;
