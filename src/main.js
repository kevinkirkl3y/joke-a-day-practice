import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#insultButton').click(function() {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => $('.showresponse').html(`<h3>This bite of Kanye logic: ${data.quote}. </h3>`));
  
  });
});