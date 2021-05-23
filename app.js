const toggleBar = document.querySelector('.toggle');
// const button = document.querySelector('.nav-toggle button');
// const image = button.firstElementChild;
const showDropdown = document.querySelector('#mobile-dropdown');
const dropdowns = document.querySelectorAll('.dropdown');


toggleBar.addEventListener('click', ()=>{
    showDropdown.classList.toggle('show-dropdown');
})

dropdowns.forEach((dropdown) =>{
 const btn = dropdown.querySelector('.angle');
 const child = dropdown.lastElementChild;
 btn.addEventListener('click', function(){
    dropdowns.forEach(function(item){
       if(item.lastElementChild!==child) {
           item.lastElementChild.classList.remove('show-content');
       }
    });
    child.classList.toggle('show-content');
   
 });
});