---
title: Base64 简要笔记及其他
date: 2014-11-06
tag: JavaScript
---

# Base64 简要笔记及其他

### Base64 是一种基于 64 个可打印字符来表示二进制数据的表示方法。

#### 1.base64 算法的由来

base64 最早是用作解决电子邮件的传输问题，由于历史原因，早期电子邮件只允许传输 ASCII 码字符，如果想传输一封带有非 ASCII 字符的邮件，在遇到一些老旧的网关就可能会对字符最高位进行调整，导致收到的邮件出现乱码。

#### 2.base64 不是加密算法

base64 算法的编码和解码方法可以作为加密和解密操作，但是不能叫做加密算法，因为其算法和充当密钥的索引表都是公开的。最多是让在你身后的人一时看不懂，所谓防君子不防小人。

#### 3.Base 编码方法

转换的时候，将三个 byte 的数据，先后放入一个 24bit 的缓冲区中，先来的 byte 占高位。数据不足 3byte 的话，剩下的 bit 用 0 补足。然后，每次取出 6 个 bit，按照其值选择索引表的字符作为编码后的输出。不断进行，直到全部输入数据转换完成。


这里就不举例说明，具体可以参考维基百科。

#### 4.base64 索引表如下

<table>
<tr>
<th scope="col">数值</th>
<th scope="col">字符</th>
<th scope="col">数值</th>
<th scope="col">字符</th>
<th scope="col">数值</th>
<th scope="col">字符</th>
<th scope="col">数值</th>
<th scope="col">字符</th>
</tr>
<tr>
<td>0</td>
<td>A</td>
<td>16</td>
<td>Q</td>
<td>32</td>
<td>g</td>
<td>48</td>
<td>w</td>
</tr>
<tr>
<td>1</td>
<td>B</td>
<td>17</td>
<td>R</td>
<td>33</td>
<td>h</td>
<td>49</td>
<td>x</td>
</tr>
<tr>
<td>2</td>
<td>C</td>
<td>18</td>
<td>S</td>
<td>34</td>
<td>i</td>
<td>50</td>
<td>y</td>
</tr>
<tr>
<td>3</td>
<td>D</td>
<td>19</td>
<td>T</td>
<td>35</td>
<td>j</td>
<td>51</td>
<td>z</td>
</tr>
<tr>
<td>4</td>
<td>E</td>
<td>20</td>
<td>U</td>
<td>36</td>
<td>k</td>
<td>52</td>
<td>0</td>
</tr>
<tr>
<td>5</td>
<td>F</td>
<td>21</td>
<td>V</td>
<td>37</td>
<td>l</td>
<td>53</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>G</td>
<td>22</td>
<td>W</td>
<td>38</td>
<td>m</td>
<td>54</td>
<td>2</td>
</tr>
<tr>
<td>7</td>
<td>H</td>
<td>23</td>
<td>X</td>
<td>39</td>
<td>n</td>
<td>55</td>
<td>3</td>
</tr>
<tr>
<td>8</td>
<td>I</td>
<td>24</td>
<td>Y</td>
<td>40</td>
<td>o</td>
<td>56</td>
<td>4</td>
</tr>
<tr>
<td>9</td>
<td>J</td>
<td>25</td>
<td>Z</td>
<td>41</td>
<td>p</td>
<td>57</td>
<td>5</td>
</tr>
<tr>
<td>10</td>
<td>K</td>
<td>26</td>
<td>a</td>
<td>42</td>
<td>q</td>
<td>58</td>
<td>6</td>
</tr>
<tr>
<td>11</td>
<td>L</td>
<td>27</td>
<td>b</td>
<td>43</td>
<td>r</td>
<td>59</td>
<td>7</td>
</tr>
<tr>
<td>12</td>
<td>M</td>
<td>28</td>
<td>c</td>
<td>44</td>
<td>s</td>
<td>60</td>
<td>8</td>
</tr>
<tr>
<td>13</td>
<td>N</td>
<td>29</td>
<td>d</td>
<td>45</td>
<td>t</td>
<td>61</td>
<td>9</td>
</tr>
<tr>
<td>14</td>
<td>O</td>
<td>30</td>
<td>e</td>
<td>46</td>
<td>u</td>
<td>62</td>
<td>+</td>
</tr>
<tr>
<td>15</td>
<td>P</td>
<td>31</td>
<td>f</td>
<td>47</td>
<td>v</td>
<td>63</td>
<td>/</td>
</tr>
</table>

<!-- | 数值 | 字符 | 数值 | 字符 | 数值 | 字符 | 数值 | 字符 |
| - | - | | - | - | | - | - | | - | - |
| 0	| A	| 16 | Q | 32 | g	| 48 | w |
| 1	| B	| 17 | R | 33	| h	| 49 | x |
| 2 |	C	| 18 | S | 34	| i	| 50 | y |
| 3	| D	| 19 | T | 35	| j	| 51 | z |
| 4 | E	| 20 | U | 36	| k	| 52 | 0 |
| 5	|F	|21	|V	|37	|l	|53	|1
| 6	|G	|22	|W	|38	|m	|54	|2
| 7	|H	|23	|X	|39	|n	|55	|3
| 8	|I	|24	|Y	|40	|o	|56	|4
| 9	|J	|25	|Z	|41	|p	|57	|5
| 10	|K	|26	|a	|42	|q	|58	|6
| 11	|L	|27	|b	|43	|r	|59	|7
| 12	|M	|28	|c	|44	|s	|60	|8
| 13	|N	|29	|d	|45	|t	|61	|9
| 14	|O	|30	|e	|46	|u	|62	|+
| 15	|P	|31	|f	|47	|v	|63	|/ -->


#### 5.一个简单的编码方法和译码方法实现：

```javascript
var base64Encode = function(data) {
  var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var out = '';

  for (var i = 0, len = data.length; i < len; i += 3) {
    var binStr = '',
        newStr = '',
        threeChar = data.slice(i, i+3);

    for (var j = 0; j < 3; j++) {
      var t = threeChar.charCodeAt(j).toString(2);
      while (t.length < 8) t = '0' + t;
      binStr += t;
    }

    for (var k = 0; k < 24; k += 6) {
      newStr += map[parseInt(binStr.slice(k, k+6), 2)];
    }
    if (i+3-len == 1) newStr = newStr.slice(0, 3) + '=';
    if (i+3-len == 2) newStr = newStr.slice(0, 2) + '==';
    out += newStr;
  }
  return out;
};

var base64Decode = function(code) {
  var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var ascii = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          '[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
  var out = '';

  for (var i = 0, len = code.length; i < len; i += 4) {
    var fourChar = code.slice(i, i+4),
        binStr = '',
        newStr = '';

    for (var j = 0; j < 4; j++) {
      var t = map.indexOf(fourChar.charAt(j)).toString(2);
      while (t.length < 6) t = '0' + t;
      binStr += t;
    }

    for (var k = 0; k < 24; k += 8) {
      var char = ascii[parseInt(binStr.slice(k, k+8), 2) - 32];
      if (char !== undefined) newStr += char;
    }
    out += newStr;
  }
  return out;
};
```

### HTML5 提供的通用 Base64 方法 API


#### 1.编码： `window.btoa(stringToEncode)`

只能将 ASCII 字符串或二进制数据转换成一个 base64 编码过的字符串,该方法不能直接作用于 Unicode 字符串。

#### 2.解码： `window.atob(encodedData)`

将已经被 base64 编码过的数据进行解码。


#### 3.作用于 UTF-8 编码的文字

但是这两个 Web API 功能很简单，并不能直接作用于 Unicode 字符串，所以当调用 `btoa()` 时若传入的不是 ASCII 或二进制字符串，比如汉字就会出错。

下面是别人提供的简单解决方法：

```javascript
function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob(str)));
}
```

作者在这里使用了一个小小的Hack技巧。`encodeURIComponent()` 是ECMAscript中Global对象的URI方法，对URI进行编码，可以作用于所有Unicode字符。而 `escape()` 是已废弃的URI编码方法，功能和 `encodeURIComponent()` 相同，但是只能编码ASCII字符。

即 `encodeURIComponent(str)` 相当于 `escape(unicodeToASCII(str))` ，则 `unescape(encodeURIComponent(str))` 等同于 `unicodeToASCII(str)` ,所以就将 Unicode 字符转换成了 ASCII 字符。( `unescape()` 是和 `escape()` 对应的解码方法）

关于文字集和文字编码方面的知识，比如 UTF-8 是基于 Unicode 文字集的一种广泛使用的编码方式，具体此处不再赘述。

### Data URL与Base64

这里主要说说 Data URL 模式和 Base64 ，比如下面这段代码：

```javascript
console.log("\n\n\n%c", 'font-size:0;margin-top:20px;line-height:36px;padding-top:50px;padding-left:158px;background:url("data:image/png;base64,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");background-repeat:no-repeat;')
```

这是一个真实的小例子，可以在百度网盘看到，会在控制台打印出百度云logo。这里用到了 `console.log()` 的一些稍微高级一点的用法，支持类似C语言 `printf()` 风格的打印方式，占位符 `%c` 可以使用一些CSS样式语句。比如这里使用的：

```css
font-size: 0;
margin-top: 20px;
line-height: 36px;
padding-top: 50px;
padding-left: 158px;
background: url("data:image/png;base64...");
background-repeat: no-repeat;
```

关于 `console.log()` 的用法以及 `console` 对象的其他方法、属性，具体此处不再赘述。

回到 url，可以看到一长串数据，在开头是这样的：

```
    data:image/png;base64...
```

这就是 Data URL Scheme 的语法格式，后面是用 Base64 编码的图片数据。

完整的图片就像下面这样，可以直接复制到地址栏查看：

```
    data:image/png;base64,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
```

不过，Firefox 似乎不支持在控制台使用 Data URL，大概是由于这个原因，有时候可以降级在控制台直接使用一张图片。


##### 参考资料：

1. [https://developer.mozilla.org/zh-CN/docs/Web/API/Window.btoa](https://developer.mozilla.org/zh-CN/docs/Web/API/Window.btoa)
2. [https://developer.mozilla.org/zh-CN/docs/Web/API/Window.atob](https://developer.mozilla.org/zh-CN/docs/Web/API/Window.atob)
3. [RFC 2397 of the Internet Engineering Task Force (IETF)](http://tools.ietf.org/html/rfc2397 "RFC 2397 of the Internet Engineering Task Force (IETF)")
4. Javascript高级程序设计（第3版）[人民邮电出版社]
5. Java加密与解密的艺术[机械工业出版社]
