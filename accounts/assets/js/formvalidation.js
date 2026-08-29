//form validathion js

(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

$(function() {
  $("#form-validation").submit(function(event) {
    var userName = $("#userName").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var address = $("#address").val();
    var address2 = $("#address2").val();
    var city = $("#city").val();
    var zipCode = $("#zipCode").val();
    var userNameRegex = /^[A-Za-z0-9]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordRegex = /^.{1,8}$/;
    var addressRegex = /^[A-Za-z0-9\s,-]+/;
    var addressRegex2 = /^[A-Za-z0-9\s,-]+/;
    var cityRegex = /^[A-Za-z\s-]+/;
    var zipCodeRegex = /^\d{5}$/;
    var userNameError = $("#userNameError");
    var emailError = $("#emailError");
    var passwordError = $("#passwordError");
    var addressError = $("#addressError");
    var addressError2 = $("#addressError2");
    var cityError = $("#cityError");
    var zipCodeError = $("#zipCodeError");
    userNameError.text("");
    emailError.text("");
    passwordError.text("");
    addressError.text("");
    addressError2.text("");
    cityError.text("");
    zipCodeError.text("");
    if (!userNameRegex.test(userName)) {
      userNameError.text("نام کاربری نامعتبر است. لطفا از کاراکترهای الفبایی-عددی استفاده کنید..");
      event.preventDefault();
    }
    if (!emailRegex.test(email)) {
      emailError.text("ایمیل نامعتبر است. لطفا یک آدرس ایمیل معتبر وارد کنید..");
      event.preventDefault();
    }
    if (!passwordRegex.test(password)) {
      passwordError.text("رمز عبور نامعتبر است. باید حداکثر ۸ کاراکتر داشته باشد..");
      event.preventDefault();
    }
    if (!addressRegex.test(address)) {
      addressError.text("آدرس نامعتبر است. لطفا یک آدرس معتبر وارد کنید.");
      event.preventDefault();
    }
    if (!addressRegex2.test(address2)) {
      addressError2.text("آدرس نامعتبر است. لطفا یک آدرس معتبر وارد کنید.");
      event.preventDefault();
    }
    if (!cityRegex.test(city)) {
      cityError.text("شهر نامعتبر است. لطفا نام شهر را صحیح وارد کنید..");
      event.preventDefault();
    }
    if (!zipCodeRegex.test(zipCode)) {
      zipCodeError.text("کد پستی نامعتبر است. لطفا یک کد پستی ۵ رقمی وارد کنید..");
      event.preventDefault();
    }
  });
});