import {all, call, put, takeEvery} from "redux-saga/effects";

import statsActions from "./stats.action";
import {GET_STATS} from "./stats.constant";
import {StatsActionInterface} from "../../types/stats.type";
import statsService from "../../services/http/endpoints/stats";


export function* getStats() {
    yield put(statsActions.setLoading(true))
    try {
        const response: StatsActionInterface = yield call(() => statsService.getStats())
        yield put(statsActions.setStats(response.data.data))
    } finally {
        yield put(statsActions.setLoading(false))
    }
}

export function* statsSaga() {
    yield all([
        takeEvery(GET_STATS, getStats)
    ])
}