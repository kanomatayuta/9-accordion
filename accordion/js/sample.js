// 質問タブを変数に入れる
const tab = document.querySelectorAll(".accordion__tab-icon");
// 回答コンテンツを変数に入れる
const contents = document.querySelectorAll(".accordion__content");

// 繰り返し(ループ)
// item初期値が0からtab.length(.accordion__tab-icon)の数だけ繰り返す。
for (let item = 0; item < tab.length; item++) {
  // 質問タブをクリックしたら実行
  tab[item].addEventListener("click", function () {
    // クリックした質問タブのactiveクラスを付け替える
    this.classList.toggle("active");
    // クリックした質問タブのindex番号の回答コンテンツのactiveクラスを付け替える
    contents[item].classList.toggle("active");
  });
}