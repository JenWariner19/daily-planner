
$(function () {
  var currentTime = dayjs().hour();
  // Added a listener for click events on the save button to save in localStorage.

  $('.saveBtn').click(function() {

    var textBlock = $(this).closest('.time-block').find('.description');
    var eventTime = $(this).closest('.time-block').attr('id');
    var eventTxt = textBlock.val();
    
    localStorage.setItem(eventTime, eventTxt);
});
  
  // Added code to apply the past, present, or future class to each time block.

    for (var i = 9; i <=17; i++) {
      var timeBlockEL = $("#hour-"+i);
      if (currentTime > i) {
        timeBlockEL.addClass("past");
      } else if (currentTime === i) {
        timeBlockEL.addClass("present")
      } else if (currentTime < i) {
        timeBlockEL.addClass("future")
      };
    };
  //
  // Added code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // Added code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMMM D, YYYY'));
});


