// function inputFunction(id) {
//   var input = document.getElementById(id).getElementsByTagName('input')[0].value.length;
//   var label = document.getElementById(id).getElementsByTagName('label')[0];
//   if(input >= 1 ) {
//     label.className = 'vm-md-label-focus';
//   } else {
//     label.className = '';
//   }
// }



var inputContainer = document.getElementsByClassName('vm-md-input-container');

for (var i = 0; i < inputContainer.length; i++) {
  var input = inputContainer[i].getElementsByClassName('vm-md-input')[0];
  var label = inputContainer[i].getElementsByTagName('label')[0];
  
  console.log('i: ',i);
  console.log('inputContainer:',inputContainer[i]);
  console.log('input: ', input);
  console.log('label: ', label);
  console.log('___________________________________');

  // input.onchange = function() {inputFunction(i, label)}

  input.addEventListener('change', function(i, label){

    console.log('mudou');
    console.log('i: '+i);
    console.log(input);
    console.log(label);

    if(input.value.length >= 1) {
      console.log('Não é vazio');
      console.log('___________________________________');
      console.log('___________________________________');

      label.className = 'vm-md-label-focus';
    } else {
      console.log('É vazio');
      console.log('___________________________________');
      console.log('___________________________________');

      label.className = '';
    }
    
  });
  
  
  // function inputFunction(i, label) {

  //   console.log('mudou');
  //   console.log('i: '+i);
  //   console.log(input);
  //   console.log(this.label);
  //   console.log('___________________________________');

  //   if(input.value.length >= 1) {
  //     console.log('Não é vazio');
  //     label.className = 'vm-md-label-focus';
  //   } else {
  //     console.log('É vazio');
  //     label.className = '';
  //   }

  // }
}
