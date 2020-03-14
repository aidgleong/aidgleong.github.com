var text = jQuery("h3");
var textArray = ["november delta one one", "this foxtrot lima one two", "radio check over"];
var tl = new TimelineMax({repeat: -1});
  
textArray.forEach(function(element, index) {
  console.log(index, element)
   tl.set(text, {text:textArray[index]})
      .to(text, 1, {opacity:1, repeat:1, yoyo:true, repeatDelay:3}) 
});