    // Получаем ссылку и блок меню
    const mobileMenuLink = document.querySelector(".mobileMenu");
    const menuBlock = document.getElementById("menuBlock");
    const crestMobile = document.querySelector(".crest_mobile");

    // Добавляем обработчик события клика на ссылку
    mobileMenuLink.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      menuBlock.classList.toggle("visible"); // Переключаем класс для изменения видимости блока меню
    });

    // Добавляем обработчик события клика на элемент с классом "crest_mobile"
    crestMobile.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      if (menuBlock.classList.contains("visible")) {
        menuBlock.classList.remove("visible"); // Если блок видимый, удаляем класс "visible"
      }
    });