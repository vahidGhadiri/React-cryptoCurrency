import React from "react"
import {Col, Row, Statistic, Typography} from "antd";


const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <Typography.Title level={2} className="heading ">Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={5}/></Col>
                <Col span={12}><Statistic title="Total Exchanges " value={5}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={5}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={5}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={5}/></Col>
            </Row>
        </>
    )
}

export default Home