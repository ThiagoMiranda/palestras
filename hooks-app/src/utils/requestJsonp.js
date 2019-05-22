export default function(url, callback) {
    const id = `jsonp_cb_${(Math.floor(Math.random()) * 20)}`
    const existingScripts = document.scripts[0]
    const script = document.createElement('script')

    script.src = `${url}${(~url.indexOf('?') ? '&' : '?')}callback=${id}`
    existingScripts.parentNode.insertBefore(script, existingScripts)

    window[id] = function(data) {
        script.parentNode.removeChild(script)
        callback(data)
        delete window[id]
    }
}