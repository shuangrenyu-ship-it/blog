(function () {
  window.addEventListener("load", function () {
    // 1. 找到导航栏最右侧的区域
    var navRight = document.querySelector("#nav-right");
    if (!navRight) return;

    // 2. 创建一个深色模式切换按钮
    var darkBtn = document.createElement("div");
    darkBtn.className = "nav-button";
    darkBtn.id = "nav-dark-toggle";

    // 3. 判断当前是白天还是黑夜，显示对应的太阳或月亮图标
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    darkBtn.innerHTML =
      '<a class="site-page" title="昼夜切换"><i class="' +
      (isDark ? "fas fa-sun" : "fas fa-moon") +
      '"></i></a>';

    // 4. 给它绑定点击魔法
    darkBtn.onclick = function () {
      // 触发主题自带的黑夜切换功能
      btf.switchDarkMode();

      // 切换完立刻更换图标（月亮变太阳，太阳变月亮）
      setTimeout(function () {
        var currentlyDark =
          document.documentElement.getAttribute("data-theme") === "dark";
        darkBtn.querySelector("i").className = currentlyDark
          ? "fas fa-sun"
          : "fas fa-moon";
      }, 50);
    };

    // 5. 把它插进导航栏里（放在搜索框旁边）
    var toggleMenu = document.querySelector("#toggle-menu");
    if (toggleMenu) {
      navRight.insertBefore(darkBtn, toggleMenu);
    } else {
      navRight.appendChild(darkBtn);
    }
  });
})();
