// เปิด/ปิดเมนูโปรไฟล์
function toggleMenu() {
  const menu = document.getElementById("profile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// ซ่อนเมนูเมื่อคลิกนอกไอคอน
window.addEventListener("click", function (e) {
  const menu = document.getElementById("profile-menu");
  const avatar = document.querySelector(".avatar");
  if (!avatar.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

const seatsContainer = document.getElementById('seats-grid');
const selectedSeat = document.getElementById('selected-seat');
const totalPrice = document.getElementById('total-price');
const buyBtn = document.getElementById('buyBtn');

const rows = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
const cols = 14;

const bookedSeats = ['E11', 'E12', 'E13', 'E14']; // ที่นั่งจอง

const seatType = row => (row === 'A' || row === 'B') ? 'honeymoon' : 'normal';

rows.forEach(row => {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';

  const leftLabel = document.createElement('div');
  leftLabel.className = 'row-label-left';
  leftLabel.textContent = row;
  rowDiv.appendChild(leftLabel);

  for (let i = 1; i <= cols; i++) {
    const seatId = row + i;
    const seat = document.createElement('div');
    seat.className = `seat ${seatType(row)}`;
    seat.dataset.id = seatId;

    if (bookedSeats.includes(seatId)) {
      seat.classList.add('booked');
    }

    seat.addEventListener('click', () => {
      if (seat.classList.contains('booked')) return;
      seat.classList.toggle('selected');

      const selectedSeats = document.querySelectorAll('.seat.selected');
      const seatIds = Array.from(selectedSeats).map(s => s.dataset.id);

      // ✅ แสดงแต่ละที่นั่งใน span
      selectedSeat.innerHTML = seatIds.map(id => `<span>${id}</span>`).join('');

      let total = 0;
      selectedSeats.forEach(s => {
        total += s.classList.contains('honeymoon') ? 260 : 240;
      });
      totalPrice.textContent = `${total} THB`;

      buyBtn.disabled = seatIds.length === 0;
      buyBtn.classList.toggle('enabled', seatIds.length > 0);
    });

    rowDiv.appendChild(seat);
  }

  const rightLabel = document.createElement('div');
  rightLabel.className = 'row-label-right';
  rightLabel.textContent = row;
  rowDiv.appendChild(rightLabel);

  seatsContainer.appendChild(rowDiv);
});

buyBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  if (selectedSeats.length > 0) {
    window.location.href = 'Booking1.html';
  }
});
