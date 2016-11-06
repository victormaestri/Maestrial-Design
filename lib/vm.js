// INPUTS
var inputContainer = document.getElementsByClassName('vm-md-input-container');

for (var i = 0; i < inputContainer.length; i++) {
  var inputs = inputContainer[i].getElementsByClassName('vm-md-input')[0];
  var labels = inputContainer[i].getElementsByTagName

  inputs.addEventListener('change', function(inputs){
    var input = inputs;
    var label = input.target.parentElement.getElementsByClassName('vm-md-label')[0];
    if(input.target.value.length >= 1) {
      if(label) {
        label.className = 'vm-md-label vm-md-label-focus';
      }
    } else {
      if(label){
        label.className = 'vm-md-label';
      }
    }
  });
}
