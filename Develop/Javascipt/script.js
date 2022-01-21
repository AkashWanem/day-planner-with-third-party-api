$(document).ready(function() {
    //console.log("hello");
    
    //Display current date and time
    let date = moment().format('dddd MMMM Do YYYY, h:mm');
    $('#currentDay').text(date);

    // color coding each time block
    function timeTracker() {
        var timeAtm = moment().hours();
        let time = $('.time-block');
        // console.log(timeAtm);

        time.each(function () {
            let hour = parseInt($(this).attr('id'));
            //console.log(hour);

            if (hour === timeAtm) {
                $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description');
            } else if (timeAtm > hour) {
                $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description');
            } else {
                $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description');
            }
        })
    };
    
    timeTracker();


});
