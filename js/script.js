const displayres=  document.querySelector('#DisplayRes')

function calc(value) {
    displayres.value+=value
    if(value=='c'){
        displayres.value=''
    }
   
}

function res(){
   let r= eval(displayres.value)
    displayres.value=r
}


