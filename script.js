'use strict';

const DomElement = function (selector, height, width, bg, fontSize, color) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.color = color;
};

DomElement.prototype.createDomElement = function () {
  let element;

  if (this.selector[0] === '.') {
    element = document.createElement('div');
    element.classList.add(this.selector.slice(1));
  } else if (this.selector[0] === '#') {
    element = document.createElement('p');
    element.id = this.selector.slice(1);
  }

  element.style.cssText = `
  height: ${this.height}px; 
  width: ${this.width}px; 
  background-color: ${this.bg}; 
  font-size: ${this.fontSize}px; 
  color: ${this.color};
  `;

  element.textContent = `Это мой элемент. Его размеры: ${this.width} × ${this.height} px. Цвет фона — ${this.bg}. Размер текста — ${this.fontSize} px.`;

  document.body.append(element);
};

const newDomElement = new DomElement('#block', 200, 300, 'black', 26, 'white');
newDomElement.createDomElement();
