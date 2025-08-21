function calculateAge() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (!day || !month||!year) {
    document.getElementById("result").innerText = "فضلاً أدخل تاريخ الميلاد كامل.";
    return;
  }

  let today = new Date();
  let birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();

  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("result").innerText = "عمرك: " + age + " سنة 🎉";
}