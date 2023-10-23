// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. 
  $(".saveBtn").on("click", function() {
    // Get the parent time-block element by traversing the DOM
    const timeBlock = $(this).closest(".time-block");
    // Extract the ID from the time-block element
    const blockId = timeBlock.attr("id");
    // Get user input from the textarea within the time-block
    const userDescription = timeBlock.find(".description").val();

    localStorage.setItem(blockId, userDescription);
  });

  // TODO: Add code to apply the past, present, or future class to each time

  function hourColor() {
    const currentHour = dayjs().hour(); // Get the current hour

    $(".time-block").each(function () {
      const hourValue = parseInt(this.id.split("-")[1]); // Extract the hour from the id
      if (hourValue < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('present future');
      } else if (hourValue === currentHour) {
        $(this).addClass('present');
        $(this).removeClass('past future');
      } else {
        $(this).addClass('future');
        $(this).removeClass('past present');
      }
    });
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  function retrieveUserInput(){
    $(".time-block").each(function (){
      const blockId = $(this).attr("id"); //Get the time-block ID
      const userDescription = localStorage.getItem(blockId)
      // Check if user input was found in localstorage
      if (userDescription) {
        $(this).find(".description").val(userDescription);
      }
    });
  }
  
  // TODO: Add code to display the current date in the header of the page.
  // Get time and display it as text
  let currentTime = setInterval(CurrentToday, 1000);
  function CurrentToday() {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm:ss A'));
  };
hourColor();
retrieveUserInput();
});
