let x = 0

function configAD(){
    switch(x){
        case 0:
            document.getElementById('config').style.opacity = '80%'  
            document.getElementById('config').style.pointerEvents = 'visible' 
            x++
            break;
        case 1:
            document.getElementById('config').style.opacity = '0%'
            document.getElementById('config').style.pointerEvents = 'none'
            x = 0
            break;
    }
}

let bgc = 0

function bg(){
    switch(bgc){
        case 0:
            document.getElementById('body').style.backgroundColor = 'var(--bg2)'
            bgc++
            
            break;
        case 1:
            document.getElementById('body').style.backgroundColor = 'var(--VE)'
            bgc = 0
            break;
    }
}