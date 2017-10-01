let _dictionary;
let _secondary_dictionary;
let _regex;

// Checks current settings to determine runner() should work on the page
chrome.runtime.sendMessage({
        todo: "getSettings"
    },
    function(response) {
        const sites = response.sites
        const paused = response.paused
        const alwaysOn = response.alwaysOn

        if (paused === true) {
            chrome.runtime.sendMessage({
                todo: "toggleIcon",
                state: "paused"
            })
            return
        } else if (alwaysOn === true) {
            chrome.runtime.sendMessage({
                todo: "toggleIcon",
                state: "alwaysOn"
            })
            runner()
        } else {
            match = siteChecker(sites)
            if (match === true) {
                chrome.runtime.sendMessage({
                    todo: "toggleIcon",
                    state: "on"
                })
                runner()
            } else {
                chrome.runtime.sendMessage({
                    todo: "toggleIcon",
                    state: "off"
                })
            }
        }
    }
)

let running = false;


// Takes one pass at page once it's loaded. Then adds a MutationObserver to check
// any asynchronously loaded content
function runner() {
    chrome.runtime.sendMessage({
            todo: "getDictionary"
        },
        function(response) {
            _dictionary = response.dictionary;
            _secondary_dictionary = response.secondary_dictionary;
            regex = RegExp('(' + '\\b' + Object.keys(_dictionary).join('\\b|\\b') + '\\b' + ')', 'ig')

            const loadedPage = loadTextNodes()
            replacer(loadedPage)

            const options = {
                attributes: true,
                subtree: true
            }

            const observer = new MutationObserver(function(mutations) {
                // Needed to add this otherwise it gets into an endless loop of self-scrutiny
                if (running) {
                    running = false;
                    return;
                }

                const loadedPage = loadTextNodes()
                replacer(loadedPage)
            })

            observer.observe(document.body, options)
        }
    )
}

function loadTextNodes() {
    let textNodes = []
    const treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        // filter out any nodes that are just whitespace
        {
            acceptNode: function(node) {
                return NodeFilter.FILTER_ACCEPT
            }
        },
        false
    )

    while (treeWalker.nextNode()) {
        textNodes.push(treeWalker.currentNode)
    }
    return textNodes
}

function replacer(nodes) {
    running = true;

    nodes.forEach(function(node) {

        node.nodeValue = node.nodeValue.replace(regex,
            function(match) {
                let replacementWord = _dictionary[match.toLowerCase()]

                if (replacementWord === undefined) {
                    replacementWord = _secondary_dictionary[match.toLowerCase()]
                }

                if (match != match.toLowerCase()) {
                    if (match == match.toUpperCase()) {
                        replacementWord = replacementWord.toUpperCase()
                    } else if (match.charAt(0) == match.charAt(0).toUpperCase()) {
                        replacementWord = replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1)
                    }
                }
                return replacementWord
            }
        )
    });
}


function siteChecker(sites) {
    return sites.some(function(site) {
        return window.location.href.indexOf(site) != -1
    })
}