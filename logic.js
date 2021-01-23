var displayHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM" ];

for (let i = 9; i < 18; i++) {
    $(".container").append(`
        <div class="row time-block" id="hour-${i}">
            <div class="col-1 hour">${displayHour[i-9]}</div>
            <textarea class="col-10 description"></textarea>
            <button class="saveBtn col-1">Save</button>
        </div>
    `)
    if(moment().format("H")==i) {
        $(`#hour-${i}`).addClass("present")
    }
    else if(moment().format("H")>i) {
        $(`#hour-${i}`).addClass("past")
    } else{
        $(`#hour-${i}`).addClass("future")
    }
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

$(".saveBtn").on("click", function(){
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
    localStorage.setItem(key, value)
})

var todaysDate = moment().format("dddd, MMMM Do gggg")

$("#currentDay").append(`
    <div>${todaysDate}</div>
`)
