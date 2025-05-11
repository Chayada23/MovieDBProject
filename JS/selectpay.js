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

document.addEventListener("DOMContentLoaded", function () {
  const paymentItems = document.querySelectorAll(".payment-item");
  const payBtn = document.querySelector(".pay-btn");

  paymentItems.forEach((item) => {
    item.addEventListener("click", () => {
      paymentItems.forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");

      payBtn.classList.add("enabled");
      payBtn.disabled = false;
    });
  });

  const navLinks = document.querySelectorAll(".nav-left a");
  const currentPage = window.location.pathname.split("/").pop(); // ได้ชื่อไฟล์ เช่น 'selectpay.html'

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // ✅ กดปุ่มเพื่อไปหน้า success.html
  payBtn.addEventListener("click", function () {
    if (payBtn.classList.contains("enabled")) {
      window.location.href = "paymentVerify.html";
    }
  });
});
