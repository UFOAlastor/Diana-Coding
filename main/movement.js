function move () {
    var j = 0;
    var talking = document.querySelector('.talking');
    var talk = document.querySelector('div');
    var expression = document.querySelector('.expression')
    talk.onclick = function () {
        talking.style.display = 'block';
        talking.src = "../model/Chat/together.png"
        expression.src = "../model/expression/Mua.png"
    }

    talk.addEventListener('mouseenter', function () {
        talking.style.display = 'block';
        talking.src = "../model/Chat/coding.png";
        expression.src = "../model/expression/starEye.png"
    })
    var fader = setInterval(function () {
        j++;
        expression.src = "../model/expression/" + j + ".png";
        if (j == 4)
            j = 1;
    }, 3000);


    var fader2 = setInterval(function () {
        talking.style.display = 'none'
    }, 3000);
    var image = document.querySelector('.mainbody');

    var frame = document.querySelector('.frame');
    document.addEventListener('keyup', function (up) {
        if (up.key = 'a') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'b') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'c') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'd') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'e') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'f') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'g') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'h') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'i') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'block';
        }
        if (up.key = 'j') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display = 'none';
        }
        if (up.key = 'k') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'l') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'm') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'n') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'o') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'p') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'q') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'r') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 's') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 't') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'u') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'v') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'w') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'x') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'y') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }

        if (up.key = 'z') {
            frame.style.display = 'none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }

    })
    document.addEventListener('keydown', function (e) {
        if (e.key == 'a') {

            image.src = '../model/主体贴图/Diana_A.png';
            frame.style.display = 'block';
        }
        if (e.key == 'b') {

            image.src = '../model/主体贴图/Diana_B.png';
            frame.style.display = 'block';
        }
        if (e.key == 'c') {

            image.src = '../model/主体贴图/Diana_C.png';
            frame.style.display = 'block';
        }
        if (e.key == 'd') {

            image.src = '../model/主体贴图/Diana_D.png';
            frame.style.display = 'block';
        }
        if (e.key == 'e') {

            image.src = '../model/主体贴图/Diana_E.png';
            frame.style.display = 'block';
        }
        if (e.key == 'f') {

            image.src = '../model/主体贴图/Diana_F.png';
            frame.style.display = 'block';
        }
        if (e.key == 'g') {

            image.src = '../model/主体贴图/Diana_G.png';
            frame.style.display = 'block';
        }
        if (e.key == 'h') {

            image.src = '../model/主体贴图/Diana_H.png';
            frame.style.display = 'block';
        }
        if (e.key == 'i') {

            image.src = '../model/主体贴图/Diana_I.png';
            frame.style.display = 'block';
        }
        if (e.key == 'j') {

            image.src = '../model/主体贴图/Diana_J.png';
            frame.style.display = 'block';
        }
        if (e.key == 'k') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_K.png';
        }
        if (e.key == 'l') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_L.png';
        }
        if (e.key == 'm') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_M.png';
        }
        if (e.key == 'n') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_N.png';
        }
        if (e.key == 'o') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_O.png';
        }
        if (e.key == 'p') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_P.png';
        }
        if (e.key == 'q') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_Q.png';
        }
        if (e.key == 'r') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_R.png';
        }
        if (e.key == 's') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_S.png';
        }
        if (e.key == 't') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_T.png';
        }
        if (e.key == 'u') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_U.png';
        }
        if (e.key == 'v') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_v.png';
        }
        if (e.key == 'w') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_W.png';
        }
        if (e.key == 'x') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_X.png';
        }
        if (e.key == 'y') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_Y.png';
        }
        if (e.key == 'z') {
            frame.style.display = 'block';
            image.src = '../model/主体贴图/Diana_Z.png';
        }
    })
}
