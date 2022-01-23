const bgImg = `bgImg (${Math.floor(Math.random() * 11) + 1}).jpg`;
const bgImgTag = document.createElement("img");
bgImgTag.src = `img/${bgImg}`;
document.body.appendChild(bgImgTag);
