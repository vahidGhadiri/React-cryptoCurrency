import React from "react"
import {connect} from "react-redux";
import {Col, Row, Statistic, Typography} from "antd";

import {getExchanges} from "../../redux/actions/exchanges.action";
import {getCoins} from "../../redux/actions/coins.action";
import {StoreInterface} from "../../redux/store/store";


const Home: React.FC<any> = (props): JSX.Element => {
    return (
        <>
            <Typography.Title level={2} className="heading ">Global Crypto Stats</Typography.Title>
            <button onClick={() => props.getCoins()}>CALL THE API</button>
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


const mapStateToProps = (state: StoreInterface) => ({
    exchanges: state.exchange.exchanges
})

const mapDispatchToProps = (dispatch: any) => ({
    getExchanges: () => dispatch(getExchanges()),
    getCoins: () => dispatch(getCoins())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
