const modal = document.querySelector('.modal');
const btnsBuy = document.querySelectorAll('.products-item__button');
const btnClose = document.querySelector('.order-form__button-close');
const btnBuy = document.querySelector('.order-form__button-buy');
const colors = {
    white: 'Белый',
    black: 'Чёрный',
    green: 'Зелёный',
    blue: 'Синий',
    red: 'Красный',
};

function openModal() {
    modal.classList.remove('modal--hidden');
    modal.classList.add('modal--visible');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    modal.classList.remove('modal--visible');
    modal.classList.add('modal--hidden');
    document.body.style.overflow = '';
};

btnsBuy.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
    });
});

btnClose.addEventListener('click', function () {
    closeModal();
});

function serializeForm(formNode) {
    return new FormData(formNode);
}

function handleFormSubmit(e) {
    e.preventDefault();
    closeModal();
    const data = serializeForm(orderForm);
    const amountOfGoods = data.get('amount');
    const selectedColor = colors[data.get('color')];
    const thanksModalText = `Спасибо за покупку! Количество товаров: ${amountOfGoods}, Цвет: ${selectedColor}`;
    alert(thanksModalText);
    orderForm.reset();
}

const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', handleFormSubmit);
