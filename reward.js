jQuery(document).ready(() => {
  var QRBox = $("#QRBox");
  var MainBox = $("#MainBox");
  var QQPayQR = "images/QQPayQR.png";
  var AliPayQR = "images/AliPayQR.png";
  var WeChanQR = "images/WeChanQR.png";

  const showQR = (QR) => {
    if (QR) MainBox.css("background-image", `url(${QR})`);

    $("#DonateText,#donateBox,#github").addClass("blur");
    QRBox.fadeIn(300, () => {
      MainBox.addClass("showQR");
    });
  };

  $("#donateBox>li").click((event) => {
    var thisID = $(this).attr("id");
    if (thisID === "QQPay") {
      showQR(QQPayQR);
    } else if (thisID === "AliPay") {
      showQR(AliPayQR);
    } else if (thisID === "WeChat") {
      showQR(WeChanQR);
    }
  });

  MainBox.click((event) => {
    MainBox.removeClass("showQR").addClass("hideQR");
    setTimeout((a) => {
      QRBox.fadeOut(300, () => {
        MainBox.removeClass("hideQR");
      });
      $("#DonateText,#donateBox,#github").removeClass("blur");
    }, 600);
  });
});
