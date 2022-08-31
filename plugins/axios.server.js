export default function ({$axios, redirect}) {
    // just pass necessary headers
    let common = {
        connection: $axios.defaults.headers.common['connection'],
        pragma: $axios.defaults.headers.common['pragma'],
        'cache-control': $axios.defaults.headers.common['cache-control'],
        'upgrade-insecure-requests': $axios.defaults.headers.common['upgrade-insecure-requests'],
        'user-agent': $axios.defaults.headers.common['user-agent'],
        'accept-encoding': $axios.defaults.headers.common['accept-encoding'],
        'accept-language': $axios.defaults.headers.common['accept-language'],
        cookie: $axios.defaults.headers.common['cookie'],
        Accept: $axios.defaults.headers.common['Accept']
    }

    // remove empty headers
    for (let key in common) {
        if (!common[key]) {
            delete common[key]
        }
    }

    $axios.defaults.headers.common = common
}
