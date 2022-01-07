import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";

import App from "./App";
import {index} from "./store";

import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css"


const AppCompact = (
    <Provider store={index}>
        <Router>
            <App/>
            <ToastContainer/>
        </Router>
    </Provider>
)

const rootElement = document.getElementById("root")


ReactDOM.render(AppCompact, rootElement, ()=>{
    console.log(
        process.env["REACT_APP_CURRENCY_BASE_URL"],
        process.env["REACT_APP_NEWS_BASE_URL"],
    )
})


