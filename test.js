const friendsData = require(/app/data/friends");

console.log(friendsData)






          //create a function to determine the difference between the various values of the object properties.
          // compare newfriend to each object in the array of friends, parameter to parameter value, using Math.abs() to determine absolute value of difference
 
          //start with the array of freinds in the database(friendsData) and compare each object in that array to the newfriend object as follows:
          var matchArray = [
            Math.abs(this.intelligence - newfriend.intelligence),
            Math.abs(this.Obviousness - newfriend.Obviousness),
            Math.abs(this.Refinementism - newfriend.Refinementism),
            Math.abs(this.Boringness - newfriend.Boringness),
            Math.abs(this.Recreationalism - newfriend.Recreationalism),
            Math.abs(this.Phillyness - newfriend.Phillyness),
            Math.abs(this.Britishness - newfriend.Britishness),
            Math.abs(this.Brickness - newfriend.Brickness),
            Math.abs(this.Religiosity - newfriend.Religiosity),
            Math.abs(this.Geekness - newfriend.Geekness)
          ]

      
            for (i = 0; i < matchArray.length; i++) {



              //therefore the comparison of the new friend to position [i] will result in an array representing the differences in each category. Next we have to get the sum of those differences. 
              function getSum(total, num) {
                return total + num;
              }


              matchArray.reduce(getSum)
              // which is totaled above to result in a sum of the array--total difference between the two potential friends. 

            }

            //once this cycles through, we get an array of "total differences" called the match array. position 0 of the new array equates to friend 0 compared with newfriend, and so forth. 
            //the next variable should determine which one is lowest. 
            const match = Math.min(matchArray)

            //then I decided to take the match and compare to each element in the array (where the data is still all intact) and determine which friend is the 'match'

            for (i = 0; i <matchArray.length - 1; i++) {
              if (matchArray[i] === match) {
                console.log(`Matches with ${matchArray[i].name} , ${matchArray[i].image}`)
                var bestFriend = [matchArray[i].name, matchArray[i].image]
              }
            }
      
   
    
