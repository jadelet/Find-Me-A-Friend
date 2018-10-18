
const friendsData = require("../app/data/friends");

console.log (friendsData)

    module.exports = function (app) {

      app.get("/api/friends", function (req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function (req, res) {
 
          // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
          // It will do this by sending out the value "true" have a table
          // req.body is available since we're using the body parsing middleware
      
           friendsData.push(req.body);
            res.json(true);
    

        var newFriend = req.body;

        
        friendsData.push(newFriend);
        res.json(true);
        console.log (friendsData);

        friendAlgorithm (newFriend);
        res.end()
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
