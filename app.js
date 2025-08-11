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

let isModalOpen = false;
let contrast = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open");
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
}

function toggleContrast() {
    contrast = !contrast;
    if (contrast) {
        document.body.classList += " dark__theme";
    } else {
        document.body.classList.remove("dark__theme");
    }
    
}