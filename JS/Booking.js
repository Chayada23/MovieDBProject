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
  const mobileInput = document.getElementById("mobile");
  const emailInput = document.getElementById("email");
  const payBtn = document.getElementById("payBtn");

  // ✅ เพิ่ม div error ภายใต้ input
  const mobileWrapper = mobileInput.parentNode;
  const emailWrapper = emailInput.parentNode;

  const mobileWarning = document.createElement("div");
  const emailWarning = document.createElement("div");

  mobileWarning.classList.add("error-message");
  emailWarning.classList.add("error-message");

  mobileWrapper.appendChild(mobileWarning);
  emailWrapper.appendChild(emailWarning);

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  function updateButtonState() {
    const mobile = mobileInput.value.trim();
    const email = emailInput.value.trim();

    let valid = true;

  // Mobile validation
if (mobile.length > 0) {
  if (!isNumeric(mobile)) {
    mobileWarning.textContent = "Mobile number must contain only digits.";
    mobileInput.classList.add("error");
    valid = false;
  } else if (mobile.length !== 10) {
    mobileWarning.textContent = "Mobile number must be exactly 10 digits.";
    mobileInput.classList.add("error");
    valid = false;
  } else {
    mobileWarning.textContent = "";
    mobileInput.classList.remove("error");
  }
} else {
  mobileWarning.textContent = "";
  mobileInput.classList.remove("error");
  valid = false;
}

// Email validation
if (email.length > 0) {
  if (!email.includes("@")) {
    emailWarning.textContent = "Email must contain '@'.";
    emailInput.classList.add("error");
    valid = false;
  } else {
    emailWarning.textContent = "";
    emailInput.classList.remove("error");
  }
} else {
  emailWarning.textContent = "";
  emailInput.classList.remove("error");
  valid = false;
}


    // Enable or disable Pay button
    if (valid) {
      payBtn.disabled = false;
      payBtn.style.backgroundColor = "yellow";
      payBtn.style.color = "black";
      payBtn.style.cursor = "pointer";
    } else {
      payBtn.disabled = true;
      payBtn.style.backgroundColor = "#dcdcdc";
      payBtn.style.color = "#333";
      payBtn.style.cursor = "not-allowed";
    }
  }

  mobileInput.addEventListener("input", updateButtonState);
  emailInput.addEventListener("input", updateButtonState);

  payBtn.addEventListener("click", function () {
    window.location.href = "selectpay.html";
  });
});