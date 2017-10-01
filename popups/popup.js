document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#options').addEventListener('click', function() {
        chrome.runtime.openOptionsPage();
    });

    if (document.querySelector('#toggle-pause')) {
        document.querySelector('#toggle-pause').addEventListener('click', function() {
            chrome.runtime.sendMessage({
                todo: "togglePause"
            })
            chrome.tabs.reload();
            window.close();
        });

    }
});