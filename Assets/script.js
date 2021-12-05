// 1. add current date to the top of the page
const clock = document.getElementById('currentDay');
    setInterval(() => {
        const now = moment();
        const clockDisplay = now.format('dddd, MMM Do YYYY, h:mm:ss a')
        clock.textContent = clockDisplay;
    }, 1000);


    
// global variable
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var taskDescription = $(this).siblings(".description").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, taskDescription);

});


// 2. color code past, present, and future each time block
//time blocks with standard business hours
function colorTime() {
        var currentTime = moment().hour();
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }


// 4.  after refresh events should stay persistent

function saveInput() {

    $(".hour").each(function() {
        var theTask = $(this).text();
        var toDo = localStorage.getItem(theTask);

        if(toDo) {
        $(this).siblings(".description").val(toDo);
        }
    });
}


colorTime();
saveInput();







