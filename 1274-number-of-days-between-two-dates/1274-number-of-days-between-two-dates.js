/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let d1 = new Date(date1).getTime()
    let d2 = new Date(date2).getTime()

    let difference = Math.abs(d1-d2)

    return difference/(1000*3600*24)
};