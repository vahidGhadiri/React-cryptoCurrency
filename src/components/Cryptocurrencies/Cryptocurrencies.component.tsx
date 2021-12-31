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
import {debounce} from "lodash";


interface PropsInterface {
    isMinimized: boolean
}


const Cryptocurrencies: React.FC<PropsInterface> = ({isMinimized}): JSX.Element => {
    const count = isMinimized ? "8" : "100"

    const dispatch = useDispatch()
    const [isEmpty, setIsEmpty] = useState(false)
    const cryptos = useSelector((state: StoreInterface) => state?.coins?.coins)
    const isLoading = useSelector((state: StoreInterface) => state?.coins?.isLoading)


    const handleDebouncedSearch = debounce((currency: string) => {
        const index = cryptos?.findIndex(item => item.name.toLowerCase() === currency.toLowerCase())
        if (index === -1) {
            setIsEmpty(true)
        } else {
            dispatch(coinsActions.setCoins([cryptos[index]]))
            setIsEmpty(false)
        }
        if (currency.length === 0) {
            dispatch(coinsActions.getCoins(count))
            setIsEmpty(false)
        }
    }, 500)


    useEffect(() => {
        dispatch(coinsActions.getCoins(count))
    }, [dispatch, count])

    if (isLoading) return <Spinner/>

    return (
        <>
            {!isMinimized && <SearchBox placeholder="search" onChange={(e) => handleDebouncedSearch(e.target.value)}/>}
            {isEmpty ? <div>There is nothing to show</div> :
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
            }
        </>
    )
}

export default Cryptocurrencies