const skills = [
  {
    name: "IT Major.",
    icon: "assests/picc1.svg",
    image: "assests/picc1.png",
    content: "I'm learning web development and programming.",
    desc: `
      Check out my 
      <a href="https://example.com/seniors" target="_blank">awesome seniors</a> 
      and 
      <a href="https://github.com/Sontungneu/" target="_blank">projects</a>.
    `
  },

  {
    name: "Gaming Nerd.",
    icon: "assests/picc2.svg",
    image: "assests/picc2.png",
    content: "I like to play turn-based rpg and retro pixel style games.",
    desc: 'Some of my favourites are <a href="https://www.pokemon.com/">Pokemon</a>, <a href="https://store.steampowered.com/app/1229240/Chained_Echoes/">Chained Echoes</a>, <a href="https://en.wikipedia.org/wiki/Shin_Megami_Tensei:_Devil_Survivor_2">Shin Megami Tensei: Devil Survivors 2</a>'
  },

  {
    name: "Reading.",
    icon: "assests/picc3.svg",
    image: "assests/picc3.png",
    content: "My main interest is reading Chinese webnovel but I'm also trying out classic literature and sci-fi novels.",
    desc: '(Some of my favourites are Reverend Insanity by Gu Zhen Ren, Lord of The Mysteries by Cuttlefish That Loves Diving, The Three Body Problem by Liu Ci Xin...)'
  },

  {
    name: "Chess Player.",
    icon: "assests/picc4.svg",
    image: "assests/picc4.png",
    content: "I like to play chess as a hobby. Losing is just a part of the process as I treat my own defeat as stepping stones toward my glorious chess grandmaster future.",
    desc: 'Challenge me on <a href="https://www.chess.com/member/langtichthiennhai">my chess.com account</a>.'
  },

  {
    name: "Physical Activities.",
    icon: "assests/picc5.svg",
    image: "assests/picc5.png",
    content: "Cycling serves as both my primary mode of transport and my main sport.",
    desc: 'I also do Calisthenics and go swimming with my friends.'
  },

  {
    name: "Language.",
    icon: "assests/picc6.svg",
    image: "assests/picc6.png",
    content: "I have fluent English as my second language and curently picking up Chinese as my third.",
    desc: 'I like to listen to Chinese music as a way to learn, check out my recommend music list.'
  },

  {
    name: "Divination",
    icon: "assests/picc7.svg",
    image: "assests/picc7.png",
    content: "Though I am an atheist but I learn Tarot and I Ching to serve as fantastic icebreakers at parties and ",
    desc: 'You can learn Tarot for free at <a href="https://www.learntarot.com/">this webpage.</a>'
  },
];

let currentIndex = 0;

// DOM
const skillName = document.getElementById("skillName");
const skillIcon = document.getElementById("skillIcon");
const skillContent = document.getElementById("skillContent");
const skillDesc = document.getElementById("skillDesc");
const cardBg = document.getElementById("cardBg");
const aboutCard = document.getElementById("aboutCard");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ===== RENDER =====
function renderSkill(index) {
  const skill = skills[index];

  aboutCard.classList.add("fade-out");

  setTimeout(() => {
    skillName.textContent = skill.name;
    skillIcon.src = skill.icon;
    skillContent.textContent = skill.content;
    skillDesc.innerHTML = skill.desc;
    cardImage.src = skill.image;

    skillCount.textContent = `${index + 1}/${skills.length}`;

    aboutCard.classList.remove("fade-out");
  }, 200);
}

// BUTTONS
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + skills.length) % skills.length;
  renderSkill(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % skills.length;
  renderSkill(currentIndex);
});

// INIT
renderSkill(currentIndex);