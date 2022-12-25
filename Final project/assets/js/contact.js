let menu=document.querySelector('#a')
let sidebar=document.querySelector('#sidebar')

menu.addEventListener('click',()=>{
  sidebar.classList.toggle("active")
})