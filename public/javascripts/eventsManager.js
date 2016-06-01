$(function() {
  var artists = [];

  $("#add-artist").click(function(e) {
    var list = $(".artist-list");
    e.preventDefault();
    var artistName = $("#artist-name").val();
    var artistLabels = $('#artist-labels').val();
    var artistCity = $('#artist-city').val();
    list.append('<li>'+artistName+' ('+ artistLabels + ', ' + artistCity +')</li>');
    var artist = {
      name: artistName,
      labels: artistLabels,
      city: artistCity
    }
    artists.push(artist);
    console.log(artists);
  });
  $('#event-form').submit(function(e) {
    e.preventDefault();
    var addEvent = {
      title: "test",
      artists: artists
    }
    console.log(addEvent);
  });

});
