const friendsData = require("../app/data/friends");
var bestFriend 
console.log(friendsData)

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

          //middleware
          var newFriend = req.body;
          friendsData.push(newFriend);
          res.json(true);
          console.log(friendsData);




          //create a function to determine the difference between the various values of the object properties.
          // compare newFriend to each object in the array of friends, parameter to parameter value, using Math.abs() to determine absolute value of difference

          //start with the array of freinds in the database(friendsData) and compare each object in that array to the newFriend object as follows:
          var matchArray = [Math.abs(this.intelligence - newFriend.intelligence),
            Math.abs(this.Obviousness - newFriend.Obviousness),
            Math.abs(this.Refinementism - newFriend.Refinementism),
            Math.abs(this.Boringness - newFriend.Boringness),
            Math.abs(this.Recreationalism - newFriend.Recreationalism),
            Math.abs(this.Phillyness - newFriend.Phillyness),
            Math.abs(this.Britishness - newFriend.Britishness),
            Math.abs(this.Brickness - newFriend.Brickness),
            Math.abs(this.Religiosity - newFriend.Religiosity),
            Math.abs(this.Geekness - newFriend.Geekness)
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
          })
         
    }
   
    


        //pop up modal displaing the name and picture as a modal pop-up.

        // $('#match-modal').modal('show')
        // $("#bestfriend").innerhtml(
        //                     //   `<p> We think you are a good match with ${friendsData[match].name} !,
        //                     // ${friendsData[match].image}`)

        //     }
        //   }
        // }
        //                 $("#surveyElement").Survey({
        // //                   model: survey