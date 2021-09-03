let list = document.getElementById('navList');
let icon = document.getElementById('hamburger').addEventListener('click', toggle = () => {

    if(list.style.display != 'flex'){
        list.style.display = 'flex';
    }else{
        list.style.display = 'none';
    }
})

list.childNodes.addEventListener('click', hide = () => {
    if(list.style.flexDirection == 'column'){
        list.style.display = 'none';
    }else{
        list.style.display != 'none';
    }
})
