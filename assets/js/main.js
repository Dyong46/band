const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
// Ham hien thi modal  mua ve(Them class open vao modal)
function showBuyTicket() {
    modal.classList.add('open');
}
// Ham an modal  mua ve(Bo class open cua modal)
function hideBuyTicket(){
    modal.classList.remove('open');
}
// Lap qua tung the btn va nghe hanh vi click
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket);
}
// Nghe hanh vi click vao nut btn
modalClose.addEventListener('click', hideBuyTicket);
// An Model khi lick ra ben ngoai container
modal.addEventListener('click', hideBuyTicket);
// Ngung viec noi bot tu thang container
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
// Dong mo moblie menu
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if(isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}
// Tu dong dong khi chon menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"');

for(const menuItem of menuItems){
    menuItem.addEventListener('click', function(event) {
    console.log(this);
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) event.preventDefault();
        else header.style.height = null;
    })
}
