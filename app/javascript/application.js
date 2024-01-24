// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
// import "jquery"
import "./script.js"
// import "./add_jquery"
import jquery from "jquery"
window.$ = jquery

//= require jquery
//= require jquery_ujs

$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});