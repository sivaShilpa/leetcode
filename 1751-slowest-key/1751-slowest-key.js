/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let seconds = []
    for(let i = 0; i<releaseTimes.length; i++){
        i===0? seconds.push(releaseTimes[i]) : seconds.push(releaseTimes[i]-releaseTimes[i-1])
    }
    // console.log(seconds)
    let max = Math.max(...seconds)
    let indices = []
    console.log(max)
    while(seconds.includes(max)){
        let index = seconds.indexOf(max)
        indices.push(index)
        seconds.splice(index,1, 0)
    }
    console.log(indices)
    let slowest = ""
    for(let i = 0; i<indices.length; i++){
        if(slowest<keysPressed[indices[i]]){
            slowest = keysPressed[indices[i]]
        }
    }
    return slowest
};