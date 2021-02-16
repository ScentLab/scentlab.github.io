import Request from "@src/utils/HttpClient"
import config from "@src/utils/config"
import type { Filter } from '@src/models'
import type { AxiosPromise } from "axios"

const Apis = {
    getPerfumes: <T>({ matchStr, filter }: { matchStr: string, filter: Filter}): AxiosPromise<T> => {
      return Request({
          baseURL: config.esUrl,
          method: "POST",
          url: "/kor_perfumes/_search",
          auth: {
            username: config.esUsername,
            password: config.esPassword,
          },
          data: {
              "query": {
                  "bool": {
                    "should": [
                      { "match": { "reviews": { "query": matchStr} } }
                    ],
                    "filter": {
                      "terms": {
                        ...filter
                      }
                    }
                  }
                }
            }
        })
    }
}

export default Apis