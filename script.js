const adjectives = [
  "Chikiting", "Kalokohang", "Napasmile na", "Gwaping na", "Walang Tulog na",
  "Nakakatawang", "Barkadang", "Walang Kape na", "Feeling Hero", "Maalindog na",
  "Bonggang", "Nagmamagandang", "Kape-powered", "Sabaw na", "Mahiwagang",
  "Sinumpang (pero cute)", "Nanggigigil na", "Kwentong", "Palamunin na", "Malditang"
];

const creatures = [
  // Filipino Mythology
  "Aswang", "Manananggal", "Kapre", "White Lady", "Tiyanak",
  "Mangkukulam", "Nuno sa Punso", "Sigbin", "Engkanto", "Duwende",
  // Classic Horror but Funny
  "Chucky", "Valak", "Freddy Krueger", "Annabelle", "Pennywise",
  "Jason", "Ghostface", "Sadako", "Jigsaw", "The Nun",
  // Bonus Parody
  "Multo sa CR", "Tikbalang sa Jeep", "White Lady sa EDSA",
  "Aswang sa Kanto", "Batibat sa Boarding House", "Mangkukulam sa Tiktok",
  "Kapre sa Balete Drive", "Duwendeng may WiFi", "Engkantong Marites"
];

const funnyEmojis = ["😂", "😜", "👻", "🤪", "💅", "🧛‍♀️", "🎃", "😈", "👀", "🧙‍♀️"];

const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const spookyName = document.getElementById("spookyName");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    spookyName.textContent = "👻 Lagay mo muna pangalan mo, besh!";
    copyBtn.classList.add("hidden");
    return;
  }

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const creature = creatures[Math.floor(Math.random() * creatures.length)];
  const emoji = funnyEmojis[Math.floor(Math.random() * funnyEmojis.length)];

  const formats = [
    `${adj} ${creature} ni ${name} ${emoji}`,
    `Si ${name}, ang ${adj} ${creature} ${emoji}`,
    `${name} the ${adj} ${creature} ${emoji}`,
    `${emoji} ${adj} ${creature} vibes ni ${name}`,
    `Legendary ${adj} ${creature} ${emoji}`
  ];

  const result = formats[Math.floor(Math.random() * formats.length)];
  spookyName.textContent = result;
  copyBtn.classList.remove("hidden");
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(spookyName.textContent);
  copyBtn.textContent = "✅ Nakopya!";
  setTimeout(() => (copyBtn.textContent = "📋 Kopyahin"), 1500);
});
