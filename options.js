// Saves settings to chrome.storage
function save_options() {
    const paused = document.getElementById('pauseStatus').checked;
    const alwaysOn = document.getElementById('alwaysOn').checked;
    const specificSitesOnly = document.getElementById('specificSitesOnly').checked;
    let sites = [];
    Array.from(document.getElementsByClassName('siteInput')).forEach(v => {
        if (v.value != "") {
            sites.push(v.value);
        }
    });

    set_pause_badge(paused);

    chrome.storage.sync.set({
            'alwaysOn': alwaysOn,
            'sites': sites,
            'specificSitesOnly': specificSitesOnly,
            'paused': paused
        },
        function() {
            // Update status to let user know options were saved.
            let status = document.getElementById('status');

            create_site_list(sites);

            status.innerHTML = '<p>Saved. Refresh any open tabs for changes to take effect.</p>';
            setTimeout(function() {
                status.innerHTML = '';
            }, 3000);
        })
}

function create_site_list(sites) {
    html_to_add = "";
    sites.forEach(function(site) {
        html_to_add += `<div class="siteInputDiv"><input class="siteInput" type="text" value=${site}><button tabindex="0" aria-label="remove" class="removeSite">&#10006;</button></div>`;
    });
    html_to_add += `<div class="siteInputDiv"><input class="siteInput" type="text" placeholder="Add site">`;
    document.getElementById('siteList').innerHTML = html_to_add

    // Allows users to remove sites by clicking the x

    Array.from(document.getElementsByClassName('removeSite')).forEach(function(element) {
        element.addEventListener('click', function() {
            element.parentNode.parentNode.removeChild(element.parentNode);
        })
    })
}
// Restores select box and checkbox state using the preferences
function restore_options() {
    getSettings(function(items) {
        if (items.paused === true) {
            document.getElementById('pauseStatus').checked = true;
        } else {
            document.getElementById('pauseStatus').checked = false;
        }
        document.getElementById('alwaysOn').checked = items.alwaysOn;
        document.getElementById('specificSitesOnly').checked = items.specificSitesOnly;
        set_pause_badge(items.paused);
        create_site_list(items.sites);
    })
}

function set_pause_badge(paused) {
    if (paused === true) {
        chrome.browserAction.setBadgeText({
            "text": "ll"
        });
    } else {
        chrome.browserAction.setBadgeText({
            "text": ""
        });
    }
}

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('save').addEventListener('click', function() {
    document.getElementById('status').innerHTML = '';
    save_options();
})

// Ensures either 'alwaysOn' or 'specificSitesOnly' is always set to true
document.getElementById('alwaysOn').addEventListener('click',
    function() {
        if (this.checked) {
            document.getElementById('specificSitesOnly').checked = false;
        } else {
            document.getElementById('specificSitesOnly').checked = true;
        }
    }
)
document.getElementById('specificSitesOnly').addEventListener('click',
    function() {
        if (this.checked) {
            document.getElementById('alwaysOn').checked = false;
        } else {
            document.getElementById('alwaysOn').checked = true;
        }
    }
)