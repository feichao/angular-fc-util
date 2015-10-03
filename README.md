# angular util

> angular util, include 2 components, fcclear && fcdocclick.

> angular 指令工具库，目前包含两个工具指令，一个是fcclear，用于清除输入框或者选择框的内容，一个是fcdocclick，可用于关闭弹出组件的组件。

### [wait for demo](http://blog.0xfc.cn/) ###

> demo/index.html

**dependencies**
> angular-fc-util depends on angular 1.3.5 as bower.json says.

**install**
> `bower install angular-fc-util --save`

**how to use**

> in you index.html include angular-util.js and angular-util.css
> `app.module('your angular app name', 'fc.util')`

**use like this**

 1. **fcClear**
```html
<input ng-model="name" fcclear fc-class="clear-name" fc-icon-class="clear-name-icon">
```
    Input element with fcclear will be like this: 
![clear][1]
    
    The clear button will be added, and click it will clear the content of input element.

    How to do this? Very easy! I warp the input element with a div element, so the final html is:

```html
<div class="fc-clear-content clear-name">
  <input ng-model="name">
  <div class="fc-clear-icon clear-name-icon" ng-click="name=''" ng-show="name"> 
    <svg>...</svg> 
    <div class="fc-clear-tooltip">Clear</div>
  </div>
</div>
```
    
    Read the final html, you should understand fc-class and fc-icon-class.
 2. **fcDocClick**
    
```html
<div fc-doc-click="dosomething()">
  <input ng-model="name" placeholder="Name" fcclear fc-class="clear-name" fc-icon-class="clear-name-icon">
</div>
```

    That you click the area outside the div with fc-doc-click will trigger dosomething().


  [1]: http://7xl1b4.com1.z0.glb.clouddn.com/util-clear.png