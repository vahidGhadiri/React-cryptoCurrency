import React, {useEffect} from "react"
import {Col, Row, Statistic, Typography} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import statsActions from "../../store/stats/stats.action";
import {Cryptocurrencies} from "../index";
import millify from "millify";


const Home: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()
    const stats = useSelector((store: any) => store.stats.stats)

    const {totalCoins, totalExchanges, totalMarketCap, total24hVolume, totalMarkets} = stats
    const {Title} = Typography

    useEffect(() => {
        dispatch(statsActions.getStats())
    }, [dispatch])


    return (
        <div>
            <Title level={3} className="heading ">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(totalCoins ? totalCoins : 0)}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(totalExchanges ? totalExchanges : 0)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(totalMarketCap ? totalMarketCap : 0)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(total24hVolume ? total24hVolume : 0)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(totalMarkets ? totalMarkets : 0)}/></Col>
            </Row>

            <div className="home-heading-container">
                <Title level={3} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={5} className="show-more"><Link to="/cryptocurrencies"> Show More</Link></Title>
            </div>
            <Cryptocurrencies/>

        </div>
    )
}


export default Home
