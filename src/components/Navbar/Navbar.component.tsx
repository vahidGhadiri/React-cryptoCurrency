import React from "react"
import {Link} from "react-router-dom"

import {Avatar, Menu} from "antd";
import {BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";

import icon from "../../assets/images/cryptocurrency.png"
import {Logo, LogoContainer, NavbarContainer} from "./Navbar.style";
import {ROUTE_NAME} from "../../configs/constants";


const Navbar: React.FC = (): JSX.Element => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Avatar src={icon} size="large"/>
                <Logo level={2}><Link to={ROUTE_NAME.HOME}> </Link></Logo>

                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to={ROUTE_NAME.HOME}>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to={ROUTE_NAME.CRYPTOCURRENCIES}>CryptoCurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to={ROUTE_NAME.EXCHANGES}>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to={ROUTE_NAME.NEWS}>News</Link>
                    </Menu.Item>
                </Menu>

            </LogoContainer>
        </NavbarContainer>
    )
}

export default Navbar