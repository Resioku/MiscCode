javascript:
(function(){
    alert("Enabled Bionic Reading");

    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].innerHTML = paragraphs[i].innerHTML.bold();
    }
})();