var background = document.getElementById("background");
var darkButton = document.getElementById("dark-button");
var sepiaButton = document.getElementById("sepia-button");
var whiteButton = document.getElementById("white-button");
var twitter_handle = document.getElementById("twitterHandle");
var download_button = document.getElementById("download-button");

darkButton.onclick = function () {
    "use strict";
    //Set background class to dark
    background.className = "dark";
    //Set <a> text to white
    twitter_handle.className = "white_a";
};

sepiaButton.onclick = function () {
    "use strict";
    //Set backgound to sepia
    background.className = "sepia";
    //Set <a> text to dark
    twitter_handle.className = "normal_a";
};

whiteButton.onclick = function () {
    "use strict";
    //Set backgound to white
    background.className = "white";
    //Set <a> text to dark
    twitter_handle.className = "normal_a";
};


document.getElementById('fullscreen-button').addEventListener('click', function () {
    "use strict";
    if (screenfull.enabled) {
        if (screenfull.isFullscreen) {
            screenfull.exit();
        } else {
            screenfull.request();
        }
    }
});



function destroyClickedElement(event) {
    "use strict";
    document.body.removeChild(event.target);
}


function saveTextAsFile() {
    "use strict";
    var textToWrite = document.getElementById("textArticle").innerHTML;
    //now i have to get all content of that inner html and concatenate that on a string changing <br> as \n linebreaks.
    var cleanText = textToWrite.replace(/<br[^>]*>/gi, "\n");
    cleanText = cleanText.replace(/<p[^>]*>/gi, " ");
    cleanText = cleanText.replace(/&nbsp;/gi, '');
    cleanText = cleanText.replace(/<\/p>/gm, '');
    cleanText = cleanText.replace(/<\/?[^>]+(>|$)/g, '');
    textToWrite = cleanText;
    var textFileAsBlob = new Blob([textToWrite], {type: 'text/plain'});
    var fileNameToSaveAs = document.getElementById("title").innerHTML;
    var downloadLink = document.createElement("a");

    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";

    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

download_button.onclick = function () {
    "use strict";
    //downloading the text area as file with the title as above
    saveTextAsFile();
};
