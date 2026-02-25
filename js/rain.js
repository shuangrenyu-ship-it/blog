(function () {
  var canvas = document.getElementById("amegakure-rain");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var w = (canvas.width = window.innerWidth);
  var h = (canvas.height = window.innerHeight);
  var raindrops = [];

  // 🎛️ 密度适中：还原雨隐村连绵不断的氛围
  var rainDensity = 70;

  window.addEventListener("resize", function () {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  function Raindrop() {
    this.reset();
    // 初始状态让雨滴随机分布在满屏
    this.y = Math.random() * h;
  }

  Raindrop.prototype.reset = function () {
    this.x = Math.random() * w;
    this.y = -20;

    // 制造远近层次感
    var depth = Math.random();

    // 速度：带有一定重力的飘落，不急躁也不太慢
    this.speedY = depth * 5 + 6;

    // 风向：细微的倾斜角
    this.speedX = depth * -1.5 - Math.random() * 1;

    // 雨丝长度：长短不一，错落有致
    this.length = depth * 15 + 10;

    // 透明度提高：确保在复杂的背景图上也能清楚看到雨丝
    this.opacity = depth * 0.4 + 0.3;
  };

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

      ctx.lineWidth = 1.5;
      // 💧 雨隐村专属配色：沉闷冷酷的灰蓝色 (Slate Blue / Grey)
      ctx.strokeStyle = "rgba(110, 130, 155, " + r.opacity + ")";
      ctx.stroke();

      r.y += r.speedY;
      r.x += r.speedX;

      if (r.y > h || r.x < -20 || r.x > w + 20) {
        r.reset();
      }
    }
    requestAnimationFrame(drawRain);
  }
  drawRain();
})();
