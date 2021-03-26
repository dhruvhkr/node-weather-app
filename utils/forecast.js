const request = require('request')
const forecast = (key,callback) => {
const url='http://dataservice.accuweather.com/currentconditions/v1/'+key+'?apikey=%09NnPf3XgiDiGcnsyo5aZcekrou3KhXpEf';
request({url:url,json:true},(err,response)=>{
    const data=response.body;
    if(err){
        callback("Check your internet connection",undefined);
    }
    else if(!data.length){
        callback("Please enter valid data",undefined);
    }
    else{
        const temp=data[0].Temperature.Metric;        
        callback('',{
            temperature:temp.Value+temp.Unit
        })
    }
})    
}

module.exports = forecast