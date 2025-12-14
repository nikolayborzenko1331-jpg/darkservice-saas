function openForm() {
  document.getElementById("popup").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("popup").classList.add("hidden");
}

async function sendRequest() {
  const data = {
    name: name.value,
    phone: phone.value,
    device: device.value,
    problem: problem.value
  };

  const res = await fetch("/api/request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Заявка отправлена! Мы свяжемся с вами.");
    closeForm();
  } else {
    alert("Ошибка. Попробуйте позже.");
  }
}
