document.addEventListener("DOMContentLoaded", function() {
    const btnImgs = document.querySelectorAll(".btnContainer .btnImg");

    btnImgs.forEach(btnImg => {
        btnImg.addEventListener("click", function() {
            // Удалите класс 'active' у всех кнопок
            btnImgs.forEach(btn => {
                btn.parentElement.classList.remove("active");
            });
            // Добавьте класс 'active' только для текущей кнопки
            btnImg.parentElement.classList.add("active");
        });
    });
});
