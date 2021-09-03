let list = document.getElementById('navList');
let icon = document.getElementById('hamburger').addEventListener('click', toggle = () => {

    if(list.style.display != 'flex'){
        list.style.display = 'flex';
    }else{
        list.style.display = 'none';
    }
})

let lpro = document.getElementById('lpro');
list.addEventListener('click', hide = () => {
    if(window.innerWidth <= 425){
        list.style.display = 'none';
        lpro.innerText="Projects";
    }else{
        list.style.display != 'flex';
    }
})
