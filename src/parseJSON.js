// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var parseJSON = function(json) {

  // Look at first value of string
  // determine if its an array
  // {a: 'helo',
  //  b: 'test'}

  // {"a":"helo",
  //  "b":"test"}
  
  if (json[0] === '[') {
    var results = [];
    var contents = json.slice(1, -1);
    var contentArray = contents.split(',');
    // if (contentArray.length === 0) {
    //   return [];
    // }
    if (contentArray[0] === '') {
      return results;
    }
    for (var i = 0; i < contentArray.length; i++) {
      results.push(parseJSON(contentArray[i]));
    }
    // Push the recursion from the above for loop into a new storage array.
    return results;
  }

  // determine if its an object 
  if (json[0] === '{') {
    // create an empty object
    var temp = {};
    var contents = json.slice(1, -1);
    var contentArray = contents.split(',');
    // BUG - address the first key in the array because it has no space like the other keys have after the commas...

    console.log(contentArray);

    for (var j = 0; j < contentArray.length; j++) {
      var colonIndex = contentArray[j].indexOf(':');
      var key = contentArray[j].slice(0, colonIndex);
      var value = contentArray[j].slice(colonIndex + 1);
      console.log(value);
      if (value === ' ""') {
        temp[parseJSON(key)] = "";
      } else {
        temp[parseJSON(key)] = parseJSON(value);
      }
    }

    // slice off the brackets from the array

    // input remaining into an array separated by ,

    // eval each element of array and recurse the stringified key as well as the stringified value

    // push these back into the empty array
    return temp;
  }

  // process primitive

  // first character === "t" which is true
  if (json.charAt(0) === 't') {
    return true;
  }
  // first character === 'f' which is false
  if (json.charAt(0) === 'f') {
    return false;
  }
  // first character === 'n' which is null
  if (json.charAt(0) === 'n') {
    return null;
  }
  // first character is a quote, it's a string
  if (json.charAt(0) === '"') {
    return json.slice(1, -1);
  }
  // first character is a number, it's a number
  if ( typeof parseInt(json.charAt(0)) === 'number' || json.charAt(0) === '-') {
    return parseInt(json);
  }



  

};
