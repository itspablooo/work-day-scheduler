$(function () {

// pull the current hour from day.js and set it to variable currentHour 
  var currentHour = dayjs().hour()

// when save button is clicked, run the function
  $(".saveBtn").on("click", function () { 
    
    // set the value of the text area from sibling of the button clicked using $(this)
    // value = value for local storage
    var value = $(this).siblings(".description").val()
    // time = key for local storage. will use parent element of the button clicked using $(this)
    var time = $(this).parent().attr("id")
    // set key and value in local storage
    localStorage.setItem(time, value)
  });

  // this function will update class used for styling to update colors based on the time.
  function updateHour() {
    // select class time-block an each loop
    $(".time-block").each(function() {
      // parse id of each time-block div to retrieve integer as a number 
      var blockHour = parseInt($(this).attr("id").split("-")[1])

      // run an if else statement to decide which style class is added
      // if block hour is less than current hour, apply past class style
      if (blockHour < currentHour) {
        $(this).addClass("past")
        // if blockhour = current hour, remove past style and apply present class
      } else if (blockHour == currentHour) {
        $(this).removeClass("past").addClass("present")
        // anything else will remove past and present class, and apply future class. 
      } else {
        $(this).removeClass("past").removeClass("present").addClass("future")
      }
    })
  }
  // call function update hour to update class styling
  updateHour()

  // set interval so the function is called  every 60000 milliseconds (1minute)
  // this allows styling to be set based on time 
  setInterval(updateHour, 60000)

  // return value of storage items for each time-block
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
});