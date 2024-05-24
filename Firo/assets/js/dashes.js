function addDashes() {
    var paragraph = document.getElementsByClassName(".desc");
    var text = paragraph.textContent;
    var lines = text.split("\n");
    var dashedText = lines.map(function(line) {
        return "- " + line;
    }).join("\n");
    paragraph.textContent = dashedText;
}

// Вызываем функцию addDashes() для добавления дефисов к тексту при загрузке страницы
addDashes();