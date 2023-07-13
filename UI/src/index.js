const {yasqe1} = require("./tabs/example_1");
const {yasqe2} = require("./tabs/example_2");
const {yasqe3} = require("./tabs/custom_query");
function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

for(const blocker of document.getElementsByClassName("scroll-pass-through")) {
    let scroller = blocker.parentNode.getElementsByClassName("CodeMirror-scroll")[0];
    blocker.addEventListener("wheel", (event) => {
        event.preventDefault();
        console.log(scroller, event);
        scroller.scrollBy({
            top: -event.wheelDelta,
            left: 0,
            behavior : "smooth"
        })
    })
}

function start(){
    let view = gup('view', window.location.href);
    if (view === 'example_1') {
        openTab(event,'example_1');
    }
    else if(view === 'example_2') {
        openTab(event,'example_2');
    }
    else if(view === 'custom_query') {
        openTab(event,'custom_query');
    }
    else {
        openTab(event,'example_1');
    }
}
start();
