//Games
document.getElementById("Cookie").addEventListener("click", openCookie);
document.getElementById("Roblox").addEventListener("click", openRoblox);

//Media
document.getElementById("YouTube").addEventListener("click", openYT);

//Functions
document.getElementById("Bold").addEventListener("click", boldText);

//Game Functions
function openCookie() {
    window.open("https://orteil.dashnet.org/cookieclicker/", "_blank");
}

//Media Functions
function openRoblox() {
    window.open("https://www.roblox.com/home", "_blank");
}
function openYT() {
    window.open("https://www.youtube.com", "_blank");
}

//Function Functions
function boldText() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"msg": "bold"});
    })
}