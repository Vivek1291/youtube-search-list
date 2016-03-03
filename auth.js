var OAUTH2_CLIENT_ID = '20169628843-8g4j3ard8ncaud574oi8qbq4jmh0047h.apps.googleusercontent.com';
var OAUTH2_SCOPES = ['https://www.googleapis.com/auth/youtube'];
googleApiClientReady = function() {
    gapi.auth.init(function() {
        //gapi.client.setApiKey('AIzaSyDXvF7hdCkPBF7ekqiE8C8PS-zkSkCEH3c');
        window.setTimeout(checkAuth, 1);
    });

}
function checkAuth() {
    gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        //client_secret: "uZgxf0yDu0fI41eofwXmOkWr",
        scope: OAUTH2_SCOPES,
        immediate: true
    }, handleAuthResult);
}
function handleAuthResult(authResult) {
    if(authResult && !authResult.error) {
        $('.pre-auth').hide();
        $('.post-auth').show();
        loadApiClientInterfaces();
    }
    else {
        $('#login-link').click(function() {
            gapi.auth.authorize({
                client_id: OAUTH2_CLIENT_ID,
                scope: OAUTH2_SCOPES,
                immediate: false
            }, handleAuthResult);
        });
    }
}
function loadApiClientInterfaces() {
    gapi.client.load('youtube', 'v3', function() {
        handleAPILoaded();
    });
}
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}
function search() {
    var q =$('#query').val();
    console.log(q);
    var request = gapi.client.youtube.search.list({
        q   : q,
        part: 'snippet',
        maxResults: 6,
        order: "viewcount"
    });
    request.execute(function(response) {
        JSON.stringify(response.result);
        //console.log(response);
        var results = response.result;
        $.each(results.items, function(index, item) {
            var tag = document.createElement("div");
            tag.setAttribute("class", "item  col-md-6 col-md-offset-4");
            var heading = document.createElement("h2");
            var textnode1 = document.createTextNode(item.snippet.title);
            heading.appendChild(textnode1);
            tag.appendChild(heading);
            var vdPlayer = document.createElement("iframe");
            vdPlayer.setAttribute("src", "//www.youtube.com/embed/"+item.id.videoId);
            tag.appendChild(vdPlayer);
            document.body.appendChild(tag);
            // });
        });
    });

}
