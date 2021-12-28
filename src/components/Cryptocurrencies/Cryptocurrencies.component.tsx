import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";

import millify from "millify";
import {Card} from "antd";

import {StoreInterface} from "../../store";
import coinsActions from "../../store/coins/coins.actions";

import {CoinInterface} from "../../types/coins.type";
import {ROUTE_NAME} from "../../configs/constants";

import {CardContainer, CardImage, CardWrapper, Spinner} from "./Cryptocurrenices.style"


interface PropsInterface {
    isMinContent: boolean
}

const Cryptocurrencies: React.FC<PropsInterface> = ({isMinContent}): JSX.Element => {
    const count = isMinContent ? "8" : "100"

    const dispatch = useDispatch()
    const cryptos = useSelector((state: StoreInterface) => state.coins.coins)
    const isLoading = useSelector((state: StoreInterface) => state.coins.isLoading)


    useEffect(() => {
        dispatch(coinsActions.getCoins(count))
    }, [dispatch])


    if (isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <CardContainer gutter={[32, 32]}>
                {cryptos.map((currency: CoinInterface) => (
                    <CardWrapper xs={24} sm={12} lg={6} key={currency.id}>
                        <Link to={`${ROUTE_NAME.CRYPTO}/${currency.id}`}>
                            <Card title={`${currency.rank}.${currency.name}`}
                                  extra={<CardImage src={currency.iconUrl} alt={currency.name}/>} hoverable>
                                <p>{`Price: ${millify(parseInt(currency.price))}`}</p>
                                <p>{`Market Cap: ${millify(currency.marketCap)}`}</p>
                                <p>{`DailyChange: ${millify(currency.change)}%`}</p>
                            </Card>
                        </Link>
                    </CardWrapper>
                ))}
            </CardContainer>
        </>
    )
}

export default Cryptocurrencies