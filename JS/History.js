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

document.addEventListener("DOMContentLoaded", function () {
  const qrImage = document.querySelector(".qr-img");
  const popup = document.getElementById("qr-popup");
  const closeBtn = document.querySelector(".close-popup");

  qrImage.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const copyIcons = document.querySelectorAll(".copy-icon");

  copyIcons.forEach(icon => {
    icon.addEventListener("click", function () {
      const textSpan = this.parentElement.querySelector(".copy-text");
      const value = textSpan?.textContent?.trim();

      if (value) {
        navigator.clipboard.writeText(value)
          .then(() => {
            // แสดงสถานะสำเร็จ (ใช้ alert หรือจะทำแบบ toast ก็ได้)
            alert(`Copied: ${value}`);
          })
          .catch(err => {
            console.error("Copy failed:", err);
          });
      }
    });
  });
});
