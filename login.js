// 1. tangkap semua input dibungkus dalam 1 variabel
// 2. lakukan fetch tampungan respon dari fetch pada variabel
// 3. bandingkan dengan method find

const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const btnLogin = document.getElementById('btn-login');
let users = '';

btnLogin.addEventListener('click', () => {
  const dataLogin = {
    email: inputEmail.value,
    password: inputPass.value,
  };

  fetch('https://652c939fd0d1df5273ef7d20.mockapi.io/user')
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      users = data.find((user) => user.email === dataLogin.email);

      if (users) {
        if (users.password === dataLogin.password) {
          alert('Login berhasil, ' + users.name);
          window.location.href = 'index.html';
        } else {
          alert('Password salah');
        }
      } else {
        alert('Pengguna tidak ditemukan');
      }
    });
});
