/** 2module Login-Script */
/**
* Membuat Variabel LoginFormElement untuk tampilan form.
* @constant (HTMLElement)
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel InputEmailElement untuk tampilan input email.
* @constant (HTMLElement)
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel InputPasswordElement untuk tampilan input password.
* @constant (HTMLElement)
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant (string)
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant (string)
*/
const expectedPassword = 'superpassword';

/* Comment: Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yang didapat saat button ditekan.
  * @constant (string)
  */
  const email = inputEmailElement.value;

  /**
  * Membuat variabel email untuk menyimpan nilai password yang didapat saat button ditekan.
  * @constant (string)
  */
  const password = inputPasswordElement.value;
  
  /* Comment: Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Commment : Jika sesuai maka program akan berpindah ke halaman home.  */
    goToHome();
    
  } else {
    /* Commment : Namun jika tidak sesuai maka program akan menampilkan informasi bahwa input salah.  */
    showPopUp();
  }
});
