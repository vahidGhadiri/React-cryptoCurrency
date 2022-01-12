import newsActions from "./news.action";
import {all, call, put, takeEvery} from "redux-saga/effects";
import {NewsActionInterface} from "../../types/news.type";
import {GET_NEWS} from "./news.constant";
import newsService from "../../services/http/endpoints/news";

export function* getNews(action: NewsActionInterface) {
    const {category, count} = action.data
    yield put(newsActions.setLoading(true))
    try {
        const response: NewsActionInterface = yield call(() => newsService.getNews(category, count))
        yield put(newsActions.setNews(response.data.value))
    } finally {
        yield put(newsActions.setLoading(false))
    }
}

export function* newsSaga() {
    yield all([
        takeEvery(GET_NEWS, getNews)
    ])
}
