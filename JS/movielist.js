/* 
  ฟังก์ชัน toggleMenu()
  ใช้เปิด/ปิดเมนูโปรไฟล์เมื่อคลิกที่ไอคอน
*/

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

// กรองหนังตามหมวด
function filterMovies(category) {
  const movieCards = document.querySelectorAll('.movie-card');
  movieCards.forEach(card => {
    const movieCategories = card.getAttribute('data-category').split(', ');
    card.style.display = movieCategories.includes(category) ? 'block' : 'none';
  });
}

// เมื่อคลิกที่หมวดหมู่
function toggleCategory(element) {
  const categoryName = element.getAttribute('data-category');
  filterMovies(categoryName); // แสดงเฉพาะหนังที่ตรงหมวด

  // อัปเดตข้อความใน dropdown เป็นชื่อหมวดที่เลือก
  const dropdownBtn = document.querySelector('.category-dropdown');
  dropdownBtn.textContent = categoryName;

  // ซ่อนเมนู dropdown
  const dropdown = document.getElementById('dropdown-options');
  dropdown.style.display = 'none';
}


// ปิด dropdown เมื่อคลิกนอก
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('dropdown-options');
  const categoryDropdown = document.querySelector('.category-dropdown');
  if (!categoryDropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

// โหลดหน้าเว็บแล้วซ่อนหนังทั้งหมด
window.onload = function () {
  document.querySelectorAll('.movie-card').forEach(card => {
    card.style.display = 'none';
  });
};

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});


