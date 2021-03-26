const request = require('request');
const geocode=(address,callback)=>{
const url='http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09NnPf3XgiDiGcnsyo5aZcekrou3KhXpEf&q='+address
request({url:url,json:true},(err,{body})=>{
    if(err){
        callback("Check your internet connection",undefined);
    }
    else if(!body.length){
        callback("Please enter valid data",undefined);
    }
    else{
        callback('',{
            key:body[0].Key
        })
    }
})
}

module.exports = geocode