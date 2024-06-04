// full screen hamburger

function navSlide(){
  const nav=document.querySelector(".nav");
  const menu=document.querySelector(".nav-links");
  const burger=document.querySelector(".burger");

  burger.addEventListener("click", ()=>{
    menu.classList.toggle("nav-active");

    burger.classList.toggle("toggle")
  })
}

navSlide();


// reviews next and previous

const reviews = [
  {
    image: "./assests/user.png",
    name: "David J Karem",
    occupation: "Businessman",
    message:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
  },

  {
    image: "./assests/user1.jpg",
    name: "Emily Smith",
    occupation: "Designer",
    message:
      "I've been using this service for a while now and I must say it's fantastic! It's really helped streamline my workflow and improve collaboration with my team. Highly recommended!",
  },

  {
    image: "./assests/user.png",
    name: "Jacob",
    occupation: "Customer",
    message:
      "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much.",
  },
];

let currentReviewIndex = 0;
const reviewElement = document.getElementById("review");
const reviewContainer = document.querySelector(".review-container");

function displayReview() {
  const currentReview = reviews[currentReviewIndex];
  const reviewHtml = `
      <div class="user-name">
        <img src="${currentReview.image}" alt="user">
        
          <h4>${currentReview.name}</h4>
          <p>${currentReview.occupation}</p>

        <p>${currentReview.message}</p>
      </div>
    `;
  reviewElement.innerHTML = reviewHtml;
  reviewElement.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
}

function prevReview() {
  currentReviewIndex =
    (currentReviewIndex - 1 + reviews.length) % reviews.length;
  displayReview();
}

function nextReview() {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  displayReview();
//   reviewElement.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
  
}

displayReview();


// fetch images

document.addEventListener("DOMContentLoaded", function() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const imageContainer = document.getElementById("imageContainer");
  let startIndex = 0;

  loadMoreBtn.addEventListener("click", function() {
      fetch('https://fakestoreapi.com/products')
          .then( response => 
            response.json()
          )
          .then(data => {
              const slicedData = data.slice(startIndex, startIndex + 4);
              startIndex += 4;
              displayImages(slicedData);
          });
  });

  function displayImages(images) {
      images.forEach(image => {
          const imgElement = document.createElement("img");
          imgElement.src = image.image;
          imageContainer.appendChild(imgElement);
      });
  }

  loadMoreBtn.click();
});

