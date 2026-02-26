function show_runtime() {
  window.setTimeout("show_runtime()", 1000);
  // 设置你的建站时间，格式为：月/日/年 时:分:秒
  const start_date = new Date("01/01/2025 00:00:00");
  const now = new Date();
  const time_diff = now.getTime() - start_date.getTime();

  const ms_per_day = 24 * 60 * 60 * 1000;
  const days = Math.floor(time_diff / ms_per_day);

  const ms_per_hour = 60 * 60 * 1000;
  const hours = Math.floor((time_diff - days * ms_per_day) / ms_per_hour);

  const ms_per_minute = 60 * 1000;
  const minutes = Math.floor(
    (time_diff - days * ms_per_day - hours * ms_per_hour) / ms_per_minute,
  );

  const seconds = Math.floor(
    (time_diff -
      days * ms_per_day -
      hours * ms_per_hour -
      minutes * ms_per_minute) /
      1000,
  );

  // 这里的文字可以改成你想要的，比如 "joke的小世界已运行"
  const runtime_text = `joke的小世界已运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;

  const runtime_element = document.getElementById("runtime-counter");
  if (runtime_element) {
    runtime_element.innerHTML = runtime_text;
  }
}
show_runtime();
