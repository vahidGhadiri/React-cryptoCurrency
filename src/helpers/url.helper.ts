class UrlHelper {

    public getPathname(url?: string) {
        const path = url || window.location.pathname
        const paths = path.split("/")
        let result: Array<string> = []
        paths.forEach((item: string) => {
            if (!!item) {
                result = [...result, item]
            }
        })
        return result
    }

    public getQueryString() {
        console.log("nothing yet")
    }
}

const URL = new UrlHelper()
export default URL