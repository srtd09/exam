window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 500); 
  }, 1500); // ロード画面の表示時間
});