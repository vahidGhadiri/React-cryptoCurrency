import BaseApi from "../base";
import * as urls from "../../../configs/urls"

class StatsServiceProvider extends BaseApi {
    constructor() {
        super("");
    }

    public getStats() {
        return this.httpServices.get(urls.GET_STATS)
    }
}

const statsService = new StatsServiceProvider()

export default statsService