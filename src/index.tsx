import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";

import App from "./App";
import {index} from "./store";

import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css"
import reportWebVitals from "./reportWebVitals";
import {register, unregister} from "./service-worker.registration";


const AppCompact = (
    <Provider store={index}>
        <Router>
            <App/>
            <ToastContainer/>
        </Router>
    </Provider>
)

const rootElement = document.getElementById("root")


ReactDOM.render(AppCompact, rootElement)

if(process.env.NODE_ENV === "production") {
    register();
}else {
    unregister()
}

reportWebVitals()


