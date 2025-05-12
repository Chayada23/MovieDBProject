document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('today-date').textContent =
    today.toLocaleDateString('en-US', options);

  // Event สำหรับเลือก date-box
  const dateBoxes = document.querySelectorAll('.date-box');
  dateBoxes.forEach(box => {
    box.addEventListener('click', () => {
      dateBoxes.forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
    });
  });
});

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

document.querySelector('.showtime-btn').addEventListener('click', function() {
    window.location.href = 'showtime1.html';
  });