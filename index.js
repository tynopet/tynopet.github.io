var data = [
  { id: 0, value: 'hello-0' },
  { id: 1, value: 'hello-1' },
  { id: 2, value: 'hello-2' },
  { id: 3, value: 'hello-3' },
  { id: 4, value: 'hello-4' },
  { id: 5, value: 'hello-5' },
  { id: 6, value: 'hello-6' },
  { id: 7, value: 'hello-7' },
  { id: 8, value: 'hello-8' },
  { id: 9, value: 'hello-9' }
];

// constructor
var state = {
  options: data,
  selectedOption: data[0].value
};
var $input = $('.smartselect > .value');
var $options = $('.smartselect > .options');
$input.val(state.selectedOption);
$options.hide();

// Methods
function renderOptions() {
  $options.children().remove();
  state.options.forEach(function(option) {
    $options
      .append($('<span class="option">' + option.value + '</span>'))
      .on('click', clickHandler);
  });
}

function clickHandler(e) {
  e.stopPropagation();
  state.selectedOption = $(e.target).text();
  $input.val(state.selectedOption);
}

function focusHandler() {
  $options.show();
}

function blurHandler() {
  setTimeout(function() {
    $options.hide();
  }, 200);
}

function changeHandler(e) {
  state.options = data.filter(function(option) {
    return option.value.indexOf($(e.target).val()) >= 0;
  });
  renderOptions();
}

// render
$input
  .on('focus', focusHandler)
  .on('blur', blurHandler)
  .on('input', changeHandler);
renderOptions();
