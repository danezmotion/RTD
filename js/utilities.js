
// VIDEO CONTROLS ON HOVER
let video = document.getElementsByTagName('video');

for(let i = 0; i < video.length; i++) {
    video[i].controls = false;
    video[i].onmouseover = function() {
        video[i].controls = true;
    };
    video[i].onmouseout = function() {
        video[i].controls = false;
    };
};


// ADD TARGET _BLANK TO ALL LINKS EXCEPT CLASS=NOT-BLANK
let anchor = document.getElementsByTagName('a');

for(let i = 0; i < anchor.length; i++) {
    if ( anchor[i].classList != "not-blank" ) {
        anchor[i].target = "_blank";
    }
}

//console.log(anchor)
