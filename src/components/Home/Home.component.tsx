import React, {useEffect} from "react"

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import millify from "millify";

import {Col, Row, Statistic} from "antd";
import statsActions from "../../store/stats/stats.action";
import {Container, Title} from "./Home.style";

import {Cryptocurrencies} from "../index";


const Home: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()
    const stats = useSelector((store: any) => store.stats.stats)

    const {totalCoins, totalExchanges, totalMarketCap, total24hVolume, totalMarkets} = stats

    useEffect(() => {
        dispatch(statsActions.getStats())
    }, [dispatch])

    return (
        <>
            <Title level={3} kind="title">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(totalCoins ? totalCoins : 0)}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(totalExchanges ? totalExchanges : 0)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(totalMarketCap ? totalMarketCap : 0)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(total24hVolume ? total24hVolume : 0)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(totalMarkets ? totalMarkets : 0)}/></Col>
            </Row>

            <Container>
                <Title level={3} kind="title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={5} kind="subtitle"><Link to="/cryptocurrencies"> Show More</Link></Title>
            </Container>
            <Cryptocurrencies/>
        </>
    )
}


export default Home
