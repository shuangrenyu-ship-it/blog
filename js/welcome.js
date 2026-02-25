(function () {
  // 1. 设置你的开屏随机图库
  // 我在这里预置了两个高质量的“免费随机二次元壁纸API”，每次打开都会自动换图
  var images = [
    "https://t.mwm.moe/pc",
    "https://api.ixiaowai.cn/api/api.php",
    // 💡如果你想用自己保存在本地的图片，请删掉上面两行，改成下面这样：
    // '/img/bg1.jpg',
    // '/img/bg2.jpg',
    // '/img/bg3.jpg'
  ];

  // 随机抽取其中一张
  var randomImg = images[Math.floor(Math.random() * images.length)];

  // 2. 动态生成一张覆盖全屏的“幕布”
  var splash = document.createElement("div");
  splash.style.position = "fixed";
  splash.style.top = "0";
  splash.style.left = "0";
  splash.style.width = "100vw";
  splash.style.height = "100vh";
  splash.style.backgroundColor = "#1f1f1f"; // 在图片还没下载出来时的黑灰底色
  splash.style.backgroundImage = "url(" + randomImg + ")";
  splash.style.backgroundSize = "cover";
  splash.style.backgroundPosition = "center";
  splash.style.zIndex = "999999"; // 保证它盖住一切（包括看板娘和雨水）

  // ⬇️ 这里控制消散的速度，目前是 2秒 缓慢消失
  splash.style.transition = "opacity 2s ease";
  splash.style.opacity = "1";

  // 尽早插入网页，防止闪屏
  document.documentElement.appendChild(splash);

  // 3. 当网页底部的博客完全加载好之后，触发消散魔法
  window.addEventListener("load", function () {
    // 稍微停留 0.5 秒，让访客欣赏一下开屏图
    setTimeout(function () {
      splash.style.opacity = "0"; // 开始变透明

      // 等待 2 秒钟（变透明的动画放完）后，彻底把幕布撤掉，避免挡住鼠标点击
      setTimeout(function () {
        splash.remove();
      }, 2000);
    }, 500);
  });
})();
