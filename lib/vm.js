var inputContainer = document.getElementsByClassName('vm-md-input-container');

for (var i = 0; i < inputContainer.length; i++) {
  var inputs = inputContainer[i].getElementsByClassName('vm-md-input')[0];
  var labels = inputContainer[i].getElementsByTagName('label')[0];
  
  console.log('i: ',i);
  console.log('inputContainer:',inputContainer[i]);
  console.log('input: ', inputs);
  console.log('label: ', labels);
  console.log('___________________________________');

  inputs.addEventListener('change', function(inputs, labels){

    var input = inputs;
    var label = input.target.parentElement.getElementsByClassName('vm-md-label')[0];

    console.log('mudou');
    console.log('input: ', input.target);
    console.log('label: ', label);

    if(input.target.value.length >= 1) {
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
}
