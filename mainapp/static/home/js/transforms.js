var html = document.documentElement;
var services = document.querySelector(".services-area");

var elements = services.querySelectorAll(".service-item");
console.log(elements);
[...elements].forEach(function (element) {
  element.addEventListener("mouseenter", function (e) {
    var curr = e.currentTarget;
    var texts = curr.querySelectorAll("i, h2, span");
    texts.forEach(el => (el.style.color = "black"));
    p = curr.querySelector("p");
    p.style.color = "#4b4646";
    curr.style.background = "#cdb30c";
    console.log(curr);
  });
  element.addEventListener("mouseleave", function (e) {
    var curr = e.currentTarget;
    var texts = curr.querySelectorAll("h2, span");
    curr.querySelector("i").style.color = "#cdb30c";
    texts.forEach(el => (el.style.color = "#fff"));
    p = curr.querySelector("p");
    p.style.color = "#999";
    curr.style.background = "none";
    console.log(curr);
  });
});
// console.log($(window).scrollTop())
window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  //    console.log(scrollTop)
  //    const maxScrollTop = html.scrollHeight - window.innerHeight;
  //    const scrollFraction = scrollTop / maxScrollTop;
  resume = document.querySelector(".resume-area");
  if (scrollTop > 1030 && scrollTop < 2800) {
    resume.style.background = "white";
    headers = resume.querySelectorAll("h1, h2, h3, h4");
    headers = [...headers];
    console.log(headers);
    headers.forEach(el => (el.style.color = "black"));
    resume.querySelector(".resume-content").style.color = "black";
  } else {
    resume.style.background = "none";
    headers = resume.querySelectorAll("h1, h2, h3, h4");
    headers = [...headers];
    // console.log(headers);
    headers.forEach(el => (el.style.color = "#fff"));
    resume.querySelector(".resume-content").style.color = "#fff";
  }
});

var bomb = document.querySelector(".bomb");
var i = 0,
  j = 0;
var time = 20;
var open = false;
bomb.addEventListener("click", function () {
  var flag = true;

  if (!open) {
    const openInterval = setInterval(function () {
      open = true;
      // console.log("here", i);
      if (i <= 20) {
        time = 60;
        if (i % 2 === 0) {
          bomb.style.transform = "translateX(-5px) rotate(10deg)";
          // bomb.style.width = Math.random() * 100 + 120 + "px";
        } else {
          bomb.style.transform = "translateX(5px) rotate(-10deg)";
          // bomb.style.height = Math.random() * 100 + 120 + "px";
        }
        i++;
      } else {
        time = 10;
        var cover = document.querySelector(".portfolio-cover");
        var wd = screen.width;
        var ht = screen.height;
        // if(i>=15){
        //   console.log(Math.pow(wd, 2) + Math.pow(ht, 2));

        // }
        var before = document
          .querySelector(".bomb")
          .style.setProperty("--display", "none");
        // before.setPropertyValue("display","none");

        bomb.style.background = "#fff";
        console.log(screen.width);
        if (i > 25 && (i - 25) * 35 + 0.24 * screen.width < screen.width) {
          bomb.style.transform =
            "translateX(-" +
            (i - 25) * 35 +
            "px)" +
            "rotate(-" +
            j * 10 +
            "deg)";
          // console.log(flag);
          if (flag) j++;
        } else if (i <= 25) {
          bomb.style.transform = "scale(" + 0.1 * i - 1 + ")";
        } else {
        }

        if (Math.pow(wd, 2) + Math.pow(ht, 2) >= Math.pow((i - 25) * 50, 2)) {
          cover.style.width = (i - 25) * 100 + "px";
          cover.style.height = (i - 25) * 100 + "px";
          console.log(cover.style.width, i, "width");
          i++;
        } else {
          cover.style.width = "100vw";
          cover.style.height = "100vh";
          cover.style.transform = "none";
          cover.style.top = "0";
          cover.style.right = "0";
          cover.style.borderRadius = "0";
          flag = false;
          if (j % 36 !== 0) {
            bomb.style.transform =
              "translateX(-" +
              (i - 25) * 35 +
              "px)" +
              "rotate(-" +
              Math.ceil(j / 36) * 36 * 10 +
              "deg)";
            j = Math.ceil(j / 36) * 36;
          }
          var icon = bomb.querySelector(".icon");
          icon.classList.remove("la-bars");
          icon.classList.add("la-times");
          icon.style.top = "24px";
          icon.style.color = "black";

          var port = document.getElementById("section-portfolio");
          port.style.display = "block";
          clearInterval(openInterval);
        }
      }
    }, time);
  } else {
    const closeInterval = setInterval(function () {
      var port = document.getElementById("section-portfolio");
      port.style.display = "none";
      open = false;
      // console.log("here", i);
      console.log("i,j", i, j);
      time = 10;
      var cover = document.querySelector(".portfolio-cover");
      var wd = screen.width;
      var ht = screen.height;
      // if(i>=15){
      //   console.log(Math.pow(wd, 2) + Math.pow(ht, 2));
      cover.style.height = 0;
      cover.style.width = 0;
      cover.style.transition = "height,width 3s ease";

      // }
      // var before = document.querySelector(".bomb").style.setProperty("--display","none");
      // before.setPropertyValue("display","none");

      bomb.style.background = "#000";
      console.log(screen.width);
      if (i > 25) {
        bomb.style.transform =
          "translateX(-" + (i - 25) * 35 + "px)" + "rotate(-" + j * 10 + "deg)";
        // console.log(flag);

        j--;
        i--;
      } else {
        cover.style.transition = "none";
        // cover.style.width = "100vw";
        // cover.style.height = "100vh";
        cover.style.transform = "translate(50%,50%)";
        cover.style.top = "auto";
        cover.style.bottom = "60px";
        cover.style.right = "5%";
        cover.style.borderRadius = "50%";
        time = 20;
        bomb.style.right = "5%";
        bomb.style.transform = "none";

        document.querySelector(".bomb").style.setProperty("--display", "block");
        i = 0;
        j = 0;
        var icon = bomb.querySelector(".icon");
        icon.classList.add("la-bars");
        icon.classList.remove("la-times");
        icon.style.top = "15px";
        icon.style.color = "white";

        clearInterval(closeInterval);
      }
    }, time);
  }
});
window.addEventListener("resize", event => {
  console.log(open);
  if (open) {
    console.log("here");
    bomb.style.transform =
      "translateX(-" + screen.width * 0.76 + "px)" + " rotate(-360deg)";
  }
});

var grid;
$(document).ready(function () {
  if (document.getElementById("section-portfolio")) {
    console.log("here");
  }
  console.log("in");
  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    console.log(data, "port");
    var items = document.querySelectorAll(".single-portfolio");
    items.forEach(el => {
      if (el.classList.contains(data.substring(1))) el.style.display = "block";
      else el.style.display = "none";
    });
  });
});
