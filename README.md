# autocomplete
jQuery搜索框输入文字下拉提示菜单(bootstrap风格)autocomplete
### 使用方法
##### 1、引入JS
```html
<script src="static/libs/jQuery/jquery.min.js"></script>
<script src="js/autocomplete.js"></script>    
<script src="test.js"></script>
```
##### 2、选中input标签，调用autocomplete方法。
```javascript
$('#target').autocomplete({
            ...
})
```
### API：
```javascript
    source:[1,2,3,4,5,6,7],（必须为数组）
    itemStyle:{
              hoverBackgroundColor:  string ,鼠标悬停时的背景色,默认#337ab7,
              hoverColor: string ,鼠标悬停时的字体色,默认#fff,
              color: string ,常态时字体色,默认#666,
              backgroundColor: string ,常态时背景色,默认#fff,
              textAlign: string ,文本对齐,默认left,
              width: number ,提示框宽度，默认为input的宽度
              height: number ,提示框子项高度，默认为input的高度
              top:下拉框定位,默认input高度+2
              left:下拉框定位,默认0
              borderColor:下拉框边框色,默认#ddd
    },
    maxItems:最多显示几条,默认10条
    itemClick:function ($this){
                  $this.text()
                  选中某项后的回调函数。
          }
```
 ### 演示代码如下：
##### html:
```html
<div class="input-group" style="margin: 100px auto">
  <input style="border-radius: 4px" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
</div>
```
##### javascript:
```javascript
$('.input-group>input').on('input propertychange',function () {
    $.ajax({
        type:'post',
        url:'http://xx.xxx.xxx.xxx:xxxx/PARTNER/Get_User_Tips',
        data:{
            q:$(this).val()
        },
        dataType:'json',
        success:function (data) {
            $('.input-group').autocomplete({
                source: data,
                maxItems:5,
                itemClick:function ($this) {
                    console.log($this.text());
                }
            })
        }
    })
})
```
![image](https://github.com/DavidHooooo/autocomplete/blob/master/image/%E6%9C%AA%E5%91%BD%E5%90%8D.png)

