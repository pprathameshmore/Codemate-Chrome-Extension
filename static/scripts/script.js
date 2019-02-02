window.addEventListener('load', function () {
    console.log('All assets are loaded')
})

function searchQuestion() {
    var searchQuery = document.getElementById('input-query').value;

    if (document.getElementById('google-rb').checked == true) {
        if (searchQuery === '') {
            alert("Blank is question not allowed");
        } else {
            var searchURL = "https://www.google.com/search?q=" + searchQuery;
            window.open(searchURL);
        }
    }

    if (document.getElementById('stackoverflow-rb').checked == true) {
        if (searchQuery === '') {
            alert("Blank is question not allowed");
        } else {
            var searchURL = "https://stackoverflow.com/search?q=" + searchQuery;
            window.open(searchURL);
        }
    }

    if (document.getElementById('google-stackoverflow-rb').checked == true) {
        if (searchQuery === '') {
            alert("Blank is question not allowed");
        } else {
            var searchURL = "https:/www.google.com/search?q=" + searchQuery + " " + "site:stackoverflow.com";
            window.open(searchURL);
        }
    }

}