"use strict";

const extendObj = (childObj, parentObj) => {
  childObj.prototype = parentObj.prototype;
};

const Human = {};
Human.prototype = {
  name: "",
  geneder: "",
  birthLocation: "Earth",
  sayMyName: function () {
    console.log("My name is " + this.name);
  },
};

const Male = function (name, gender) {
  this.name = name;
  this.gender = gender;
};

extendObj(Male, Human);

const abhilash = new Male("Abhilash", "Male");

abhilash.sayMyName();
