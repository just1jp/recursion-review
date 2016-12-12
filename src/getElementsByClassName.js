// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  node = node || document.body;
  var nodes = [];
  var children = node.childNodes;

  if ( node.classList && node.classList.contains(className) ) {
    nodes.push(node);
  }

  if ( children ) {
    for (var i = 0; i < children.length; i++) {
      var results = getElementsByClassName(className, children[i]);
      nodes = nodes.concat(results);
    }
  }

  return nodes;
};

