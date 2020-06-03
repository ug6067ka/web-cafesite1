var left_img = 1;

function slide_img(X) {
  var img_a = document.getElementById("img_a");
  var img_b = document.getElementById("img_b");
  var img_c = document.getElementById("img_c");

  //after click right botton

  if (X == 2) {
    left_img--;
    draw_img();
  }
}

function draw_img() {
  img_a.src = "test0" + chk_no(left_img) + ".jpg";
  img_a.src = "test0" + chk_no(left_img + 1) + ".jpg";
  img_a.src = "test0" + chk_no(left_img + 2) + ".jpg";

  left_img = chk_no(left_img);
}
