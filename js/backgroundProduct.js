const colors = ['#B3B3B3', '#FAC031', '#B52323'];
const items = document.querySelectorAll('.List-categories_item');

items.forEach(item => {
    item.style.background = colors[Math.floor(Math.random() * colors.length)];
});