let list = document.getElementById('navList');
let icon = document.getElementById('hamburger').addEventListener('click', toggle = () => {

    if(list.style.display != 'flex'){
        list.style.display = 'flex';
    }else{
        list.style.display = 'none';
    }
})

list.addEventListener('click', hide = () => {
    list.style.display = 'none';
})