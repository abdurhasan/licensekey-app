// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


const setStatus = status => {
    if (!status) {
        alert('Internet connection is not available')

        window.close()
    }
    return;

}
setInterval(() => {
    setStatus(navigator.onLine)
}, 100)
