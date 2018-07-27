class DOMNodeCollection {
  constructor(HTMLelements) {
    this.HTMLelements = HTMLelements;
  }
  
  html(string = null) {
    if (string === null) {
      return this.HTMLelement[0].innerHTML;
    } else {
      for (var i = 0; i < this.HTMLelements.length; i++) {
        this.HTMLelements[i].innerHTML = string;
      }
    }
  }
  
  empty() {
    this.html("");
  }
  
  append(arg) {
    if (typeof arg === "string") {
      for (let i = 0; i < this.HTMLelements.length; i++) {
        this.HTMLelements[i].innerHTML += arg;  
      }
    } else if (arg instanceof HTMLElement) {
      for (let i = 0; i < this.HTMLelements.length; i++) {
        this.HTMLelements[i].innerHTML += arg.outerHTML;  
      }
    } else if (arg.constructor.name === "DOMNodeCollection") {
      for (let i = 0; i < this.HTMLelements.length; i++) {
        for (let j = 0; j < arg.HTMLelements.length; j++) {
          this.HTMLelements[i].innerHTML += arg.HTMLelements[j].outerHTML;
        }
      }
    }
  }
  
  attr(key, val) {
    if (typeof val === "string") {
      this.HTMLelements.forEach(node => node.setAttribute(key, val));
    } else {
      return this.HTMLelements[0].getAttribute(key);
    }
  }
  
  addClass() {
    
  }
  
  removeClass() {
    
  }
  
}

module.exports = DOMNodeCollection;