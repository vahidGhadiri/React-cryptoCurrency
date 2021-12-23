import React from "react"
import {connect} from "react-redux";
import {Col, Row, Statistic, Typography} from "antd";
import exchangesActions from "../../store/exchanges/exchanges.actions";
import coinsActions from "../../store/coins/coins.actions";
import marketsActions from "../../store/markets/markets.action";


const Home: React.FC<any> = (props): JSX.Element => {
    return (
        <>
            <Typography.Title level={2} className="heading ">Global Crypto Stats</Typography.Title>
            <button onClick={() => props.getExchanges()}>{!props.isLoading ? "Call the services" : "please wait"}</button>
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
    isLoading: state.exchanges.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
    getExchanges: () => dispatch(exchangesActions.getExchanges()),
    getCoins: () => dispatch(coinsActions.getCoins()),
    getMarkets: () => dispatch(marketsActions.getMarkets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
