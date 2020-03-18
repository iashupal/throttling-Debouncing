var timerId;
var searchDom = document.getElementById("search-box");

function makeApiCall() {
  var debounceDom = document.getElementById("debounce-count");
  var debounceCount = debounceDom.innerHTML || 0;
  debounceDom.innerHTML = parseInt(debounceCount) + 1;
}

var debounceFunc = function(func, delay) {
  clearTimeout(timerId);
  timerId = setTimeout(func, delay);
};
searchDom.addEventListener("input", function() {
  var apiCallCountDom = document.getElementById("show-api-call-count");
  var apiCallCount = apiCallCountDom.innerHTML || 0;
  apiCallCount = parseInt(apiCallCount) + 1;
  apiCallCountDom.innerHTML = apiCallCount;

  debounceFunc(makeApiCall, 200);
});

// closure function with lexical

var counter = (function() {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function(value) {
      changeBy(value);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

// prime no.
function primeNum() {
  var number,
    i,
    flag = true;
  number = document.myForm.num.value;
  number = parseInt(number);
  for (i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      flag = false;
      break;
    }
    if ((flag = true)) {
      console.log("is prime no.", number);
    } else {
      alert("is not a prime no." + numbers);
    }
  }
}
