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
  // Added code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

    for (var i = 9; i <=17; i++) {
      var timeBlockEL = $("#hour-"+i);
      if (currentTime > i) {
        timeBlockEL.addClass("past");
      } else if (currentTime === i) {
        timeBlockEL.addClass("present")
      } else if (currentTime < i) {
        timeBlockEL.addClass("future")
      };
      $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
    };

  // Added code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMMM D, YYYY'));
});


