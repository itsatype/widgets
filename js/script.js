$(document).ready(function(){
  $.ajax({
    url: "/nav-items.html",
    }).done(function(response) {
      var list = response.split("\n")
      addNavMenu(list);
    });  
});
function addNavMenu(list) {
  var i = 0
  $('.nav-item').each(function() {
    $(this).append(list[i])
    i++
  })
};