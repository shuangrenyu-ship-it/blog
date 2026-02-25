(function () {
  var canvas = document.getElementById("amegakure-rain");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var w = (canvas.width = window.innerWidth);
  var h = (canvas.height = window.innerHeight);
  var raindrops = [];

  // 🎛️ 1. 密度改小了，现在不会显得太拥挤
  var rainDensity = 80;

  window.addEventListener("resize", function () {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  function Raindrop() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    // 🎛️ 2. 雨丝变长了，增加二次元特有的动感
    this.length = Math.random() * 30 + 20;
    this.speedY = Math.random() * 15 + 15;
    this.speedX = -Math.random() * 3;
    // 🎛️ 3. 透明度下限拉高，让雨滴在暗色或亮色背景下都能看清
    this.opacity = Math.random() * 0.5 + 0.4;
  }

  for (var i = 0; i < rainDensity; i++) {
    raindrops.push(new Raindrop());
  }

  function drawRain() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineCap = "round";
    for (var i = 0; i < raindrops.length; i++) {
      var r = raindrops[i];
      ctx.beginPath();
      ctx.moveTo(r.x, r.y);
      ctx.lineTo(r.x + r.speedX, r.y + r.length);

      // 🎛️ 4. 雨滴加粗了一点点
      ctx.lineWidth = 2.0;
      // 🎛️ 5. 颜色换成了非常通透的冷调青蓝色
      ctx.strokeStyle = "rgba(210, 235, 255, " + r.opacity + ")";
      ctx.stroke();

      r.y += r.speedY;
      r.x += r.speedX;

      if (r.y > h) {
        r.y = -20;
        r.x = Math.random() * w;
      }
    }
    requestAnimationFrame(drawRain);
  }
  drawRain();
})();
