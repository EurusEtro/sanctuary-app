const actions = {
    'tea-cup': 'Чашка чая: Энергия восстанавливается. +1 ложка!',
    'medicine': 'Флакон: Витамины и травы приняты. Состояние стабильное.',
    'water': 'Стакан воды: Гидратация +250мл. Чистота сознания.',
    'journal': 'Блокнот: Открываю записи Архитектора...',
    'museum-gate': 'Лунная Арка: Переход во внутренний двор Музея...'
};

Object.keys(actions).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', () => {
            alert(actions[id]);
        });
    }
});