import React from "react"
import {Col, Row, Statistic, Typography} from "antd";
import {getExchanges} from "../../redux/actions/exchanges.action";
import {connect} from "react-redux"


const Home: React.FC<any> = (props): JSX.Element => {
    return (
        <>
            <button onClick={() => props.getExchanges()}>api</button>
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
    exchanges: state.exchange.exchanges
})

const mapDispatchToProps = (dispatch: any) => ({
    getExchanges: () => dispatch(getExchanges())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)