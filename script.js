console.log("Script Running....")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.hamburger').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.cross').style.display = 'none'
        setTimeout(()=> {
            document.querySelector('.hamburger').style.display = 'inline'
        }, 400);
        
    }
})