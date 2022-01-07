import React, {useEffect} from "react"

import {Link, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import millify from "millify";

import {Col, Row, Statistic} from "antd";
import statsActions from "../../store/stats/stats.action";
import {TextContainer, Title} from "./Home.style";

import {Cryptocurrencies, News} from "../index";
import {ROUTE_NAME} from "../../configs/constants";
import {StoreInterface} from "../../store";
import {Spinner} from "../Cryptocurrencies/Cryptocurrenices.style";


const Home: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()
    const stats = useSelector((store: any) => store.stats.stats)
    const statsLoading = useSelector((state: StoreInterface) => state.stats.isLoading)

    const {totalCoins, totalExchanges, totalMarketCap, total24hVolume, totalMarkets} = stats


    useEffect(() => {
        dispatch(statsActions.getStats())
    }, [dispatch])


    return (
        <>
            <Title level={3} kind="title">Global Crypto Stats</Title>
            {statsLoading ?
                <Spinner/> :
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies"
                                              value={millify(totalCoins ? totalCoins : 0)}/></Col>
                    <Col span={12}><Statistic title="Total Exchanges"
                                              value={millify(totalExchanges ? totalExchanges : 0)}/></Col>
                    <Col span={12}><Statistic title="Total Market Cap"
                                              value={millify(totalMarketCap ? totalMarketCap : 0)}/></Col>
                    <Col span={12}><Statistic title="Total 24h Volume"
                                              value={millify(total24hVolume ? total24hVolume : 0)}/></Col>
                    <Col span={12}><Statistic title="Total Markets"
                                              value={millify(totalMarkets ? totalMarkets : 0)}/></Col>
                </Row>
            }

            <TextContainer>
                <Title level={3} kind="title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={5} kind="subtitle"><Link to={ROUTE_NAME.CRYPTOCURRENCIES}> Show More</Link></Title>
            </TextContainer>
            <Cryptocurrencies isMinimized={true}/>

            <TextContainer>
                <Title level={3} kind="title">Latest Crypto News</Title>
                <Title level={5} kind="subtitle"><Link to={ROUTE_NAME.NEWS}> Show More</Link></Title>
            </TextContainer>
            <News isMinimized={true}/>
        </>
    )
}


export default withRouter(Home)