import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"

import {StoreInterface} from "../../store";
import coinsActions from "../../store/coins/coins.actions";

import {CardContainer, CardImage, CardWrapper, SearchBox, Spinner} from "./Cryptocurrenices.style"
import {CoinInterface} from "../../types/coins.type";
import {ROUTE_NAME} from "../../configs/constants";
import millify from "millify";
import {Card} from "antd";
import {Link} from "react-router-dom";


interface PropsInterface {
    isMinContent: boolean
}


const Cryptocurrencies: React.FC<PropsInterface> = ({isMinContent}): JSX.Element => {
    const count = isMinContent ? "8" : "100"

    const dispatch = useDispatch()
    const [searchItem, setSearchItem] = useState<string>("")
    const cryptos = useSelector((state: StoreInterface) => state?.coins?.coins)
    const isLoading = useSelector((state: StoreInterface) => state?.coins?.isLoading)


    const searchCurrency = (currency: string): void => {
        const filteredData = cryptos.filter((item: CoinInterface) => item.name.toLowerCase() === currency.toLowerCase())
    }

    useEffect(() => {
        dispatch(coinsActions.getCoins(count))
    }, [dispatch, count])


    if (isLoading) return <Spinner/>

    return (
        <>
            <div>
                <SearchBox placeholder="search" onChange={(e) => searchCurrency(e.target.value)}/>
            </div>
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