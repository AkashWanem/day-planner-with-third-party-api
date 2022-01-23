$(document).ready(function() {
    //console.log("hello");
    
    //Display current date and time
    let date = moment().format('dddd MMMM Do YYYY, h:mm');
    $('#currentDay').text(date);

    // color coding each time block
    function timeTracker() {
        let timeAtm = moment().hours();
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

    // SaveButton event listener
    $('.saveBtn').on('click', function () {
        let text = $(this).siblings('.description').val();
        let time = $(this).parent().attr('id');

        // save text input in the local storage
        localStorage.setItem(time, text);
    });

    // Get item from local storage if any changes in events occurred by timeblock
    $('#9 textarea').val(localStorage.getItem('9'))
    $('#10 textarea').val(localStorage.getItem('10'));
    $('#11 textarea').val(localStorage.getItem('11'));
    $('#12 textarea').val(localStorage.getItem('12'));
    $('#13 textarea').val(localStorage.getItem('13'));
    $('#14 textarea').val(localStorage.getItem('14'));
    $('#15 textarea').val(localStorage.getItem('15'));
    $('#16 textarea').val(localStorage.getItem('16'));
    $('#17 textarea').val(localStorage.getItem('17'));

});
