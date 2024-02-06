const bd = document.querySelector("body");

const QRBox = bd.querySelector("#QRBox");
const MainBox = bd.querySelector("#MainBox");
const donateBox = bd.querySelector("#donateBox");

const qqr = "images/QQPayQR.png";
const aqr = "images/AliPayQR.png";
const wqr = "images/WeChatQR.png";

const showQR = (QR) => {
  if (QR) MainBox.style.backgroundImage = `url(${QR})`;

  bd.classList.add("blur");
  QRBox.classList.add("fadeIn");
  MainBox.classList.add("showQR");
};

donateBox.addEventListener("click", (e) => {
  let el = e.target;

  if (el.id === "QQPay") showQR(qqr);
  else if (el.id === "AliPay") showQR(aqr);
  else if (el.id === "WeChat") showQR(wqr);
});

MainBox.addEventListener("click", () => {
  MainBox.classList.remove("showQR");
  MainBox.classList.add("hideQR");

  setTimeout((a) => {
    QRBox.classList.remove("fadeIn");
    MainBox.classList.remove("hideQR");
    bd.classList.remove("blur");
  }, 600);
});
