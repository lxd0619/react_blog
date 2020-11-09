# [re-resizable](https://github.com/STRML/re-resizable)中文文档

## 示例 Gif

[![屏幕截图](https://github.com/bokuweb/re-resizable/raw/master/docs/screenshot.gif?raw=true)](https://github.com/bokuweb/re-resizable/blob/master/docs/screenshot.gif?raw=true)

## 现场演示

### 网站

[Storybook](http://bokuweb.github.io/re-resizable/)

### CodeSandbox

[![编辑xp9p7272m4](https://camo.githubusercontent.com/416c7a7433e9d81b4e430b561d92f22ac4f15988/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f706c61792d636f646573616e64626f782e737667)](https://codesandbox.io/s/xp9p7272m4)
[CodeSandbox](https://codesandbox.io/s/xp9p7272m4)
[CodeSandbox(TypeScript)](https://codesandbox.io/s/1vwo2p4l64)
[CodeSandbox(With hooks)](https://codesandbox.io/s/blissful-joliot-d3unx)

## 安装

```
$ npm install --save re-resizable
```

## 用法

### 例子 `defaultSize`

```
<Resizable
  defaultSize={{
    width:320,
    height:200,
  }}
>
  Sample with default size
</Resizable>
```

### 例子 `size`

如果您使用`size`道具，请自行管理状态。

```
<Resizable
  size={{ width: this.state.width, height: this.state.height }}
  onResizeStop={(e, direction, ref, d) => {
    this.setState({
      width: this.state.width + d.width,
      height: this.state.height + d.height,
    });
  }}
>
  Sample with size
</Resizable>
```

## 属性

#### `defaultSize?: { width: (number | string), height: (number | string) };`

指定，`width`并且`height`拖动的项目应从其开始。例如，您可以设置`300`，`'300px'`，`50%`。如果同时`defaultSize`和`size`省略集`'auto'`。

` defaultSize``size `设置时将被忽略。

#### `size?: { width: (number | string), height: (number | string) };`

该`size`属性用于设置组件的大小。例如，您可以设置`300`，`'300px'`，`50%`。

`size`如果您需要自己控制尺寸状态，请使用。

#### `className?: string;`

该`className`属性用于设置`className`可调整大小组件的自定义。

#### `style?: { [key: string]: string };`

该`style`属性用于设置`style`可调整大小组件的自定义。

#### `minWidth?: number | string;`

该`minWidth`属性用于设置可调整大小组件的最小宽度。默认为 10px。

它接受视口以及父级相对单位。例如，您可以设置`300`，`50%`，`50vw`或`50vh`。

相同类型的值可以应用到`minHeight`，`maxWidth`和`maxHeight`。

#### `minHeight?: number | string;`

该`minHeight`属性用于设置可调整大小组件的最小高度。默认为 10px。

#### `maxWidth?: number | string;`

该`maxWidth`属性用于设置可调整大小组件的最大宽度。

#### `maxHeight?: number | string`;

该`maxHeight`属性用于设置可调整大小的组件的最大高度。

#### `grid?: [number, number];`

该`grid`属性用于指定调整大小应捕捉到的增量。默认为`[1, 1]`。

#### `snap?: { x?: Array<number>, y?: Array<number> };`

该`snap`属性用于指定调整大小应捕捉到的绝对像素值。`x`和`y`都是可选的，仅允许您包含要定义的轴。默认为`null`。

#### `snapGap?: number`

该`snapGap`属性用于指定移动到下一个捕捉目标所需的最小间隙。缺省值`0`表示始终使用捕捉目标。

#### `resizeRatio?: number | string;`

该`resizeRatio`属性用于设置与鼠标/触摸移动的像素数相比可调整大小的组件缩放的像素数。默认为`1`（对于 1：1 比例）。设置在比例左侧的数字`2`将给出 2：1 的比例。

#### `lockAspectRatio?: boolean | number;`

该`lockAspectRatio`属性用于锁定纵横比。设置为`true`根据初始尺寸锁定宽高比。设置为数值以锁定特定的宽高比（例如`16/9`）。如果设置为数字，请确保将初始高度/宽度设置为具有正确纵横比的值。如果省略，请设置`false`。

#### `lockAspectRatioExtraWidth?: number;`

该`lockAspectRatioExtraWidth`属性使可调整大小的组件能够保持长宽比以及额外的宽度。例如，视频可以显示为 16：9，带有 50px 的侧边栏。如果省略，请设置`0`。

#### `lockAspectRatioExtraHeight?: number;`

该`lockAspectRatioExtraHeight`属性使可调整大小的组件能够保持长宽比和额外的高度。例如，视频可以显示为 16：9，标题栏为 50px。如果省略，请设置`0`。

#### `bounds?: ('window' | 'parent' | HTMLElement);`

指定调整大小边界。

#### `handleStyles?: HandleStyles;`

该`handleStyles`属性用于覆盖一个或多个调整大小手柄的样式。仅您指定的轴将替换其手柄样式。如果为其指定一个值，`right`将完全替换`right`调整大小手柄的样式，但其他手柄仍将使用默认样式。

#### `handleClasses?: HandleClassName;`

该`handleClasses`属性用于设置一个或多个调整大小句柄的 className。

#### `handleComponent?: HandleComponent;`

该`handleComponent`属性用于传递 React 组件以呈现为一个或多个调整大小手柄。例如，这可以用于将箭头图标用作手柄。

#### `handleWrapperStyle?: { [key: string]: string };`

该`handleWrapperStyle`属性用于覆盖调整大小的句柄包装器的样式。

#### `handleWrapperClass?: string;`

该`handleWrapperClass`属性用于覆盖调整大小的句柄包装器的 className。

#### `enable?: ?Enable;`

该`enable`属性用于设置可调整大小组件的可调整大小许可。

的许可`top`，`right`，`bottom`，`left`，`topRight`，`bottomRight`，`bottomLeft`，`topLeft`方向调整大小。如果省略，则启用所有调整器。如果只允许调整正确的方向大小，请设置`{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }`。

#### `onResizeStart?: ResizeStartCallBack;`

`ResizeStartCallBack` 类型如下。

```
类型 ResizeStartCallback  =  （（
  e：SyntheticMouseEvent < HTMLDivElement > | SyntheticTouchEvent < HTMLDivElement >，
  dir：ResizableDirection ，
  refToElement：HTMLDivElement ，
） => 无效;
```

当可调整大小的组件调整大小开始时调用。

#### `onResize?: ResizeCallback;`

#### `scale?: number`;

`scale`在可调整大小的元素是使用 css 缩放（例如- `transform: scale(0.5)`）的元素的后代的情况下使用此属性。

#### `as?: string | React.ComponentType`;

默认情况下，`Resizable`组件将渲染`div`一个包装器。该`as`属性用于更改所使用的元素。

### 基本的

`ResizeCallback` 类型如下。

```
type ResizeCallback = (
  event: MouseEvent | TouchEvent,
  direction: ResizableDirection,
  refToElement: HTMLDivElement,
  delta: NumberSize,
) => void;
```

在调整组件大小时调用。

#### `onResizeStop?: ResizeCallback;`

`ResizeCallback` 类型如下。

```
type ResizeCallback = (
  event: MouseEvent | TouchEvent,
  direction: ResizableDirection,
  refToElement: HTMLDivElement,
  delta: NumberSize,
) => void;
```

当可调整大小的组件调整大小停止时调用。

## 实例 API

#### \* `updateSize(size: { width: number | string, height: number | string }): void`

更新组件大小。

当调用此方法时，`grid`，`snap`，`max/minWidth`，`max/minHeight`道具将被忽略。

- 例如

```
class YourComponent extends Component {

  // ...

  update() {
    this.resizable.updateSize({ width: 200, height: 300 });
  }

  render() {
    return (
      <Resizable ref={c => { this.resizable = c; }}>
        example
      </Resizable>
    );
  }

  // ...
}
```

## 有助于

如果您有功能请求，请将其添加为问题或提出拉取请求。

如果您要报告错误，请在[CodeSandbox 中](https://codesandbox.io/s/ll587k677z)重现该错误，以帮助我们轻松地将其隔离。

## 测试

```
npm test
```

## 相关组件

- [react-rnd](https://github.com/bokuweb/react-rnd)
- [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane)

[原文链接](https://react.ctolib.com/react-resizable-box.html#live-demo)
