const adjectives = [
  "Madilim na", "Sinumpang", "Mahiwagang", "Nakakakilabot na",
  "Mapanindig-balahibo", "Masamang", "Mapanlinlang na", "Mabangis na",
  "Malas na", "Nakatagong", "Misteryosong", "Mabagsik na", "Dugong",
  "Halimaw na", "Mapanglaw na", "Nakakatindig-balahibo", "Makapangyarihang"
];

const creatures = [
  // Filipino Mythology
  "Aswang", "Manananggal", "Tikbalang", "Kapre", "White Lady",
  "Tiyanak", "Mangkukulam", "Nuno sa Punso", "Sigbin", "Duwende",
  "Multo", "Engkanto", "Batibat", "Mambabarang", "Santelmo",
  "Busaw", "Anito", "Tiktik", "Berbalang", "Manananggal ng Samar",
  "Kapre ng Balete", "White Lady ng EDSA", "Aswang ng Visayas",
  // Horror Figures
  "Chucky", "Valak", "Freddy Krueger", "Annabelle", "Pennywise",
  "Jason Voorhees", "Michael Myers", "Ghostface", "Samara", "Regan",
  "La Llorona", "Kayako", "Sadako", "The Nun", "Leatherface",
  "Jigsaw", "Candyman", "Jeepers Creeper", "Slenderman", "Baba Yaga"
];

const backgrounds = [
  "url('https://images.unsplash.com/photo-1603032455121-29c7d9f08a0f?auto=format&fit=crop&w=1500&q=80')",
  "url('https://images.unsplash.com/photo-1601575912237-8c8953d2dfc9?auto=format&fit=crop&w=1500&q=80')",
  "url('https://images.unsplash.com/photo-1603228253600-4a19a2e82d1a?auto=format&fit=crop&w=1500&q=80')",
  "url('https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1500&q=80')",
  "url('https://images.unsplash.com/photo-1508193638397-1c09e71315c9?auto=format&fit=crop&w=1500&q=80')",
  "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1500&q=80')"
];

const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const spookyName = document.getElementById("spookyName");
const copyBtn = document.getElementById("copyBtn");
const body = document.body;

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    spookyName.textContent = "👻 Pakilagay muna ang iyong pangalan!";
    copyBtn.classList.add("hidden");
    return;
  }

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const creature = creatures[Math.floor(Math.random() * creatures.length)];
  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  const formats = [
    `${adj} ${creature} ni ${name}`,
    `${name}, ang ${adj} ${creature}`,
    `${creature} ng dilim, si ${name}`,
    `Si ${name}, ang ${adj} ${creature}`,
    `${adj} ${creature} mula sa kailaliman`
  ];

  const result = formats[Math.floor(Math.random() * formats.length)];
  spookyName.textContent = result;
  copyBtn.classList.remove("hidden");

  // Change background randomly
  body.style.backgroundImage = bg;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(spookyName.textContent);
  copyBtn.textContent = "Nakopya!";
  setTimeout(() => (copyBtn.textContent = "Kopyahin"), 1500);
});
