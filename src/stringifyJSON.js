// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// [1, "abc"]

var stringifyJSON = function(obj
  ) {
  var results = [];

  // functions and undefined
  if (typeof obj === 'function' || obj === undefined) {
    return undefined;
  }

  // if type of is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // numbers, null, undefined, boolean
  if (typeof obj !== 'object' || obj === null) {
    return String(obj);  
  }

  // if its an array []
  if (Array.isArray(obj)) {
    if (obj.length === 0){
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    //
    return "[" + results + "]";
  }
  
  // type of is an object {}
  if (typeof obj === 'object') {
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        break;
      }
      results.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return "{" + results + "}";
  }
  

};

