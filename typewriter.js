const messageEl = document.getElementById("typewriter");
const messages = [
  "Chúc bé iu của a có một sinh nhật thật vui vẻ 🎂",
  "Tuổi mới thật nhiều sức khỏe và thành công ✨",
  "Luôn luôn mỉm cười và tràn đầy năng lượng 💖",
  "Và đặc biệt là hãy đi tiếp con đường tiếp theo với a nhé",
  "I love you! 🎉"
];

let msgIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (msgIndex < messages.length) {
    if (charIndex < messages[msgIndex].length) {
      messageEl.innerHTML += messages[msgIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 80);
    } else {
      messageEl.innerHTML += "<br/>";
      msgIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 1000);
    }
  }
}

typeWriter();
