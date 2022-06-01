let btn = document.querySelector(".otp");
let form = document.querySelector(".sign-form");
let otpScreen = document.querySelector(".otpScreen");
let closeModal = document.querySelector(".fa-solid");
let edit = document.querySelector(".EditNumber");
let RegisterNumber = document.querySelector(".registered-Number");
let otp1 = document.getElementById("otp1");
let otp2 = document.getElementById("otp2");
let otp3 = document.getElementById("otp3");
let otp4 = document.getElementById("otp4");
otp1.addEventListener("input", getOtp);
otp2.addEventListener("input", getOtp);
otp3.addEventListener("input", getOtp);
otp4.addEventListener("input", getOtp);
let OTP;
let value = true;
form.addEventListener("click", function (e) {
  e.preventDefault();
});
btn.addEventListener("click", showOtpScreen);
edit.addEventListener("click", updateNumber);
closeModal.addEventListener("click", showForm);
function showOtpScreen() {
  form.classList.add("hide");
  if (otpScreen.classList.contains("d-none")) {
    otpScreen.classList.remove("d-none");
  }
}
function showForm() {
  otpScreen.classList.add("d-none");
  form.classList.remove("hide");
}

function getOtp() {
  OTP = parseInt(otp1.value + otp2.value + otp3.value + otp4.value);
  console.log(OTP);
}
function updateNumber() {
  value = !value;
  if (value === false) {
    RegisterNumber.setAttribute("contenteditable", "true");
    edit.textContent = "save";
  } else {
    edit.textContent = "edit";
    RegisterNumber.removeAttribute("contenteditable");
  }
}
