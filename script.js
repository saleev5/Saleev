
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Мобильное меню
menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

// Закрываем меню после перехода по ссылке
navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// Автоматический год
document.getElementById("year").textContent = new Date().getFullYear();
