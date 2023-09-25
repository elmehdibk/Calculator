const displayres=  document.querySelector('#DisplayRes')
function calc(value) {
    displayres.value+=value
    if(value=='c'){
        displayres.value=''
    }
}

function backspace(){
    const displayres= document.querySelector('#DisplayRes').value
    document.querySelector('#DisplayRes').value=displayres.slice(0, -1)
}

function res(){
   let r= eval(displayres.value)
    displayres.value=r
}


