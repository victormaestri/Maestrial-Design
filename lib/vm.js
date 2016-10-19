// function inputFunction(id) {
//   var input = document.getElementById(id).getElementsByTagName('input')[0].value.length;
//   var label = document.getElementById(id).getElementsByTagName('label')[0];
//   if(input >= 1 ) {
//     label.className = 'vm-md-label-focus';
//   } else {
//     label.className = '';
//   }
// }



var inputContainer = document.getElementsByClassName('vm-md-input-container')[0].getElementsByTagName('input')[0];
var label = document.getElementsByTagName('label')[0];


var input = document.getElementById('input');

console.log('input: ' + inputContainer);

inputContainer.onchange = function() { inputFunction() }

function inputFunction() {
  console.log('mudou');
  if(input.value.length >= 1) {
    console.log('ativado');
    label.className = 'vm-md-label-focus';
  } else {
    console.log('desativado');
    label.className = '';
  }
}
