document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('today-date').textContent = today.toLocaleDateString('en-US', options);

  const daysShort = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  const datesContainer = document.getElementById('dates-container');
  const cinemaInfo = document.getElementById('cinema-info');

  // ✅ สร้าง date-box อัตโนมัติ 6 วันถัดไป
  for (let i = 0; i < 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayName = i === 0 ? 'Today' : daysShort[date.getDay()];
    const dayNumber = ('0' + date.getDate()).slice(-2);

    const dateBox = document.createElement('div');
    dateBox.classList.add('date-box');
    dateBox.innerHTML = `${dayName}<br>${dayNumber}`;
    datesContainer.appendChild(dateBox);
  }

  // ✅ Event เมื่อคลิก date-box → เปลี่ยนสี + แสดงโรงหนัง
  const dateBoxes = document.querySelectorAll('.date-box');
  dateBoxes.forEach(box => {
    box.addEventListener('click', () => {
      dateBoxes.forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');

      // ✅ แสดง .cinema-info ด้วย Flex Layout
      cinemaInfo.style.display = 'flex';
    });
  });
});

// ✅ Toggle menu dropdown
function toggleMenu() {
  const menu = document.getElementById("profile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// ✅ ปิด dropdown เมื่อคลิกนอกเมนู
window.addEventListener("click", function (e) {
  const menu = document.getElementById("profile-menu");
  const icon = document.querySelector(".logout-icon");

  if (!icon.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// (ถ้ามี dropdown อื่น)
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-options');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const timeButtons = document.querySelectorAll('.time-box');

  timeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // ลบ .selected จากทุกปุ่มก่อน
      timeButtons.forEach(btn => btn.classList.remove('selected'));

      // ใส่ .selected ให้ปุ่มที่คลิก
      button.classList.add('selected');

      // หน่วง 500ms (0.5 วินาที) ก่อนเปลี่ยนหน้า
      setTimeout(() => {
        window.location.href = 'selectseat.html';
      }, 200);
    });
  });
});
