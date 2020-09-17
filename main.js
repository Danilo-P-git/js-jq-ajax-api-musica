$(document).ready(function() {
	//Code
  // Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
  // https://flynn.boolean.careers/exercises/api/array/music
  // L'api ci restituirà decina di dischi musicali che dovremo stampare a schermo con Handlebars.
  $.ajax(
  {
  url: "https://flynn.boolean.careers/exercises/api/array/music",
  method: "GET",
  success: function (data, stato) {
    var results = data.response;
    render(results);

  },
  error: function (richiesta, stato, errori) {
  alert("E' avvenuto un errore. " + errore);
  }
  }
  );

function render(results) {
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < results.length; i++) {
    var album = results[i];
    var html = template(album);

    $("#list-cd").append(html);
  }
}



});
