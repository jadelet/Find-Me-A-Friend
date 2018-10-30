const friendsData = require("../app/data/friends");

console.log(friendsData)

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
console.log(req)
          var newfriend = req.body;
          console.log(newfriend);
          newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
         
          friendsData.push(newfriend);
          res.json(true);
          console.log(friendsData);
          var i



          //create a function to determine the difference between the various values of the object properties.
          // compare newfriend to each object in the array of friends, parameter to parameter value, using Math.abs() to determine absolute value of difference
 
          //start with the array of freinds in the database(friendsData) and compare each object in that array to the newfriend object as follows:
          var totalsArray = [];
          for (i = 0; i < friendsData.length; i++) {
          var matchArray = [
            Math.abs(parseInt(friendsData[i].intelligence) - parseInt(newfriend.intelligence)),
            Math.abs(parseInt(friendsData[i].Obviousness) - parseInt(newfriend.Obviousness)),
            Math.abs(parseInt(friendsData[i].Refinementism) - parseInt(newfriend.Refinementism)),
            Math.abs(parseInt(friendsData[i].Boringness) - parseInt(newfriend.Boringness)),
            Math.abs(parseInt(friendsData[i].Recreationalism) - parseInt(newfriend.Recreationalism)),
            Math.abs(parseInt(friendsData[i].Phillyness) - parseInt(newfriend.Phillyness)),
            Math.abs(parseInt(friendsData[i].Britishness) - parseInt(newfriend.Britishness)),
            Math.abs(parseInt(friendsData[i].Brickness) - parseInt(newfriend.Brickness)),
            Math.abs(parseInt(friendsData[i].Religiosity) - parseInt(newfriend.Religiosity)),
            Math.abs(parseInt(friendsData[i].Geekness) - parseInt(newfriend.Geekness))
          ];

      
           

            console.log ("Match array =" + matchArray);

              //therefore the comparison of the new friend to position [i] will result in an array representing the differences in each category. Next we have to get the sum of those differences. 
              function getSum(total, num) {
                return total + num;
              };


              var totalDifference = matchArray.reduce(getSum);
              console.log ("totalDifference ="+ totalDifference);
            
              totalsArray.push(totalDifference);

              console.log (totalsArray)
            }
              // which is totaled above to result in a sum of the array--total difference between the two potential friends. 

           
           
            //once this cycles through, we get an array of "total differences" called the match array. position 0 of the new array equates to friend 0 compared with newfriend, and so forth. 
            //the next variable should determine which one is lowest. 
            const match = (parseInt(Math.min(totalsArray))); 
          

            // then I decided to take the match and compare to each element in the array (where the data is still all intact) and determine which friend is the 'match'

            for (i = 0; i <friendsData.length - 1; i++) {
              if (friendsData[i] === match) {
                console.log(`Matches with ${friendData[i].name} , ${friendsData[i].image}`)
                var bestFriend = [friendsData[i].name, friendsData[i].image]
              };
            }
          })
        }
      
         
    
   
    
