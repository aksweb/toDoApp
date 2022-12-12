// exporting day date & month
module.exports.getDate = getDate;
function getDate() {
    let today = new Date()


    let options = { weekday: "long", day: "numeric", month: "long" }

    let day = today.toLocaleDateString("hi-IN", options)
    return day
}

// 2nd function to export day only
module.exports.getDay = getDay;
function getDay() {
    let today = new Date()

    let options = { weekday: "long" }

    let day = today.toLocaleDateString("hi-IN", options)
    return day
}

