const toggleBar = document.querySelector('.icon');
const showDropdown = document.querySelector('#mobile-dropdown');
const dropdowns = document.querySelectorAll('.dropdown');
const heroText = document.querySelector('.hero-text')
toggleBar.addEventListener('click', ()=>{
    showDropdown.classList.toggle('show-dropdown');
    toggleBar.classList.toggle('show-icon');
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
