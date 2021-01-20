jQuery( document ).ready(function( $ ) {


	"use strict";

    $(function(){
        var aud = $('audio')[0];
  
        aud.ontimeupdate = function(){
          $('.progress').css('width', aud.currentTime / aud.duration * 100 + '%')
        }
      })
    

 
});
