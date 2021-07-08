 'use strict';


 const photoTemplate = document.getElementById('photoTemplate').innerHTML;
 const elemAlbum = document.getElementById('album');

 renderFetchedPhotos();

 function renderFetchedPhotos() {
     fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
         .then((response) => response.json())
         .then((photos) => renderAllPhotos(photos));
 }

 function renderAllPhotos(album) {
     album.forEach((photo) => {
         renderPhoto(photo);
     });
 }

 function renderPhoto(photo) {
     const photoHtml = getPhotoHtml(photo);

     elemAlbum.insertAdjacentHTML('beforeend', photoHtml);
 }

 function getPhotoHtml(photo) {
     return photoTemplate
         .replace('{{id}}', photo.id)
         .replace('{{url-photo}}', photo.thumbnailUrl);
 }