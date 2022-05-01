"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(config, extName, version) {
    let model = config.model;
    let modelUrl = config.modelUrl;
    let modelWidth = config.modelWidth;
    let modelHeight = config.modelHeight;
    let moveX = config.moveX;
    let moveY = config.moveY;
    let opacity = config.opacity;
    let pointerOverHidden = config.pointerOverHidden;
    let pointerPenetration = config.pointerPenetration;
    let position = config.position;
    let talk = config.talk;
    let useEnglish = config.English;
    let live2dLink = customizeModel(modelUrl, model);
    if (pointerOverHidden) {
        pointerPenetration = true;
    }
    return `
	/*ext-${extName}-start*/
	/*ext.${extName}.ver.${version}*/
  function move(){
    var j = 0; 
    var talking = document.querySelector('.talking');
    var talk=document.querySelector('div');
    var expression=document.querySelector('.expression')
    talk.onclick=function(){
        talking.style.display='block';
        talking.src="../model/对话/有然然陪着你呢.png"
        expression.src="../model/表情/Mua.png"
    }
    
    talk.addEventListener('mouseenter',function(){
    talking.style.display='block';   
    talking.src="../model/对话/和我一起打代码吧.png";
    expression.src="../model/表情/星星眼.png"
    })
    var fader = setInterval(function() {
        j++;
        expression.src = "../model/表情/" + j + ".png";
        if (j == 4)
            j = 1;
    }, 3000);
    
    
    var fader2 = setInterval(function () {
      talking.style.display='none'
    }, 3000);
    var image = document.querySelector('.mainbody');
    
    var frame=document.querySelector('.frame');
    document.addEventListener('keyup', function (up) {
        if (up.key = 'a') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'b') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'c') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'd') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'e') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'f') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'g') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'h') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'i') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='block';
        }
        if (up.key = 'j') {
            image.src = "../model/主体贴图/Diana_初始图.png";
            frame.style.display='none';
        }
        if (up.key = 'k') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'l') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'm') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'n') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'o') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'p') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'q') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'r') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 's') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 't') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'u') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'v') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'w') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'x') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
        if (up.key = 'y') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
    
        if (up.key = 'z') {
            frame.style.display='none';
            image.src = "../model/主体贴图/Diana_初始图.png";
        }
    
    })
    document.addEventListener('keydown', function (e) {
        if (e.key == 'a') {
    
            image.src = '../model/主体贴图/Diana_A.png';
            frame.style.display='block';
        }
        if (e.key == 'b') {
    
            image.src = '../model/主体贴图/Diana_B.png';
            frame.style.display='block';
        }
        if (e.key == 'c') {
    
            image.src = '../model/主体贴图/Diana_C.png';
            frame.style.display='block';
        }
        if (e.key == 'd') {
    
            image.src = '../model/主体贴图/Diana_D.png';
            frame.style.display='block';
        }
        if (e.key == 'e') {
    
            image.src = '../model/主体贴图/Diana_E.png';
            frame.style.display='block';
        }
        if (e.key == 'f') {
    
            image.src = '../model/主体贴图/Diana_F.png';
            frame.style.display='block';
        }
        if (e.key == 'g') {
    
            image.src = '../model/主体贴图/Diana_G.png';
            frame.style.display='block';
        }
        if (e.key == 'h') {
    
            image.src = '../model/主体贴图/Diana_H.png';
            frame.style.display='block';
        }
        if (e.key == 'i') {
    
            image.src = '../model/主体贴图/Diana_I.png';
            frame.style.display='block';
        }
        if (e.key == 'j') {
    
            image.src = '../model/主体贴图/Diana_J.png';
            frame.style.display='block';
        }
        if (e.key == 'k') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_K.png';
        }
        if (e.key == 'l') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_L.png';
        }
        if (e.key == 'm') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_M.png';
        }
        if (e.key == 'n') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_N.png';
        }
        if (e.key == 'o') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_O.png';
        }
        if (e.key == 'p') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_P.png';
        }
        if (e.key == 'q') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_Q.png';
        }
        if (e.key == 'r') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_R.png';
        }
        if (e.key == 's') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_S.png';
        }
        if (e.key == 't') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_T.png';
        }
        if (e.key == 'u') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_U.png';
        }
        if (e.key == 'v') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_v.png';
        }
        if (e.key == 'w') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_W.png';
        }
        if (e.key == 'x') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_X.png';
        }
        if (e.key == 'y') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_Y.png';
        }
        if (e.key == 'z') {
            frame.style.display='block';
            image.src = '../model/主体贴图/Diana_Z.png';
        }
    })
  }
	/*ext-${extName}-end*/
	`;
}
exports.default = default_1;
function customizeModel(modelUrl, model) {
    if (modelUrl) {
        return modelUrl;
    }
    else {
        switch (model) {
            case 'shizuku':
                return './models/shizuku/index.json';
            case 'shizuku-pajama':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/ShizukuTalk/shizuku-pajama/index.json';
            case 'bilibili-22':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/bilibili-live/22/index.json';
            case 'bilibili-33':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/bilibili-live/33/index.json';
            case 'Pio':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Pio/index.json';
            case 'Tia':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Tia/index.json';
            case 'noir':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/HyperdimensionNeptunia/noir_classic/index.json';
            case 'nepnep':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/HyperdimensionNeptunia/nepnep/index.json';
            case 'nepmaid':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/HyperdimensionNeptunia/nepmaid/index.json';
            case 'nepgear':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/HyperdimensionNeptunia/nepgear/index.json';
            case 'vert':
                return 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/HyperdimensionNeptunia/vert_swimwear/index.json';
            case 'tororo':
                return 'https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json';
            case 'hijiki':
                return 'https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json';
            default:
                return '';
        }
    }
}
//# sourceMappingURL=getJs.js.map