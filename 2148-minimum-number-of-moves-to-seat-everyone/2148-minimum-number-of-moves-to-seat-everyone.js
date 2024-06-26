/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let moves = 0

    seats.sort((a,b) => a-b)
    students.sort((a,b) => a-b)

    for(let i=0; i<students.length; i++){
        moves += Math.abs(students[i] - seats[i])
    }
     return moves
};