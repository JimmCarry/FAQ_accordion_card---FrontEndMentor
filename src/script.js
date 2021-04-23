//console.log(document.querySelectorAll('.accordion li'));

document.querySelectorAll('.accordion li').forEach((li) => li.addEventListener("click", () => {
    //console.log(document.querySelectorAll('li'));
    if(li.classList.contains('active')) {
        
        li.classList.toggle('active');
        //console.log(li.classList);
    } else {
        document.querySelectorAll('.accordion li').forEach((li) => li.classList.remove('active'));
        li.classList.add('active');
    //    console.log('pytel');
    }
        
 
}));
