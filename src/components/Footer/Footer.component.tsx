import React from "react"
import {Link} from "react-router-dom";

import {Space, Typography} from "antd";
import {FooterContainer} from "./Footer.style";


export const Footer: React.FC = (): JSX.Element => {
    const {Title} = Typography
    return (
        <FooterContainer>
            <Title level={5} style={{color: "#fff", textAlign: "center"}}>
                Cryptoverse <br/> All rights reserved
            </Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news ">News</Link>
            </Space>
        </FooterContainer>
    )
}

export default Footer