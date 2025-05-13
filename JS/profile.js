/* 
  ฟังก์ชัน toggleMenu()
  ใช้เปิด/ปิดเมนูโปรไฟล์เมื่อคลิกที่ไอคอน
*/
function toggleMenu() {
  const menu = document.getElementById("profile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleMenu() {
  const menu = document.getElementById("profile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

window.addEventListener("click", function(e) {
  const menu = document.getElementById("profile-menu");
  const icon = document.querySelector(".logout-icon");

  if (!icon.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// เปิด-ปิด dropdown
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-options');
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll(".nav-left a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});