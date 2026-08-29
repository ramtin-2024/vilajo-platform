// Sweet Alert start //
const swalWithPersianButtons = Swal.mixin({
    confirmButtonText: 'باشه',
    cancelButtonText: 'لغو'
})

$('#click_1').on('click', function () {
    swalWithPersianButtons.fire({
        title: 'هر کسی می‌تواند از یک کامپیوتر استفاده کند',
        customClass: {
            confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false
    })
})

$('#click_2').on('click', function () {
    swalWithPersianButtons.fire(
        'اینترنت؟',
        'هنوز هم هست؟',
        'question'
    )
})

$('#click_3').on('click', function () {
    swalWithPersianButtons.fire(
        'آفرین!',
        'شما روی دکمه کلیک کردید!',
        'success'
    )
})
$('#click_4').on('click', function () {
    swalWithPersianButtons.fire({
        position: 'top-end',
        icon: 'success',
        title: 'کار شما ذخیره شد',
        showConfirmButton: false,
        timer: 1500
    })
})
$('#click_5').on('click', function () {
    swalWithPersianButtons.fire({
        title: 'انیمیشن سفارشی با Animate.css',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })

})
$('#click_6').on('click', function () {
    swalWithPersianButtons.fire({
        title: "شیرین!",
        text: "مودال با یک تصویر سفارشی.",
        imageUrl: "../assets/images/blog/21.jpg",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "تصویر سفارشی"
    })
})
$('#click_7').on('click', function () {
    swalWithPersianButtons.fire({
        title: 'نام کاربری Github خود را وارد کنید',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'جستجو',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    swalWithPersianButtons.showValidationMessage(
                        `درخواست ناموفق بود: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !swalWithPersianButtons.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithPersianButtons.fire({
                title: `آواتار ${result.value.login}`,
                imageUrl: result.value.avatar_url
            })
        }
    })
})
$('#click_8').on('click', function () {
    swalWithPersianButtons.fire({
        title: 'چند سالتونه؟',
        icon: 'question',
        input: 'range',
        inputLabel: 'سن شما',
        inputAttributes: {
            min: 8,
            max: 120,
            step: 1
        },
        inputValue: 25
    })
})
$('#click_9').on('click', function () {
    let timerInterval
    swalWithPersianButtons.fire({
        title: 'هشدار خودکار بسته می‌شود!',
        html: 'من در <b></b> میلی‌ثانیه بسته خواهم شد.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            swalWithPersianButtons.showLoading()
            const b = swalWithPersianButtons.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = swalWithPersianButtons.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === swalWithPersianButtons.DismissReason.timer) {
            console.log('من توسط تایمر بسته شدم')
        }
    })
})
$('#click_10').on('click', function () {
    swalWithPersianButtons.fire({
        title: "<strong>خوش آمدید</strong>",
        html: `
  قالب مدیریتی Bootstrap 5 چندمنظوره، مدرن، واکنش‌گرا و تمیز را شروع کنید
  `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> عالی!
  `,
        confirmButtonAriaLabel: "عالی!",
        cancelButtonText: `
    <i class="fa fa-thumbs-down"></i>
  `,
        cancelButtonAriaLabel: "خوب نبود"
    })
})
$('#click_11').on('click', function () {
    swalWithPersianButtons.fire({
        title: 'مطمئنی؟',
        text: "شما قادر به برگرداندن این نخواهید بود!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله، حذفش کن!'
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithPersianButtons.fire(
                'حذف شد!',
                'فایل شما حذف شد.',
                'success'
            )
        }
    })
})
$('#click_12').on('click', function () {
    const swalWithBootstrapButtons = Swal.mixin({
        confirmButtonText: 'باشه',
        cancelButtonText: 'لغو',
        customClass: {
            confirmButton: 'btn btn-primary ms-2',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'مطمئنی؟',
        text: "شما قادر به برگرداندن این نخواهید بود!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله، حذفش کن!',
        cancelButtonText: 'نه، لغوش کن!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'حذف شد!',
                'فایل شما حذف شد.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'لغو شد',
                'فایل خیالی شما امن است :)',
                'error'
            )
        }
    })
})
$('#click_13').on('click', function () {
    swalWithPersianButtons.fire({
        title: 'شیرین!',
        text: 'عرض سفارشی، پدینگ، پس‌زمینه..',
    })
})
$('#click_14').on('click', function () {
    (async () => {

        const ipAPI = '//api.ipify.org?format=json'

        const inputValue = fetch(ipAPI)
            .then(response => response.json())
            .then(data => data.ip)

        const {
            value: ipAddress
        } = await Swal.fire({
            title: 'آدرس IP خود را وارد کنید',
            input: 'text',
            inputLabel: 'آدرس IP شما',
            inputValue: inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'باید چیزی وارد کنید!'
                }
            }
        })

        if (ipAddress) {
            Swal.fire(`آدرس IP شما ${ipAddress}`)
        }

    })()
})
$('#click_15').on('click', function () {
    swalWithPersianButtons.fire({
        icon: 'error',
        title: 'اوه...',
        text: 'مشکلی پیش آمده!',
        footer: '<a href="">چرا این مشکل برای من رخ داده است؟</a>'
    })
})
$('#click_16').on('click', function () {
    const Toast = swalWithPersianButtons.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'با موفقیت وارد شدید'
    })
})

// sweet alert end //