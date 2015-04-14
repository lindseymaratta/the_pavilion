// $(function($) {
//   $('.instagram').on('willLoadInstagram', function(event, options) {
    
//   });
//   $('.instagram').on('didLoadInstagram', function(event, response) {
//     console.log(response);
//   });
//   $('.instagram').instagram({
//     clientId: '3c5e4ca81b0f4f198d65de4e6c81b38a'
//   });
// });


function createPhotoElement(photo) {
  var innerHtml = $('<img>')
    .addClass('instagram-image')
    .attr('src', photo.images.thumbnail.url);

  innerHtml = $('<a>')
    .attr('target', '_blank')
    .attr('href', photo.link)
    .append(innerHtml);

  return $('<div>')
    .addClass('instagram-placeholder')
    .attr('id', photo.id)
    .append(innerHtml);
}

function didLoadInstagram(event, response) {
  var that = this;

  $.each(response.data, function(i, photo) {
    $(that).append(createPhotoElement(photo));
  });
}

$(document).ready(function() {
  var clientId = '3c5e4ca81b0f4f198d65de4e6c81b38a';
  
  $('.instagram.tag').on('didLoadInstagram', didLoadInstagram);
  $('.instagram.tag').instagram({
    hash: 'pavbeach',
    count: 4,
    clientId: clientId
  });
});