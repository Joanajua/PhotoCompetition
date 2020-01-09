'use strict';
// JavaScript for use with the index page.




function uploadImage() {
    
    //Creando una cadena con la informacion que necesitamos del formulario para agruparla dentro del objero BLOB
    var title =$("#title").val();
    var author =$("#author").val();
    var license =$("#license").val();
    var string1 = {name: title, author: author, license: license}

    //Creating a Blob object(contiene una cadena con todos los campos que necesitamos del formulario(menos la imagen))

    var blob = new Blob([JSON.stringify(string1)], {type : 'application/json'});

    //Cogiendo la imagen del formulario
    var myForm = document.getElementById("file");

    //Creating a FormData object y metiendo en el blob object y la imagen
    var myFormData = new FormData();
    myFormData.append("metadata", blob);
    myFormData.append("rawdata", myForm.files[0]);


    fetch(buildUrl(''), {method: 'POST', body: myFormData})
        ///in myFormData we appended a BLOB objetc (metadata) and the picture(file-rawdata)
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to upload images succeeded: ');
            console.log(json);

        })
        .catch(function (err) {
            console.error('Request to upload failed: ', err);
        });
    
}
$(function () {
    
    $('#upload-image').click(function(event){
        event.preventDefault();
        uploadImage();
       
    });
});