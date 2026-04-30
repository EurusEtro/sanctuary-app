const modal = document.getElementById("medicine-modal");
const closeBtn = document.querySelector(".close-button");
const checkboxes = document.querySelectorAll('.check-list input[type="checkbox"]');

// 1. Функция загрузки состояния из памяти
function loadVitamins() {
    checkboxes.forEach(box => {
        const savedStatus = localStorage.getItem(box.id);
        box.checked = savedStatus === 'true';
    });
}

// 2. Сохранение при каждом клике на галочку
checkboxes.forEach(box => {
    box.addEventListener('change', () => {
        localStorage.setItem(box.id, box.checked);
    });
});

// Открытие окна при клике на флакон
document.getElementById('medicine').addEventListener('click', () => {
    modal.style.display = "block";
});

// Закрытие
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// Инициализация памяти при загрузке страницы
loadVitamins();

// Заглушки для остальных кнопок
document.getElementById('tea-cup').addEventListener('click', () => alert('Энергия: +1 ложка'));
document.getElementById('water').addEventListener('click', () => alert('Вода: +250мл'));
document.getElementById('museum-gate').addEventListener('click', () => alert('Путь в Музей пока в тумане...'));
document.getElementById('journal').addEventListener('click', () => alert('Дневник ждет твоих мыслей...'));