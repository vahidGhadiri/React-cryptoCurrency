import React from "react"
import {Route, Switch} from "react-router";
import {Layout, Space, Typography} from "antd";

import {Cryptocurrencies, CryptoDetail, Exchanges, Home, Navbar, News} from "./components"

import "./App.css"
import {Link} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes ">
                        <Switch>
                            <Route path='/' component={Home} exact/>
                            <Route path='/exchanges' component={Exchanges} exact/>
                            <Route path='/Cryptocurrencies' component={Cryptocurrencies} exact/>
                            <Route path='/crypto/:coinId' component={CryptoDetail} exact/>
                            <Route path='/news' component={News} exact/>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{color: "#fff", textAlign: "center"}}>
                        Cryptoverse <br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news ">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App