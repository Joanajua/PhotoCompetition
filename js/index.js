'use strict';
// JavaScript for use with the index page.




function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);
            

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);
           

            var author = $('#author');
            author.text(json.author);

            var name = $('#name');
            name.text(json.name);

            var license = $('#license');
            license.text(json.license);

            var id = $('#id');

            id.text(json.id);

            var votes = $("#votes");
            votes.text(json.score);

        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}

//Delete Pictures

function deleteImage() {
    var username = prompt("User name:");
    var password = prompt("password:");
    var id = $('#id');
    fetch(buildUrl('/id/'+ id.text()), {
        method: 'DELETE',
        headers: {"Authorization" : "Basic " + btoa(username + ":" + password)}})

}



$(function () {
    loadRandomImage();

    //VOTE UP BUTTOM
    $('#voteUp').click(function(){
        var id = $('#id');
        fetch(buildUrl('/id/'+ id.text() + '/vote/up'), {method: 'POST'});
        
            loadRandomImage();
    });
    
    //VOTE DOWN BUTTOM
    $('#voteDown').click(function(){
        var id = $('#id');
        fetch(buildUrl('/id/'+ id.text() + '/vote/down'), {method: 'POST'});
            
            loadRandomImage();
    });

    //NEXT PHOTO BUTTOM
    $('#next-photo').click(function(){
        loadRandomImage();
    });


    //DELETE PHOTO BUTTOM
    $('#delete-photo').click(function(){
        deleteImage();
        
    });
});






