// Place your script.js content here
const banners = [
    { Image: "images/photo1.jpg", heading: "Welcome to Our Site", description: "Discover amazing content and features.", buttonText: "Learn More" },
    { Image: "images/photo2.jpg", heading: "Join Our Community", description: "Connect with like-minded individuals.", buttonText: "Join Now" },
    { Image: "images/photo3.jpg", heading: "Exclusive Offers", description: "Get the best deals and discounts.", buttonText: "Shop Now" },
    { Image: "images/photo4.jpg", heading: "Stay Updated", description: "Subscribe to our newsletter for the latest news.", buttonText: "Subscribe" }
];

const slidesContainer = document.getElementById('slides');

banners.forEach(banner => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.backgroundImage = `url('${banner.Image}')`;

    const content = document.createElement("div");
    content.className = "slide-content";

    content.innerHTML = `
        <h2>${banner.heading}</h2>
        <p>${banner.description}</p>
        <button>${banner.buttonText}</button>
    `;

    slide.appendChild(content);
    slidesContainer.appendChild(slide);
});

const totalSlides = banners.length;
let currentIndex = 0;

function updatesSlidesPosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updatesSlidesPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updatesSlidesPosition();
}

setInterval(nextSlide, 5000);

function likePost(button) {
    let countSpan = button.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    countSpan.textContent = count + 1;
}

function addComment(button) {
    let input = button.previousElementSibling;
    let comment = input.value.trim();
    if (comment !== "") {
        let ul = button.nextElementSibling;
        let li = document.createElement("li");
        li.textContent = comment;
        ul.appendChild(li);
        input.value = "";
    }
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    if (email === "" || password === "") {
        alert("Please fill all fields.");
        return false;
    }
    alert("Login Successful!");
    return true;
}

function validateSignup() {
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    alert("Signup Successful!");
    return true;
}

document.getElementById('searchBar')?.addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        let title = post.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
});
