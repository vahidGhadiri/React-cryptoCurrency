import React from "react"
import {Link} from "react-router-dom"

import {Avatar, Menu} from "antd";
import {BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";

import icon from "../../assets/images/cryptocurrency.png"
import {Logo, LogoContainer, NavbarContainer} from "./Navbar.style";


const Navbar: React.FC = (): JSX.Element => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Avatar src={icon} size="large"/>
                <Logo level={2}><Link to={"/"}> </Link></Logo>

                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to={"/cryptocurrencies"}>CryptoCurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to={"/exchanges"}>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to={"/news"}>News</Link>
                    </Menu.Item>
                </Menu>

            </LogoContainer>
        </NavbarContainer>
    )
}

export default Navbar