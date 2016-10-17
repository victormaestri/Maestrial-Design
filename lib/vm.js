function inputFunction(id) {
  var input = document.getElementById(id).getElementsByTagName('input')[0].value.length;
  var label = document.getElementById(id).getElementsByTagName('label')[0];
  if(input >= 1 ) {
    label.className = 'vm-md-label-focus';
  } else {
    label.className = '';
  }
}
