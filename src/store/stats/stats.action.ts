import * as types from "./stats.constant"
import {StatsStateInterface} from "../../types/stats.type";

class Actions {
    public getStats() {
        return {
            type: types.GET_STATS
        }
    }

    public setStats(stats: Pick<StatsStateInterface, "stats">) {
        return {
            type: types.SET_STATS,
            data: stats
        }
    }

    public setLoading(loading: boolean) {
        return {
            type: types.SET_LOADING,
            data: loading
        }
    }
}

const statsActions = new Actions()

export default statsActions
