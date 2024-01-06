$(function(){
  var $write = $('write'),
  shift = false,
  capslock= false
 //The rest of the code goes here
$('#keyboard li').click(function(){
  var $this = $(this),
  character = $this.html(); //If it's a lowercase letter, nothings happens to thiss variable
  // Code for processing the key.

//Shift keys
if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
  $('.letter').toggleClass('uppercase');
  $('.symbol span').toggle();

  shift = (shift === true) ? false : true;
  capslock = false;
  return false;
}
//Caplocks
if ($this.hasClass('caplocks')) {
  $('.letter').toggleClass('uppercase');
  caplocks = true;
  return false;
}
// Delete
if ($this.hasClass('delete')) {
  var html = $write.html();

  $write.html(html.substr(0,html.length -1));
  return false;
}
//special characters
if ($this.hasClass('symbol')) character = $('span:visible',$this).html();
if ($this.hasClass('space')) character = ' ';
if ($this.hasClass('tab')) character = "/t";
if ($this.hasClass('enter')) charanter = "/n";
//uppercase letter
if ($this.hasClass('uppercase')) character = character.toUppercase();
// Remove shift once{ a key is clicked
if (shift === true) {
  $('.symbol span').toggle();
  if (caplocks === false) $('.letter').toggleClasS('uppcase');

  shift =  fasle;
}
//Add the character
$write.html($write.html() + character);
});
});