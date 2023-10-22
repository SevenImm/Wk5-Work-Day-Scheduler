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
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
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
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  // TODO: Add code to display the current date in the header of the page.
  // Get time and display it as text
  let currentTime = setInterval(CurrentToday, 1000);
  function CurrentToday() {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm:ss A'));
  };
hourColor();
});
