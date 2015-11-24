 "use strict";
function pyechart() {

 }
 /*
  ** constants for saving and accessing data
  */
 var myData = [];
 var myColors = [];
 pyechart.prototype.setStage = function (stage) {
     document.getElementById(stage).innerHTML = '<canvas id="canvas" width="400" height="300" depth="20"></canvas>';
 }
 pyechart.prototype.setData = function (data) {
     myData = data.slice(0);
 }
 pyechart.prototype.setColor = function (type) {
     if (typeof type === 'boolean' && type == true) {
         for (var i = 0; i < myData.length; i++) {
             /*   myColors.push("#" + Math.floor(Math.random() * 16777215).toString(16));*/
             myColors.push('rgb(' + Math.floor(Math.random() * (256 - 128) + 128) + ',' + Math.floor(Math.random() * (256 - 128) + 128) + ',' + Math.floor(Math.random() * (256 - 128) + 128) + ')');
         }
         console.log(JSON.stringify(myColors));
     } else if (type instanceof Array) {
         myColors = type.splice(0);
     }
 }
 pyechart.prototype.drawChart = function () {
     var j = 0;
     var c = document.getElementById('canvas');
     var ctx = c.getContext('2d');
     /*   var myColors = ['#FFFF00', '#CCFF00', '#99FF00', '#00FF66', '#00FF99', '#00FFCC', '#FF0000', '#FF6600', '#FFCC00'];*/
     var radius = 100;
     var lastPosition = 0,
         total = 0;
     ctx.outlineThickness = 10;
     for (var i in myData) {
         total += myData[i];
     }
     var interval = setInterval(function () {
         if (j <= myData.length) {
             ctx.fillStyle = myColors[j];
             ctx.beginPath();
             ctx.moveTo(200, 150);
             ctx.arc(200, 150, radius, lastPosition, lastPosition + (Math.PI * 2 * (myData[j] / total)), false);
             ctx.fill();
             lastPosition += Math.PI * 2 * (myData[j] / total);
             j++;
         } else {
             clearInterval(interval);
         }
     }, 100);

 }