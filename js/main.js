const form = document.getElementById("form");
const email = document.getElementById("email");
const pws = document.getElementById("pws");
const pwsagain = document.getElementById("pwsagain");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ValidForm();
});

const ValidForm = () => {
  const emailData = email.value.trim();
  const pwsData = pws.value.trim();
  const pwsagainData = pwsagain.value.trim();

  if (emailData === "") {
    setError(email, "กรุณาป้อน Email ด้วย!!!");
    email.focus();
  } else {
    setSuccess(email);
  }

  if (pwsData === "") {
    setError(pws, "กรุณาป้อนรหัส Password ด้วย!!!");
    pws.focus();
  } else if (pwsData.length < 12) {
    setError(pws, "รหัสต้องมีตัวอักษร 12 ตัวขึ้นไป");
    pws.focus();
  } else {
    setSuccess(pws);
  }

  if (pwsagainData === "") {
    setError(pwsagain, "กรุณาป้อนรหัส Password อีกครั้งด้วย");
    pwsagain.focus();
  } else if (pwsagainData !== pwsData) {
    setError(pwsagain, "คุณป้อนรหัส Password ไม่เหมือนกัน!!!");
    pwsagain.focus();
  } else if (pwsagainData.length < 12) {
    setError(pwsagain, "รหัสยืนยันต้องมีตัวอักษร 12 ตัวขึ้นไป");
  } else {
    setSuccess(pwsagain);
  }
};

const setSuccess = (element) => {
  const ele = element.parentElement;
  const txt = ele.querySelector(".error");

  txt.innerText = "";
  ele.classList.add("success");
  ele.classList.remove("error");
};

const setError = (element, message) => {
  const ele = element.parentElement;
  const txt = ele.querySelector(".error");

  txt.innerText = message;
  ele.classList.add("error");
  ele.classList.remove("success");
};
