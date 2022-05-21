function cnCharToEnChar(str){
    if(!str) return
    str = str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') // 去除前后空格
    str = str.replace(/[’|‘]/g,"'")
      .replace(/[“|”]/g,"\"").replace(/（/g,'(').replace(/）/g,')')
      .replace(/｛/g,"{").replace(/｝/g,"}")
      .replace(/，/g,",").replace(/：/g,":")
      .replace(/。/g,".").replace(/？/g,"?")
      .replace(/！/g,"!").replace(/￥/g,"$")
      .replace(/；/g, ';').replace(/ +/g, ' ')
      .replace(/(\.*$)|(!*$)|(,*$)/g, '')
      .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    console.log("符号处理后：",str)
    return str
}


cnCharToEnChar("。、？。。   ，，，；；‘’‘")
console.log("******************")