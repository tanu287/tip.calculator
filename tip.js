
function calc() {
  var amt=document.getElementById('quality').value;
  var am=document.getElementById('quantity').value;
  var a=document.getElementById('tasty').value;
  if(amt=='')
  {
    alert('please enter the amount');
  }
  else if(a=='')
  {
    alert('please enter the number of people');
  }
  else {
    var tip=Math.round((amt*am)/a);
    document.getElementById('res').innerHTML='TIP AMOUNT:<br>$'+tip+ '<br>perperson';
  }

}
