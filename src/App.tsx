import React from "react"
import {Route, Switch} from "react-router";
import {Layout} from "antd";

import {Cryptocurrencies, CryptoDetail, Exchanges, Home, Navbar, News} from "./components"

import "./assets/styles/main.css"
import Footer from "./components/Footer/Footer.component";

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route path='/' component={Home} exact/>
                            <Route path='/exchanges' component={Exchanges} exact/>
                            <Route path='/Cryptocurrencies' component={Cryptocurrencies} exact/>
                            <Route path='/crypto/:coinId' component={CryptoDetail} exact/>
                            <Route path='/news' component={News} exact/>
                        </Switch>
                    </div>
                </Layout>
                <Footer/>
            </div>
        </div>
    )
}

export default App