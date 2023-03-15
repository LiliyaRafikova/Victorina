$(document).ready(function () {
  //закрытие на крестик
  $(".close-popup").click(function () {
    $(".test1").fadeOut();
    $(".test2").fadeOut();
    $(".test3").fadeOut();
    $(".test4").fadeOut();
    $(".test5").fadeOut();
    $(".test6").fadeOut();
  });
  //открытие по кнопке
  $(".btn1").click(function () {
    $(".test1").fadeIn();
  });
  $(".btn2").click(function () {
    $(".test2").fadeIn();
  });
  $(".btn3").click(function () {
    $(".test3").fadeIn();
  });
  $(".btn4").click(function () {
    $(".test4").fadeIn();
  });
  $(".btn5").click(function () {
    $(".test5").fadeIn();
  });
  $(".btn6").click(function () {
    $(".test6").fadeIn();
  });

  $(".otvet13").click(function () {
    let ball = 0;
    if (parseInt($(".otvet_opros11").val()) == 2) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros12").val()) == 2) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros13").val()) == 1) {
      ball = ball + 5;
    }
    alert(`Вы набрали ${ball} баллов!`);
    $(".test1").fadeOut();
    //зачистка поля ввода после отправки
    $(".otvet_opros11").val("");
    $(".otvet_opros12").val("");
    $(".otvet_opros13").val("");
  });
  $(".otvet23").click(function () {
    let ball = 0;
    if (parseInt($(".otvet_opros21").val()) == 2) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros22").val()) == 2) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros23").val()) == 1) {
      ball = ball + 5;
    }
    alert(`Вы набрали ${ball} баллов!`);
    $(".test2").fadeOut();
    //зачистка поля ввода после отправки
    $(".otvet_opros21").val("");
    $(".otvet_opros22").val("");
    $(".otvet_opros23").val("");
  });

  $(".otvet33").click(function () {
    let ball = 0;
    if (parseInt($(".otvet_opros31").val()) == 1) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros32").val()) == 2) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros33").val()) == 1) {
      ball = ball + 5;
    }
    alert(`Вы набрали ${ball} баллов!`);
    $(".test3").fadeOut();
    //зачистка поля ввода после отправки
    $(".otvet_opros31").val("");
    $(".otvet_opros22").val("");
    $(".otvet_opros33").val("");
  });
  $(".otvet43").click(function () {
    let ball = 0;
    if (parseInt($(".otvet_opros41").val()) == 2) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros42").val()) == 1) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros43").val()) == 3) {
      ball = ball + 5;
    }
    alert(`Вы набрали ${ball} баллов!`);
    $(".test4").fadeOut();
    //зачистка поля ввода после отправки
    $(".otvet_opros41").val("");
    $(".otvet_opros42").val("");
    $(".otvet_opros43").val("");
  });
  $(".otvet53").click(function () {
    let ball = 0;
    if (parseInt($(".otvet_opros51").val()) == 2) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros52").val()) == 4) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros53").val()) == 1) {
      ball = ball + 5;
    }
    alert(`Вы набрали ${ball} баллов!`);
    $(".test5").fadeOut();
    //зачистка поля ввода после отправки
    $(".otvet_opros51").val("");
    $(".otvet_opros52").val("");
    $(".otvet_opros53").val("");
  });
  $(".otvet63").click(function () {
    let ball = 0;
    if (parseInt($(".otvet_opros61").val()) == 3) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros62").val()) == 4) {
      ball = ball + 5;
    }
    if (parseInt($(".otvet_opros63").val()) == 3) {
      ball = ball + 5;
    }
    alert(`Вы набрали ${ball} баллов!`);
    $(".test6").fadeOut();
    //зачистка поля ввода после отправки
    $(".otvet_opros61").val("");
    $(".otvet_opros62").val("");
    $(".otvet_opros63").val("");
  });
});
