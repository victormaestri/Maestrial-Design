// function inputFunction(id) {
//   var input = document.getElementById(id).getElementsByTagName('input')[0].value.length;
//   var label = document.getElementById(id).getElementsByTagName('label')[0];
//   if(input >= 1 ) {
//     label.className = 'vm-md-label-focus';
//   } else {
//     label.className = '';
//   }
// }
//
//
// var inputContainer = document.getElementsByClassName('vm-md-input-container');
//
// // console.log(inputContainer);
// for (i = 0; i < inputContainer.length; i++) {
//
//   var label = inputContainer[i].getElementsByClassName('vm-md-label');
//   var input = inputContainer[i].getElementsByClassName('vm-md-input');
//
//   console.log('inputContainer: ' + inputContainer[i]);
//   // console.log('label:' + label[i]);
//   console.log('input: ' + input);
//   console.log([i]);
//   input.onchange = function() { inputFunction() }
//
//   function inputFunction() {
//     console.log('mudou');
//     if(input.value.length >= 1) {
//       console.log('ativado');
//       label.className = 'vm-md-label-focus';
//     } else {
//       console.log('desativado');
//       label.className = '';
//     }
//   }
//
// }


var input = document.getElementsByClassName('vm-md-input');

for (var i = 0; i < input.length; i++) {
  console.log('i: ',i + '    input:',input[i]);

  input[i].onchange = function() {inputFunction(i)}

  function inputFunction(i) {

      console.log('mudou');
      console.log('i: '+i);
      console.log(input[i]);
      if(input[i].value.length >= 1) {
        console.log('Não é vazio');
        // console.log(i);
        input[i].className = 'vm-md-input vm-md-input-cor-primaria teste';
      } else {
        console.log('É vazio');
        input[i].className = 'vm-md-input vm-md-input-cor-primaria';
      }

  }
}
