const output = document.querySelector(`output`);
const modal = document.querySelector(`#myModal`);
const btns = document.querySelectorAll(`.buy`);
const cls = document.querySelector(`.close`)
const nameProd = document.querySelector(`#name_prod`)

btns.forEach(btn => btn.addEventListener(`click`, function(e){
 modal.style.display = `block`; //открытие модального окна

       output.textContent = e.path[2].childNodes[3].childNodes[1].textContent; // выводим на модальное окно наименование того товара, который выбрал покупатель (да это можно сделать аккуратнее, но на этом пока не стал заострять внимание)
       nameProd.value = e.path[2].childNodes[3].childNodes[1].textContent; //добавляем в значение input формы наименование выбранного товара (для отправки по почте)
}));
cls.addEventListener(`click`, () => modal.style.display = `none`); //закрываем модальное окно при нажатии на x
window.addEventListener(`click`, function (e) { //закрываем модальное окно при клике на пустое место вне модального окна
    if (e.target == modal) {
        modal.style.display = "none";        
    }
});
