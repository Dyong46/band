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