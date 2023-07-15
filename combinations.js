let stringCombinations = (str) => {
    let strLength = str.length;
    let result = [];
    let currentIndex = 0;
    while (currentIndex < strLength) {
      let char = str.charAt(currentIndex);
      let x;
      let arrTemp = [char];
      for (x in result) {
        let temp = [...result[x]]
        temp.push(char)
        result.push(temp);
      }
      result.push(arrTemp);
      currentIndex++;
    }
    return result;
  };
  console.log(stringCombinations("dog"));