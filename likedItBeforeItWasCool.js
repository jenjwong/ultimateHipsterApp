const googleTrends = require('google-trends-api');
const _ = require('lodash');

const mockAPI = [ [ { 'May 2014': '10' },
                    { 'June 2014': '3' },
                    { 'July 2014': '3' },
                    { 'August 2014': '3' },
                    { 'September 2014': '5' },
                    { 'October 2014': '4' },
                    { 'November 2014': '3' },
                    { 'December 2014': '4' },
                    { 'January 2015': '4' },
                    { 'February 2015': '3' },
                    { 'March 2015': '4' },
                    { 'April 2015': '4' },
                    { 'May 2015': '4' },
                    { 'June 2015': '3' },
                    { 'July 2015': '3' },
                    { 'August 2015': '8' },
                    { 'September 2015': '12' },
                    { 'October 2015': '5' },
                    { 'November 2015': '7' },
                    { 'December 2015': '14' },
                    { 'January 2016': '72' },
                    { 'February 2016': '100' } ] ]

let userDate = 'February 2015'
let userChoice;
let before;
let after;


googleTrends.trendData('Croissants')
.then(function(results){
  results = mockAPI;


// get before choice after
  let index = 0;
  _.forEach(results[0], (item, key) => {
    index ++;
    if (item[userDate]) {
      before = results[0].slice(0, index-1);
      userChoice = parseInt(item[userDate]);
      after = results[0].slice(index);
    }
  })
  



const getMedian = (DataArray) => {
  let total = 0;
  let median;
  _.forEach(DataArray[0], (arrayItem, index) => {
    _.forEach(arrayItem, (item, key, collection) => {
      total += parseInt(collection[key]);
    });
  });
  numberOfItems = DataArray[0].length;
  median = Math.floor(total/numberOfItems);
  return median
};

const likedItBeforeItWasCoolScore = (medianCool, userCool) => {
  let score = medianCool/userCool;
  return score;
}


const rankUser = (coolScore) => {
  if (coolScore <= 1) {
    console.log('basic biatch!!')
  } 
  if (coolScore > 1) {
    console.log('hipsterGod')
  }
  
}





console.log(rankUser(likedItBeforeItWasCoolScore(getMedian(mockAPI), userChoice)))






})
.catch(function(err){
    console.error(err);
});

