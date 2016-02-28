// set hight of carousel to highest element
$(function() {
  setEventsHeight();

});

function setEventsHeight() {
  var highest = 0;
  $('.carousel-inner .item').each(function(){
    var itemHeight = $(this).height();
    if (itemHeight > highest) highest = itemHeight;
  });
  $('.carousel-inner').height(highest);
};
$( window ).resize(function(){
  setEventsHeight();
});
