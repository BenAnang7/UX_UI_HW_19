console.log("Your index.js file is loaded correctly!");
$(document).ready(function () {
    $(".workItem").hover(
      function () {
        // Mouse enters the element (hover effect)
        $(this).css("background-color", "white");
      },
      function () {
        // Mouse leaves the element (revert to the original background color)
        $(this).css("background-color", ""); // Revert to the original background color
      }
    );
  });
  $("ul li").hover(
    function () {
      // Mouse enters the element (hover effect)
      $(this).css("text-decoration", "underline");
      $(this).css("text-shadow", "2px 2px 4px rgba(0, 0, 0, 0.2)"); 
    },
    function () {
      // Mouse leaves the element (revert to the original style)
      $(this).css("text-decoration", "none");
      $(this).css("box-shadow", "none");
    });
    $("button:contains('Resume')").hover(
        function () {
          // Mouse enters the element (hover effect)
          $(this).css("background-color", "red");
          $(this).css("color", "white");
        },
        function () {
          // Mouse leaves the element (revert to the original style)
          $(this).css("background-color", "");
          $(this).css("color", "");
        }
      );
  