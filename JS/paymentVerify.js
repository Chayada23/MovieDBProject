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
  const phoneInput = document.getElementById("phone");
  const otpInput = document.getElementById("otp");
  const sendCodeBtn = document.getElementById("sendCodeBtn");
  const payBtn = document.querySelector(".pay-btn");

  // ✅ Create warning elements
  const phoneWarning = document.createElement("div");
  const otpWarning = document.createElement("div");

  phoneWarning.style.color = "red";
  phoneWarning.style.fontSize = "0.8vw";
  otpWarning.style.color = "red";
  otpWarning.style.fontSize = "0.8vw";

  phoneInput.parentNode.appendChild(phoneWarning);
  otpInput.parentNode.appendChild(otpWarning);

  // ✅ Utility to check numbers only
  function isNumeric(str) {
    return /^\d+$/.test(str);
  }

  // ✅ Update Pay Now button status
  function updatePayButtonState() {
    const phone = phoneInput.value.trim();
    const otp = otpInput.value.trim();

    const isPhoneValid = phone.length === 10 && isNumeric(phone);
    const isOtpValid = otp.length === 6 && isNumeric(otp);

    if (!isNumeric(phone) && phone.length > 0) {
      phoneWarning.textContent = "Phone number must contain only digits.";
      phoneInput.classList.add("error");
    } else if (phone.length !== 10 && phone.length > 0) {
      phoneWarning.textContent = "Phone number must be exactly 10 digits.";
      phoneInput.classList.add("error");
    } else {
     phoneWarning.textContent = "";
    phoneInput.classList.remove("error");
    }


    if (!isNumeric(otp) && otp.length > 0) {
      otpWarning.textContent = "OTP must contain only digits.";
      otpInput.classList.add("error");
    } else if (otp.length !== 6 && otp.length > 0) {
      otpWarning.textContent = "OTP must be exactly 6 digits.";
      otpInput.classList.add("error");
    } else {
      otpWarning.textContent = "";
      otpInput.classList.remove("error");
    }


    if (isPhoneValid && isOtpValid) {
      payBtn.disabled = false;
      payBtn.style.backgroundColor = "#fbd233";
      payBtn.style.color = "black";
      payBtn.style.cursor = "pointer";
    } else {
      payBtn.disabled = true;
      payBtn.style.backgroundColor = "#dcdcdc";
      payBtn.style.color = "#333";
      payBtn.style.cursor = "not-allowed";
    }
  }

  // ✅ Phone input listener
  phoneInput.addEventListener("input", () => {
    const phone = phoneInput.value.trim();
    const isValidPhone = phone.length === 10 && isNumeric(phone);

    sendCodeBtn.disabled = !isValidPhone;
    sendCodeBtn.classList.toggle("enabled", isValidPhone);
    sendCodeBtn.style.cursor = isValidPhone ? "pointer" : "not-allowed";

    updatePayButtonState();
  });

  // ✅ Send code click
  sendCodeBtn.addEventListener("click", () => {
    otpInput.disabled = false;
    otpInput.focus();
  });

  // ✅ OTP input listener
  otpInput.addEventListener("input", () => {
    updatePayButtonState();
  });

  // ✅ PAY button click => show popup
  payBtn.addEventListener("click", function () {
    const popup = document.getElementById("successPopup");
    if (!this.disabled && popup) {
      popup.style.display = "flex";
    }
  });

  // ✅ Highlight current navbar link
  const navLinks = document.querySelectorAll(".nav-left a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
