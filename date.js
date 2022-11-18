// jshint esversion:6

exports.getDay = function(){
const today = new Date();

const option = {
  weekday: "long",
  day: "numeric",
  month: "long",
};
let day= today.toLocaleDateString("en-US", option);
return day;
};

exports.getDa = function() {
const today = new Date();

const option = {
  weekday: "long"
};
let day= today.toLocaleDateString("en-US", option);
return day;
};
