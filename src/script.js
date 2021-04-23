document.querySelectorAll('dt').forEach((dt) => dt.addEventListener("click", () => {
    console.log(document.querySelectorAll('dt'));
    if(dt.nextElementSibling.classList.contains('active')) {
        dt.nextElementSibling.classList.toggle('active');
        console.log(dt.nextElementSibling.classList);
    } else {
        document.querySelectorAll('dt').forEach((dt) => dt.nextElementSibling.classList.remove('active'));
        dt.nextElementSibling.classList.add('active');
        console.log('pytel');
    }
        
 
}));
