(function () {
  // 桃花绽放效果
  window.onclick = function (e) {
    // 创建一个容器
    var flower = document.createElement("div");
    flower.className = "click-flower";
    // 设置点击位置
    flower.style.left = e.clientX - 10 + "px";
    flower.style.top = e.clientY - 10 + "px";

    // 这里是一朵五瓣桃花的 SVG 代码
    flower.innerHTML = `
      <svg viewBox="0 0 1024 1024" width="25" height="25">
        <path d="M512 512m-112 0a112 112 0 1 0 224 0 112 112 0 1 0-224 0Z" fill="#ffb7c5" />
        <path d="M512 384c100-150 250-100 250 50s-150 150-250 100c-100 50-250 50-250-100s150-200 250-50z" fill="#ffc0cb" />
        <path d="M384 512c-150-100-100-250 50-250s150 150 100 250c50 100 50 250-100 250s-200-150-50-250z" fill="#ffc0cb" />
        <path d="M512 640c-100 150-250 100-250-50s150-150 250-100c100-50 250-50 250 100s-150 200-250 50z" fill="#ffc0cb" />
        <path d="M640 512c150 100 100 250-50 250s-150-150-100-250c-50-100-50-250 100-250s200 150 50 250z" fill="#ffc0cb" />
      </svg>`;

    document.body.appendChild(flower);

    // 动画结束后自动删除元素，防止页面卡顿
    flower.addEventListener("animationend", function () {
      flower.parentElement.removeChild(flower);
    });
  };
})();
