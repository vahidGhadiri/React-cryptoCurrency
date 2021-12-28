import React from "react"
import {Link} from "react-router-dom";

import {Space, Typography} from "antd";
import {FooterContainer} from "./Footer.style";
import {ROUTE_NAME} from "../../configs/constants";


export const Footer: React.FC = (): JSX.Element => {
    const {Title} = Typography
    return (
        <FooterContainer>
            <Title level={5} style={{color: "#fff", textAlign: "center"}}>
                Cryptoverse <br/> All rights reserved
            </Title>
            <Space>
                <Link to={ROUTE_NAME.HOME}>Home</Link>
                <Link to={ROUTE_NAME.EXCHANGES}>Exchanges</Link>
                <Link to={ROUTE_NAME.NEWS}>News</Link>
            </Space>
        </FooterContainer>
    )
}

export default Footer