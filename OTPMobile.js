let FomrMobile = document.querySelector(".sign-form-mobile");
let OtpMobileBtn = document.querySelector(".otpMobile");
let MobileForm = document.querySelector(".sign-form-mobile");
let OtpScreenMobile = document.querySelector(".otpScreen-Mobile");
let closeMobileModal = document.querySelector(".close");
let editMobile = document.querySelector(".Edit-mobile");
let RegisterNumberMobile = document.querySelector(".registered-Number-mobile");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let val3 = document.getElementById("val3");
let val4 = document.getElementById("val4");
let otp;
let val = true;
val1.addEventListener("input", getValue);
val2.addEventListener("input", getValue);
val3.addEventListener("input", getValue);
val4.addEventListener("input", getValue);
OtpMobileBtn.addEventListener("click", ShowOtpMobileScreen);
closeMobileModal.addEventListener("click", closeOtpMobileScreen);
FomrMobile.addEventListener("click", function (e) {
  e.preventDefault();
});
editMobile.addEventListener("click", updateNum);
function ShowOtpMobileScreen() {
  MobileForm.classList.add("hide");
  if (OtpScreenMobile.classList.contains("d-none")) {
    OtpScreenMobile.classList.remove("d-none");
  }
}
function closeOtpMobileScreen() {
  OtpScreenMobile.classList.add("d-none");
  MobileForm.classList.remove("hide");
}
function getValue() {
  otp = parseInt(val1.value + val2.value + val3.value + val4.value);
  console.log(otp);
}
function updateNum() {
  val = !val;
  if (val === false) {
    RegisterNumberMobile.setAttribute("contenteditable", "true");
    editMobile.textContent = "save";
  } else {
    editMobile.textContent = "edit";
    RegisterNumberMobile.removeAttribute("contenteditable");
  }
}
