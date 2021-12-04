import React from "react"
import {Navbar} from "./components"

import "./App.css"

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">main</div>
            <div className="footer">footer</div>
        </div>
    )
}

export default App