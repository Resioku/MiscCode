console.log("Extension Running");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.msg == "bold") {
        let paragraphs = document.getElementsByTagName("p");
        for (elt of paragraphs) {
            elt.innerHTML = elt.innerHTML.bold();
        }
    }
}