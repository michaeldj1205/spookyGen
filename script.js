const adjectives = [
  "Madilim na", "Sinumpang", "Mahiwagang", "Nakakakilabot na",
  "Mapanindig-balahibo", "Masamang", "Mapanlinlang na",
  "Balasubas na", "Mabangis na", "Malas na", "Nakatagong",
  "Kasuklam-suklam na", "Mabagsik na", "Mapanglaw na",
  "Misteryosong", "Makapangyarihang", "Nakakatindig-balahibo",
  "Dugong", "Halimaw na", "Mabangungot na"
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

const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const spookyName = document.getElementById("spookyName");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    spookyName.textContent = "👻 Pakilagay muna ang iyong pangalan!";
    copyBtn.classList.add("hidden");
    return;
  }

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const creature = creatures[Math.floor(Math.random() * creatures.length)];

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
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(spookyName.textContent);
  copyBtn.textContent = "Nakopya!";
  setTimeout(() => (copyBtn.textContent = "Kopyahin"), 1500);
});
