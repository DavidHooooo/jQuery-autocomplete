
//搜索框拓展插件 autocomplete

//配置说明：
//source:array
//itemClick:function,会返回当前点击的jquery对象
//hoverColor:string,当前悬停项的背景色
//使用方法：
//选中input标签，然后调用autocomplete方法
//$('#taget').autocomplete({
//       source:[1,2,3,4,5,6,7,8,9,10],
//       itemStyle:{
//          hoverBackgroundColor:默认#337ab7,
//          hoverColor:默认#fff,
//          color:默认#666,
//          backgroundColor:默认#fff,
//          borderColor:下拉框边框颜色
//          textAlign:默认left,
//          width:宽度，默认为input的宽度
//          height:高度，默认为input的高度
//          top:下拉框定位
//          left:下拉框定位
//       },
//       maxItems:最多显示几条,默认10条
//       itemClick:function ($this){
//              返回当前点击标签的jQuery对象
//              $this.text()
//      }
// })

$.fn.autocomplete = function(obj) {
    if(obj.itemStyle==undefined){
        obj.itemStyle = {}
    }
    if(obj.source.length!=0){
        $(this).siblings('ul').remove()
        var that = $(this)
        var width = obj.itemStyle.width==undefined?$(this).outerWidth()-2:obj.itemStyle.width
        var height = obj.itemStyle.height==undefined?$(this).outerHeight()-2:obj.itemStyle.height
        var MaxItems = obj.maxItems==undefined?10:obj.maxItems
        var maxHeight = height*MaxItems+6
        $(this).parent().css({position:'relative'}).append('<ul style="z-index: 9999"></ul>')
        var borderColor = obj.itemStyle.borderColor==undefined?'#ddd':obj.itemStyle.borderColor
        var top =obj.itemStyle.top==undefined?($(this).outerHeight()+2):obj.itemStyle.top
        var left =obj.itemStyle.top==undefined?0:obj.itemStyle.left
        $(this).siblings('ul').css({
            position: 'absolute',
            top:top,
            left:left,
            width: width,
            border:'1px solid '+borderColor+'',
            borderRadius: 4,
            padding: '2px 0',
            boxShadow: '0 0 3px 1px #ddd',
            maxHeight: maxHeight,
            overflowY: 'auto',
            display:'none',
            backgroundColor:obj.itemStyle.backgroundColor
        })
        var hoverBackgroundColor = obj.itemStyle.hoverBackgroundColor==undefined?'#337ab7':obj.itemStyle.hoverBackgroundColor
        var hoverColor = obj.itemStyle.hoverColor==undefined?'#fff':obj.itemStyle.hoverColor
        var backgroundColor = obj.itemStyle.backgroundColor==undefined?'#fff':obj.itemStyle.backgroundColor
        var color = obj.itemStyle.color==undefined?'#666':obj.itemStyle.color
        var textAlign = obj.itemStyle.textAlign==undefined?'left':obj.itemStyle.textAlign
        var str = ''
        $.each(obj.source,function (i,info) {
            str+='<li style="height: '+height+'px;cursor:pointer;line-height:'+height+'px;list-style: none;padding: 0 12px;background-color:'+backgroundColor+';text-align:'+textAlign+';color: '+color+';z-index: 9999">'+info+'</li>'
        })
        $(this).siblings('ul').html(str).show()
        $(this).siblings('ul').children().bind({
            mouseenter:function () {
                $(this).css({
                    backgroundColor:hoverBackgroundColor,
                    color:hoverColor
                }).siblings().css({
                    backgroundColor:backgroundColor,
                    color:color
                })
            },
            click:function () {
                obj.itemClick($(this))
                that.siblings('ul').hide()
            }
        })
        $(this).siblings('ul').on('mouseleave',function () {
            $(this).siblings('ul').hide()
        })
        $(this).on('focus',function () {
            $(this).siblings().show()
        })
    }
    else {
        $(this).siblings('ul').remove()
    }
}