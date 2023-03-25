
function formatDolar(number) {
    return number.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }

  export default formatDolar