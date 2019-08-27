
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


function dogLinkCreator() {
  let names = Object.keys(dogs);
  const dogLinkArr = [];
  names.forEach((name) => {
    let aTag = document.createElement('a');
    aTag.innerHTML = name;
    aTag.setAttribute("href", dogs[name]);
    let liTag = document.createElement('li');
    liTag.classList.add('dog-link');
    liTag.append(aTag);
    dogLinkArr.push(liTag);
  });

  return dogLinkArr;
}

export const attachDogLinks = function() {
  let dogLinks = dogLinkCreator();
  let ulTag = document.querySelector('.drop-down-dog-list');
  ulTag.style.display = 'none';
  dogLinks.forEach((li) => {
    ulTag.append(li);
  });
};

attachDogLinks();

let dogLinkLi = document.querySelectorAll(".drop-down-dog-list");
let dogLinkNav = document.querySelector(".drop-down-dog-nav")

function handleEnter() {
  dogLinkLi.forEach((el) => {
    el.style.display = 'block';
  });
}

function handleLeave() {
  dogLinkLi.forEach((el) => {
    el.style.display = 'none';
  });
}

dogLinkNav.addEventListener("mouseenter", handleEnter);

dogLinkNav.addEventListener("mouseleave", handleLeave);




