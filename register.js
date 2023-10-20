const inputNama = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const btnRegis = document.getElementById('btn-regis');

btnRegis.addEventListener('click', () => {
  const dataRegis = {
    name: inputNama.value,
    email: inputEmail.value,
    password: inputPass.value,
  };
  console.log(dataRegis);
  fetch('https://652c939fd0d1df5273ef7d20.mockapi.io/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataRegis),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      alert('Register Berhasil');
      window.location.href = 'login.html';
    });
});
