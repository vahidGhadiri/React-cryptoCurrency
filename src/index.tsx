import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";

import App from "./App";
import {index} from "./store";

import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css"


ReactDOM.render(
    <Provider store={index}>
        <Router>
            <App/>
            <ToastContainer/>
        </Router>
    </Provider>
    ,
    document.getElementById("root"))