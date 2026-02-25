(function () {
  var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

  function createParticle(x, y) {
    var particle = document.createElement("div");
    particle.className = "colorful-particle";
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = x + "px";
    particle.style.top = y + "px";

    // 【修改点 A】让粒子飞得更远 (把 200 改大，比如 400 或 500)
    var destinationX = (Math.random() - 0.5) * 400;
    var destinationY = (Math.random() - 0.5) * 400;

    particle.style.setProperty("--x", destinationX + "px");
    particle.style.setProperty("--y", destinationY + "px");

    document.body.appendChild(particle);

    setTimeout(function () {
      particle.remove();
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    // 【修改点 B】增加每次点击产生的粒子数量 (把 30 改成 40 或 50)
    for (var i = 0; i < 30; i++) {
      createParticle(e.clientX, e.clientY);
    }
  });
})();
