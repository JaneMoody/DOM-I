const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo

//<---  ALL IMG's  --->
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

//<---  HEADER NAV  ---->
let headerNav = document.querySelectorAll("nav a");

headerNav[0].textContent = siteContent["nav"]["nav-item-1"];
headerNav[1].textContent = siteContent["nav"]["nav-item-2"];
headerNav[2].textContent = siteContent["nav"]["nav-item-3"];
headerNav[3].textContent = siteContent["nav"]["nav-item-4"];
headerNav[4].textContent = siteContent["nav"]["nav-item-5"];
headerNav[5].textContent = siteContent["nav"]["nav-item-6"];

//<---  CTA H1 & BUTTON  --->
let ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent["cta"]["button"];

//<--- ALL FEATURE CONTENT --->
let featureH4 = document.querySelector(".text-content:nth-of-type(1) h4");
featureH4.innerText = siteContent["main-content"]["features-h4"];

let featureP = document.querySelector(".text-content:nth-of-type(1) p");
featureP.innerText = siteContent["main-content"]["features-content"];

//<--- ALL ABOUT CONTENT --->
let aboutH4 = document.querySelector(".text-content:nth-of-type(2) h4");
aboutH4.innerText = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelector(".text-content:nth-of-type(2) p");
aboutP.innerText = siteContent["main-content"]["about-content"];

//<--- ALL SERVICE CONTENT --->
let serviceH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) h4"
);
serviceH4.innerText = siteContent["main-content"]["services-h4"];

let serviceP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) p"
);
serviceP.innerText = siteContent["main-content"]["services-content"];

//<--- ALL PRODUCT CONTENT --->
let productH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
productH4.innerText = siteContent["main-content"]["product-h4"];

let productP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
productP.innerText = siteContent["main-content"]["product-content"];

//<--- ALL VISION CONTENT --->
let visionH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
visionH4.innerText = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);
visionP.innerText = siteContent["main-content"]["vision-content"];

//<--- CONTACT SECTION --->

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// <--- FOOTER --->

let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

//<--- TRYING TO CHANGE THE TEXT COLOR TO GREEN IN NAV --->

headerNav[0].style.color = "green";
headerNav[1].style.color = "green";
headerNav[2].style.color = "green";
headerNav[3].style.color = "green";
headerNav[4].style.color = "green";
headerNav[5].style.color = "green";

//<--- Adding 2 New links to nav & changed the text color to green --->

const newLink2 = document.createElement("a");
newLink2.textContent = "Other Link";
newLink2.href = "#";
document.querySelector("nav").prepend(newLink2);
newLink2.style.color = "green";

const newLink = document.createElement("a");
newLink.textContent = "New Link";
newLink.href = "#";
document.querySelector("nav").appendChild(newLink);
newLink.style.color = "green";
