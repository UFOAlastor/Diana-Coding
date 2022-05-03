# Diana-Coding[嘉然代打] 使用简介
    嘉然陪你打代码~
    
    然然会跟着你的动作敲击键盘~
    
    受BongoCat（代打猫）启发，制作这样一个“嘉然代打”的vscode插件
    
    其中“代打”一词致敬“代打猫”
# 简单预览



![Diana_show](https://s2.loli.net/2022/05/03/liyo5FcZxC2d4v1.gif)

![Diana_show](https://s2.loli.net/2022/05/03/jOusPyBkQAxJeYg.gif)


# 视频演示

# 功能概况

-   ### 检测26个字母和数字键的按击，然然会做出相应动作，同时一旁还会显示出按下的按键

-   ### 功能键按下，与字母或数字键并列显示，保证组合键可以正常显示

-   ### 每隔一个小时提醒站立，每隔一个半小时提醒喝水

-   ### 然然表情会随机显示

-   ### 鼠标移动到然然身上和鼠标点击，会有互动效果

-   ### 然然可以被鼠标拖动

-   ### 然然带有鼠标点击穿透，不会妨碍点击

# 使用介绍

    若依赖启动失败：
    - windows可尝试使用以管理者身份运行vscode
    - mac 请留意是否将vscode从【下载】移动到【应用程序】里
    - mac 可通过【检查vscode是否可以更新】来判断软件是否处于可写的硬盘中
    
    删除时请注意：
    - 先进入插件设置取消勾选“启动”
    - 直接删除插件会导致注入vscode的js代码未被删除
    - 如果已经直接删除插件，嘉然还存在于界面上，请进入以下路径手动删除：
    C:\Users\your_id\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-browser\workbench\
    其中model文件夹是注入的文件夹，
    同时workbench.js中被注释包裹的部分也是注入的代码，
    全部删除后就可以恢复正常的vscode界面



## Warns 警告：

> **本插件是通过修改 vscode 的 js 文件的方式运行**
> 所以会在初次安装，或者 vscode 升级的时候，出现以下提示，请选择 【不再提示】:
>
> **This extension works by editting the vscode's css file.**
> So, a warning appears while the first time to install or vscode update. U can click the [never show again] to avoid it.
>

# 团队成员  

-   ### [此店不售此书](https://Alastor.top)

-   ### NELS🌏N

-   ### 一初

    

## 请勿使用该项目进行商业盈利