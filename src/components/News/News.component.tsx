import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import newsActions from "../../store/news/news.action";
import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import Title from "antd/es/typography/Title";
import moment from "moment";
import {selectOpt} from "./news.option";
import {StoreInterface} from "../../store";

interface PropsInterface {
    isMinimized: boolean
}

const News: React.FC<PropsInterface> = ({isMinimized}): JSX.Element => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency ')
    const dispatch = useDispatch()
    const news = useSelector((state: StoreInterface) => state.news.news)
    const loading = useSelector((state: StoreInterface) => state.news.isLoading)
    const count = isMinimized ? "3  " : "100"
    const emptyImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"

    useEffect(() => {
        dispatch(newsActions.getNews("cryptoNews", count))
    }, [])


    const getSelectedCategory = () => {
        dispatch(newsActions.getNews(newsCategory, "100"))
    }

    return (
        <>
            <Row gutter={[24, 24]}>
                {!isMinimized &&
                <Col span={24}>
                    <Select showSearch className="select-news"
                            loading={loading}
                            placeholder="Select a crypto "
                            optionFilterProp="children"
                            onChange={(value: string) => setNewsCategory(value)}
                            onSelect={getSelectedCategory}>
                        <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
                        {selectOpt.map((item: any, index: number) =>
                            <Select.Option value={item} key={index}>{item}</Select.Option>)}
                    </Select>
                </Col>
                }
                {news.map((item: any, index: number) => (
                    <Col xs={24} sm={12} lg={8} key={index}>
                        <Card hoverable className="news-card">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{item.name}</Title>
                                    <img src={item?.image?.thumbnail?.contentUrl || emptyImage}
                                         style={{maxWidth: "200px", maxHeight: "100px"}}
                                         alt="news-image"/>
                                </div>
                                <p>{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}</p>
                                <div className=" provider-container">
                                    <div>
                                        <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl || emptyImage}
                                                alt=""/>
                                        <Typography.Text
                                            className=" provider-name">{item.provider[0]?.name}</Typography.Text>
                                    </div>
                                    <Typography.Text>{moment(item.datePublished).format('YYYY/MM/DD')}</Typography.Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default News