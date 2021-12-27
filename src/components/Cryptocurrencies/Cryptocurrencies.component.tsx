import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {CardContainer, CardImage, CardWrapper} from "./Cryptocurrenices.style"
import {StoreInterface} from "../../store";
import {Link} from "react-router-dom";
import {Card} from "antd";
import millify from "millify";
import {CoinInterface} from "../../types/coins.type";
import coinsActions from "../../store/coins/coins.actions";


interface PropsInterface {
    simplified?: boolean
}

const Cryptocurrencies: React.FC<PropsInterface> = ({simplified}): JSX.Element => {
    const count = simplified ? 10 : 100
    const dispatch = useDispatch()
    const cryptos = useSelector((state: StoreInterface) => state.coins.coins)


    useEffect(() => {
        dispatch(coinsActions.getCoins(count))
    }, [dispatch])


    return (
        <>
            <CardContainer gutter={[32, 32]}>
                {cryptos.map((currency: CoinInterface) => (
                    <CardWrapper xs={24} sm={12} lg={6} key={currency.id}>
                        <Link to={`crypto/${currency.id}`}>
                            <Card title={`${currency.rank}.${currency.name}`}
                                  extra={<CardImage src={currency.iconUrl} alt={currency.name}/>}
                                  hoverable>
                                <p>{`Price: ${millify(parseInt(currency.price))}`}</p>
                                <p>{`Market Cap: ${millify(currency.marketCap)}`}</p>
                                <p>{`DailyChange: ${millify(currency.change)}% `}</p>
                            </Card>
                        </Link>
                    </CardWrapper>
                ))}
            </CardContainer>
        </>
    )
}

export default Cryptocurrencies