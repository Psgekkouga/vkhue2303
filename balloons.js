const colors = ["#ff4e50", "#fc913a", "#f9d423", "#eae374", "#e1f5c4"];
const balloonsContainer = document.getElementById("balloons-container");

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.animationDuration = `${6 + Math.random() * 4}s`;
  balloonsContainer.appendChild(balloon);

  setTimeout(() => {
    balloonsContainer.removeChild(balloon);
  }, 10000);
}

setInterval(createBalloon, 500);
