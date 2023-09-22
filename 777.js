var canTransform = function(start, end) {
    let initialStart = start

    if(start.length < 2 || start.length !== end.length) return false
    if(start === end) return true
    let startArr = start.split("XL")
    

    while(start.includes("XL") || start.includes("RX")){
        startArr = start.split("XL")
        start = startArr.join("LX")
        startArr = start.split("RX")
        start = startArr.join("XR")       
    }
    console.log(start, end)
    if(start === end)return true
    else{
        start = initialStart
        while(start.includes("XL")){
            startArr = start.split("XL")
            start = startArr.join("LX")    
        }
        console.log(start, end)
        if(start === end) return true
        else{
            start = initialStart
            while(start.includes("RX")){
                startArr = start.split("RX")
                start = startArr.join("XR")
            }
            console.log(start, end)
            if(start === end) return true
            else {
                start = initialStart
                while(start.includes("XL")){
                    startArr = start.split("XL")
                    start = startArr.join("LX")    
                }
                while(start.includes("RX")){
                    startArr = start.split("RX")
                    start = startArr.join("XR")
                }
                console.log(start, end)
                if(start === end) return true
                else{
                    start = initialStart
                    while(start.includes("RX")){
                        let startArr = start.split("RX")
                        start = startArr.join("XR")
                    }
                    while(start.includes("XL")){
                        startArr = start.split("XL")
                        start = startArr.join("LX")    
                    }
                    console.log(start, end)
                    if(start === end) return true
                    else return false
                }
            }
        }        
    }
};

console.log(canTransform("XLXRRXXLRX", "XLXRRXXLXR"))