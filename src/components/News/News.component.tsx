import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import newsActions from "../../store/news/news.action";

interface PropsInterface {
    isMinimized: boolean
}

const News: React.FC<PropsInterface> = ({isMinimized}): JSX.Element => {
    const dispatch = useDispatch()
    const news = useSelector((state: any) => state.news.news)
    const count = isMinimized ? "8" : "100"

    useEffect(() => {
        dispatch(newsActions.getNews(count))
    }, [])

    return (
        <div>
            <button onClick={() => console.log("vahid", news)}>sample</button>
        </div>
    )
}

export default News