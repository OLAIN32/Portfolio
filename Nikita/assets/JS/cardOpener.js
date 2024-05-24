document.addEventListener("DOMContentLoaded", function() {
    const userDivs = document.querySelectorAll(".user");
    const selectedUsers = document.querySelectorAll(".selectedUser");
  
    // Показываем информацию о первом пользователе по умолчанию
    selectedUsers[0].style.display = "flex";
  
    userDivs.forEach((userDiv, index) => {
      userDiv.addEventListener("click", function() {
        const activeUser = document.querySelector(".active-user");
        if (activeUser) {
          activeUser.classList.remove("active-user");
        }
        userDiv.classList.add("active-user");
  
        selectedUsers.forEach(selectedUser => {
          selectedUser.style.display = "none";
        });
        selectedUsers[index].style.display = "flex";
      });
    });
  });
  