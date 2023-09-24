var canTransform = function(start, end) {
    let initialStart = start
    let startArr = []
    if(start.length < 2 || start.length !== end.length) return false
    if(start === end) return true
    
    while(start.includes("XL") || start.includes("RX")){
        startArr = start.split("XL")
        start = startArr.join("LX")
        if(start === end) return true
        startArr = start.split("RX")
        start = startArr.join("XR") 
        if(start === end) return true      
    }
    if(start === end) return true
    else {
        start = initialStart
        while(start.includes("XL")){            
            startArr = start.split("XL")
            start = startArr.join("LX")
            if(start === end) return true
        }
        if(start === end) return true
        else{
            start = initialStart
            while(start.includes("RX")){
                startArr = start.split("RX")
                start = startArr.join("XR")
                if(start === end) return true
            }
            if(start === end) return true
            else {
                start = initialStart
                while(start.includes("XL") || start.includes("RX")){
                    startArr = start.split("RX")
                    start = startArr.join("XR") 
                    if(start === end) return true 
                    startArr = start.split("XL")
                    start = startArr.join("LX")
                    if(start === end) return true     
                }
                if(start === end) return true
                else {
                    start = initialStart
                    let num = 1
                    let index = 0
                    while((start.includes("XL") || start.includes("RX")) && i < start.length){
                        start = initialStart
                        index = start.indexOf("RX", i)
                        startArr = start.split("")
                        start = startArr.splice(index, 2, "X", "R").join("")
                        if(start === end) return true 

                        start = initialStart
                        index = start.indexOf("XL", i)
                        startArr = start.split("")
                        start = startArr.splice(index, 2, "L", "X").join("")
                        if(start === end) return true
                        
                        i++
                    }
                    if(start === end) return true
                    else false

                    }

            }
            
        }
    }    
};

console.log(canTransform("XLXRRXXLRX", "XLXRRXXLXR"))