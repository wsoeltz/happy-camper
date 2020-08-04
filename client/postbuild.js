const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, './', 'build', 'index.html');
const ncp = require('ncp').ncp;

ncp.limit = 16;

// Copy static files from dist to client_dist
ncp(path.resolve(__dirname, './', 'build', 'static'), path.resolve(__dirname, '../client_dist/', 'static', 'client_dist'), function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('Static files copied');
});

// read in the index.html file
fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    return console.error(err);
  }
  let result = data;
  result = result.replace(/\/static/g, "{% static 'client_dist");
  result = result.replace(/\.css/g, ".css' %}");
  result = result.replace(/\.js"/g, ".js' %}\"");
  result = '{% load static %}' + result;
  fs.writeFile(path.resolve(__dirname, '../client_dist/templates/', 'client_dist', 'index.html'), result, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('index.html saved');
    }
  });

});