let checkboxes = document.querySelectorAll('.checkboxes__checkbox');
let progress = document.getElementById('progress');
let number = document.querySelector('.js-number');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let checkedCount = document.querySelectorAll('.checkboxes__checkbox:checked').length;
        let progressPercentage = (checkedCount / checkboxes.length) * 100;
        progress.setAttribute('stroke-dasharray', `${progressPercentage}, 100`);
        number.textContent = checkedCount;
        console.log(checkedCount)
    });
});
let button = document.querySelector('.checkList__btn');
let checkboxesBox = document.querySelector('.checkboxes');

button.addEventListener('click', () => {
    checkboxesBox.classList.toggle('checkboxes-active');
})