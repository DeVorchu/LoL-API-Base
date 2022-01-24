
class Statistics {   


    getMostFrequentItemFromArray(arr) {
        var dict = arr.reduce((acc, val) => {
          acc[val] = !acc[val] ? 1 : acc[val] + 1;
          return acc;
         }, {});
        
        var mostFrequentElemt;
        
        for(var e in dict) {
          if(!mostFrequentElemt) {
            mostFrequentElemt = e;
          } else {
            if(dict[e] > dict[mostFrequentElemt]) {
              mostFrequentElemt = e;
            }
          }
        }
        
        return mostFrequentElemt;
      }


         
}

export default Statistics;