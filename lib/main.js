const DOMNodeCollection = require('./dom_node_collection');


window.$l = (arg) => {
  if (typeof arg === "string") {
    return nodefinder(arg);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }

};

function nodefinder(selector) {
  let nodesArray = Array.from(document.querySelectorAll(selector));
  return new DOMNodeCollection(nodesArray);
} 

