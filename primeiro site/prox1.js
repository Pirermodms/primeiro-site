var menuitem = document.querySelectorAll('.item-menu')

function selectlink(){
menuitem.forEach((item)=> 
item.classList.remove('ativo')
)
this.classList.add('ativo')
}

menuitem.forEach((item)=>
item.addEventListener('click', selectlink)
)

 var expmenu = document.querySelector('#expmenu')
 var sidemenu = document.querySelector('.menu-lateral')
expmenu.addEventListener('click',function(){
sidemenu.classList.toggle('expand')
})



























