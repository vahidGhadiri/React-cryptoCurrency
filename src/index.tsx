import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {toast, ToastContainer} from "react-toastify";

import App from "./App";
import {index} from "./store";

import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css"
import {isServiceWorkerAvailable} from "./serviceWorker";


const AppCompact = (
    <Provider store={index}>
        <Router>
            <App/>
            <ToastContainer/>
        </Router>
    </Provider>
)

const rootElement = document.getElementById("root")

const callBack = async () => {
    if (isServiceWorkerAvailable()) {
        navigator?.serviceWorker.register("/serviceWorker.ts", {scope: "."})
            .then(response => console.log("response", response))
            .catch(error => console.log("err", error))
    } else {
        toast.warn("The Browser Does NOT Support PWA Version")
    }
}

ReactDOM.render(AppCompact, rootElement, callBack)