import React from "react"
import {connect} from "react-redux"
import {Col, Row, Statistic, Typography} from "antd";

import {getExchanges} from "../../redux/actions/exchanges.action";
import {getMarkets} from "../../redux/actions/markets.action";


const Home: React.FC<any> = (props): JSX.Element => {
    return (
        <>
            <button
                onClick={() => props.getMarkets()}>{props.marketsLoading ? "IS LOADING..." : "CALL MARKETS API"}</button>
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

const mapStateToProps = (state: any) => ({
    exchanges: state.exchange.exchanges,
    exchangesLoading: state.exchange.isLoading,
    marketsLoading: state.market.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
    getExchanges: () => dispatch(getExchanges()),
    getMarkets: () => dispatch(getMarkets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)