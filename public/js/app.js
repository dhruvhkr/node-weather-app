console.log("app.js is running")

const input=document.querySelector('#input');
const form=document.querySelector('form')
const messageOne=document.querySelector('#message-one')
const messageTwo=document.querySelector('#message-two')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    messageOne.textContent='Loading...'
    messageTwo.textContent=''
    
    fetch('/weather?address='+input.value)
    .then(res=>{
        res.json().then(res=>{
            if(res.error){
                form.reset();
                messageOne.textContent=res.error
            }
            else{
                form.reset();
                messageOne.textContent=res.address
                messageTwo.textContent=res.forecast
            }
        })
    })
    .catch(err=>{
        console.log(err);
        form.reset();
    })
    
})