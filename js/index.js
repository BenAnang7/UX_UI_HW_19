console.log("Your index.js file is loaded correctly!");
$(document).ready(function () {
    $(".workItem").hover(
      function () {
       
        $(this).css("background-color", "white");
      },
      function () {
       
        $(this).css("background-color", ""); 
      }
    );
  });
  $("ul li").hover(
    function () {
   
      $(this).css("text-decoration", "underline");
      $(this).css("text-shadow", "2px 2px 4px rgba(0, 0, 0, 0.2)"); 
    },
    function () {
     
      $(this).css("text-decoration", "none");
      $(this).css("box-shadow", "none");
    });
    $("button:contains('Resume')").hover(
        function () {
          
          $(this).css("background-color", "red");
          $(this).css("color", "white");
        },
        function () {
         
          $(this).css("background-color", "");
          $(this).css("color", "");
        }
      );
      $("button:contains('View Project')").hover(
        function () {
        
          $(this).css("background-color", "red");
          $(this).css("color", "white");
        },
        function () {
         
          $(this).css("background-color", "");
          $(this).css("color", "");
        }
      );
 
  