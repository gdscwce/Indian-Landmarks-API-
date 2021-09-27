

const landmrk = require('./JSON/index.json');



function getCityLandmark(reqcity)
{
    var randomIndex = Math.random()*landmrk.length;
    randomIndex = Math.floor(randomIndex);
    var k = randomIndex;
    var i =0;

    while(i<landmrk.length)
    {
        if(landmrk[k].city.toLowerCase() === reqcity.toLowerCase())
        {
            return landmrk[k];
        }
        k = (k+1)%(landmrk.length);
        i = i+1;
    }
    return landmrk[0];
}


function getlocalityLandmark(reqlocality)
{
    var randomIndex = Math.random()*landmrk.length;
    randomIndex = Math.floor(randomIndex);
    var k = randomIndex;
    var i =0;

    while(i<landmrk.length)
    {
        if(landmrk[k].locality.toLowerCase() === reqlocality.toLowerCase())
        {

            return landmrk[k];
        }
        k = (k+1)%(landmrk.length);
        i = i+1;
    }
    return landmrk[0];
}

function  getStateLandmark(reqstate) {

    var randomIndex = Math.random()*landmrk.length;
    randomIndex = Math.floor(randomIndex);
    var k = randomIndex;
    var i =0;

    while(i<landmrk.length)
    {
        if(landmrk[k].state.toLowerCase() === reqstate.toLowerCase())
        {

            return landmrk[k];
        }
        k = (k+1)%(landmrk.length);
        i = i+1;
    }
    return landmrk[0];
}

function getCityLocalityLandmark(reqcity,reqlocality) {

    var randomIndex = Math.random()*landmrk.length;
    randomIndex = Math.floor(randomIndex);
    var k = randomIndex;
    var i =0;

    while(i<landmrk.length)
    {
        if(landmrk[k].city.toLowerCase() === reqcity.toLowerCase())
        {
            if(landmrk[k].locality.toLowerCase() === reqlocality.toLowerCase())
            {
                return landmrk[k];
            }
        }
        k = (k+1)%(landmrk.length);
        i = i+1;
    }
    return landmrk[0];
    
}

function randomLandmark()
{
    var randomIndex = Math.random()*landmrk.length;
    randomIndex = Math.floor(randomIndex);
    return landmrk[randomIndex];
}

module.exports = {randomLandmark , getCityLandmark,getlocalityLandmark , getStateLandmark,getCityLocalityLandmark};
