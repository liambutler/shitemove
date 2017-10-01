const defaultDomains = [

    "foxtons.co.uk",
    "gumtree.com",
    "openrent.co.uk",
    "primelocation.com",
    "rightmove.co.uk",
    "zoopla.co.uk"

]

function getSettings(callback) {
    chrome.storage.sync.get({
        'paused': false,
        'alwaysOn': false,
        'sites': defaultDomains,
        'specificSitesOnly': true
    }, callback)
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.todo == "getSettings") {
            getSettings(function(items) {
                sendResponse(items)
            })
        }
        if (request.todo == "getDictionary") {
            sendResponse({ dictionary, secondary_dictionary })
        }
        return true
    })