const friendsData = require("../app/data/friends");




    module.exports = function (app) {

      app.get("/api/friends", function (req, res) {
        res.json(friendData);
      });

      app.post("/api/friends", function (req, res) {

    

        var newFriend = req.body;

        
        friendData.push(newFriend);

        friendAlgorithm (newFriend)
      });
    }


      //create a function to determine the difference between the various values of the object properties.
      // compare newFriend to each object in the array of friends, parameter to parameter value, using Math.abs() to determine absolute value of difference

      //start with the array of freinds in the database(friendsData) and compare each object in that array to the newFriend object as follows:
function friendAlgorithm (newFriend){
      const diffList = friendsData.forEach(function () {

            comparisonArray = [
              Math.abs(this.intelligence - newFriend.intelligence),
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
//therefore the comparison of the new friend to position 0 will result in an array of values
            function getSum(total, num) {
              return total + num;
             // which is totaled above to result in a sum of the array 

            }
            return comparisonArray.reduce(getSum)
            
          });
        //resulting in an array of "total differences". position 0 of the new array equates to friend 0 compared with newfriend, and so forth. 
        const match = Math.min (diffList)
console.log (diffList)
        for (i=0; i<diffList.length-1; i++) {
          if (diffList[i]===match) {
            console.log (`Matches with ${diffList[i].name} , ${diffList[i].image}`)
            //pop up modal displaing the name and picture as a modal pop-up.
              //friendsData[i].name
              //friendsData[i].image
          }
        }
      }

          // This should have:
          // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
          // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.