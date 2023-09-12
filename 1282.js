var groupThePeople = function(groupSizes) {
    let persons = []
     let hMap = {}

    for(let i=0; i<groupSizes.length; i++){
        if(hMap[groupSizes[i]]){
            hMap[groupSizes[i]].push(i)
        }else{
            hMap[groupSizes[i]] = [i]
        }              
    }

    for(let key in hMap){
        if(hMap[key].length === key){
            persons.push(hMap[key])
        }else{
            while(hMap[key].length){
                persons.push(hMap[key].splice(0, parseInt(key)))
            }            
        }
    }
    return persons
};

console.log(groupThePeople([3,3,3,3,3,1,3]))