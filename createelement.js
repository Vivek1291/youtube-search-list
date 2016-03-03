/*window.onload = function() {
    for(var i = 0; i < 2; i++) {
        var tag = document.createElement("div");
        tag.setAttribute("class", "item");
        var heading = document.createElement("h2");
        var textnode1 = document.createTextNode("{{title}}");
        heading.appendChild(textnode1);
        tag.appendChild(heading);
        var vdPlayer = document.createElement("iframe");
        vdPlayer.setAttribute("src", "//www.youtube.com/embed/{{videoid}}");
        tag.appendChild(vdPlayer);
        document.body.appendChild(tag);
    }
}*/
var main_container = document.getElementsByClassName("main-container");
main_container.style.position ="absolute";
main_container.style.right="30px";
main_container.style.width ="30%";
main_container.style.height ="100%";
main_container.style.backgroundColor ="red";