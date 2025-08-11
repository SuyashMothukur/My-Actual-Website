// template_f2n6g7x
// service_8utg3ay
// hZ-idLSVfN7yGhiih

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs.sendForm(
        'service_8utg3ay',
        'template_f2n6g7x',
        event.target,
        'hZ-idLSVfN7yGhiih'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("Email service is temporarily unavailable. Please contact me directly at suyash.ankam@gmail.com")
    })
}