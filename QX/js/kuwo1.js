/****************************

#!name 📢 叮当猫iOS资源脚本分享频道 = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕不完全解锁
#!author = 影子
#!openUrl = https://napi.ltd
#!homepage = https://napi.ltd
#!icon = https://file.napi.ltd/Static/Image/KuWo.png
#!date = 2024-04-28


[Rule]
USER-AGENT,KWPlayer,DIRECT


[Script]
http-response ^(?!.*img).*?(kuwo\.cn|lrts\.me)(/vip|/openapi)?(/enc|/audi.tion|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/myRec/vipMusic)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|.*?ptype\=vip)|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/Yuclaude/rewrite/main/QX/js/kuwo1.js, requires-body=true, timeout=60, tag=酷我音乐1, img-url=https://file.napi.ltd/Static/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn, audiobookpay.lrts.me

****************************/！