

const landmrk = require('./JSON/index.json');



function getCityLandmark(reqcity)
{
    var randomIndex = Math.random()*landmrk.length;
    randomIndex = Math.floor(randomIndex);
    var k = randomIndex;
    var i =0;

    while(i<landmrk.length)
    {
        if(landmrk[k].city === reqcity)
        {
            return landmrk[k];
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

module.exports = {randomLandmark , getCityLandmark};
