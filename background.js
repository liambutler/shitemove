chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if (request.todo === "toggleIcon") {
            toggleIcon(request.state, sender.tab);
        } else if (request.todo === "togglePause") {
            togglePause(sender.tab);
        }
    }
)

function toggleIcon(desiredState, tab) {
    if (desiredState === 'on') {
        chrome.browserAction.setIcon({
            tabId: tab.id,
            path: {
                "16": "icons/house-16.png",
                "32": "icons/house-32.png",
                "48": "icons/house-48.png",
                "128": "icons/house-128.png",
                "256": "icons/house-256.png"
            },

        });
        chrome.browserAction.setPopup({
            tabId: tab.id,
            popup: 'popups/on.html',
        });

        chrome.browserAction.setBadgeText({
            "text": ""
        });

    } else if (desiredState === 'off') {
        chrome.browserAction.setIcon({
            tabId: tab.id,
            path: {
                "16": "icons/house-disabled-16.png",
                "32": "icons/house-disabled-32.png",
                "48": "icons/house-disabled-48.png",
                "128": "icons/house-disabled-128.png",
                "256": "icons/house-disabled-256.png"
            },
        });
        chrome.browserAction.setPopup({
            tabId: tab.id,
            popup: 'popups/off.html',
        });
        chrome.browserAction.setBadgeText({
            "text": ""
        });

    } else if (desiredState === 'alwaysOn') {
        chrome.browserAction.setIcon({
            tabId: tab.id,
            path: {
                "16": "icons/house-16.png",
                "32": "icons/house-32.png",
                "48": "icons/house-48.png",
                "128": "icons/house-128.png",
                "256": "icons/house-256.png"
            },

        });
        chrome.browserAction.setPopup({
            tabId: tab.id,
            popup: 'popups/always-on.html',
        });

        chrome.browserAction.setBadgeText({
            "text": ""
        });

    } else if (desiredState === 'paused') {
        chrome.browserAction.setIcon({
            tabId: tab.id,
            path: {
                "16": "icons/house-disabled-16.png",
                "32": "icons/house-disabled-32.png",
                "48": "icons/house-disabled-48.png",
                "128": "icons/house-disabled-128.png",
                "256": "icons/house-disabled-256.png"
            },
        });
        chrome.browserAction.setPopup({
            tabId: tab.id,
            popup: 'popups/paused.html',
        });
        chrome.browserAction.setBadgeText({
            "text": "ll"
        });
    }
}

function togglePause(tab) {
    getSettings(function(items) {

        if (items.paused == true) {
            newState = false;

        } else if (items.paused == false) {
            newState = true;
            chrome.browserAction.setBadgeText({
                "text": "ll"
            });
        }

        chrome.storage.sync.set({
            paused: newState
        });
    });
}