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
// date-selector.js

document.addEventListener('DOMContentLoaded', () => {
  const dateBoxes = document.querySelectorAll('.date-box');

  dateBoxes.forEach(box => {
    box.addEventListener('click', () => {
      dateBoxes.forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
    });
  });
});

// showdatetoday
window.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('today-date').textContent =
    today.toLocaleDateString('en-US', options);
});

document.addEventListener('DOMContentLoaded', () => {
  const dateBoxes = document.querySelectorAll('.date-box');

  dateBoxes.forEach(box => {
    box.addEventListener('click', () => {
      dateBoxes.forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
    });
  });

  // ======= สร้างวันและวันที่ =======
  const daysShort = ['Sun.', 'Mon.', 'Tue.', 'Web.', 'Thu.', 'Fri.', 'Sut.'];
  const today = new Date();
  const datesContainer = document.getElementById('dates-container');

  for (let i = 0; i < 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayName = i === 0 ? 'Today' : daysShort[date.getDay()];
    const dayNumber = ('0' + date.getDate()).slice(-2);

    const dateBox = document.createElement('div');
    dateBox.classList.add('date-box');
    if (i === 0) dateBox.classList.add('today');

    dateBox.innerHTML = `${dayName}<br>${dayNumber}`;
    datesContainer.appendChild(dateBox);
  }

  // ใส่ event click อีกครั้งหลังจากเพิ่ม date-box
  const newBoxes = document.querySelectorAll('.date-box');
  newBoxes.forEach(box => {
    box.addEventListener('click', () => {
      newBoxes.forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
    });
  });
});

/// สำหรับวันที่
const dateBoxes = document.querySelectorAll('.date-box');
dateBoxes.forEach(box => {
  box.addEventListener('click', () => {
    dateBoxes.forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});

// สำหรับเวลาฉาย
const timeBoxes = document.querySelectorAll('.time-box');
timeBoxes.forEach(box => {
  box.addEventListener('click', () => {
    timeBoxes.forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});
