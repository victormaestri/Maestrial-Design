// function inputFunction(id) {
//   var input = document.getElementById(id).getElementsByTagName('input')[0].value.length;
//   var label = document.getElementById(id).getElementsByTagName('label')[0];
//   if(input >= 1 ) {
//     label.className = 'vm-md-label-focus';
//   } else {
//     label.className = '';
//   }
// }


var input = document.getElementById('input');

var inputContainer = document.getElementsByClassName('vm-md-input-container');

// console.log(inputContainer);
for (i = 0; i < inputContainer.length; i++) {

  var label = inputContainer[i].getElementsByClassName('vm-md-label').length;
  var input = inputContainer[i].getElementsByClassName('vm-md-input').length;

  // console.log(i);
  input.onchange = function() { inputFunction() }

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

}

console.log('label:' + label);
console.log('input: ' + input);
