import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import "antd/dist/antd.css"
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import {ToastContainer} from "react-toastify";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
            <ToastContainer/>
        </Router>
    </Provider>
    ,
    document.getElementById("root"))