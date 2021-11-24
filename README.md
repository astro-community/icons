![Radix Icons](website/public/radix-icons.png)

# Radix Icons for Astro

Radix Icons are a crisp set of 15×15 icons designed by the [Modulz](https://modulz.app/) team.

```shell
npm install @astropub/icons
```



## Usage

All of the icons are available from a single import, and only the icons that are used will be added to the page.

```astro
---
import * as Icon from '@astropub/icons'
---
<Icon.Sun />
<Icon.Moon />
<Icon.Star />
<Icon.LightningBolt size="60" fill="gold" />
```

The icons are also available as individual imports.

```astro
---
import SunIcon from '@astropub/icons/Sun'
import MoonIcon from '@astropub/icons/MoonIcon'
import StarIcon from '@astropub/icons/StarIcon'
import LightningBoltIcon from '@astropub/icons/LightningBolt'
---
<SunIcon />
<MoonIcon />
<StarIcon />
<LightningBoltIcon size="60" fill="gold" />
```



## Prop Types

The following `Props` interface is available to every icon:

```ts
export interface Props {
  'fill'?: string;
  'fill-opacity'?: number | string;
  'fill-rule'?: "nonzero" | "evenodd" | "inherit";
  'height'?: number | string;
  'size'?: number | string;
  'stroke'?: string;
  'stroke-dasharray'?: string | number;
  'stroke-dashoffset'?: string | number;
  'stroke-linecap'?: "butt" | "round" | "square" | "inherit";
  'stroke-linejoin'?: "miter" | "round" | "bevel" | "inherit";
  'stroke-miterlimit'?: number | string;
  'stroke-opacity'?: number | string;
  'stroke-width'?: number | string;
  'viewBox'?: string;
  'width'?: number | string;
}
```

- The `Props` interface additionally includes:
  - All HTML global attributes.
  - All WAI-ARIA attributes and the WAI-ARIA role attribute.
- The `title` attribute transforms into a `<title>` element within the `<svg>`.
- The `size` attribute transforms values like `1.5x` into `1.5em`.
- The `size` attribute is used as the default values for `width` and `height`.

## Icons

<!-- ICON_STATS: -->

There are 297 icons included in this package.

| Icon | Import | Preview |
|:---- |:------ |:-------:|
| **Activity Log** | `@astropub/icons/ActivityLog` | ![Activity Log](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/activity-log.svg) |
| **Align Baseline** | `@astropub/icons/AlignBaseline` | ![Align Baseline](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/align-baseline.svg) |
| **Align Bottom** | `@astropub/icons/AlignBottom` | ![Align Bottom](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/align-bottom.svg) |
| **Align Center Horizontally** | `@astropub/icons/AlignCenterHorizontally` | ![Align Center Horizontally](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/align-center-horizontally.svg) |
| **Align Center Vertically** | `@astropub/icons/AlignCenterVertically` | ![Align Center Vertically](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/align-center-vertically.svg) |
| **Align Left** | `@astropub/icons/AlignLeft` | ![Align Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/align-left.svg) |
| **Align Right** | `@astropub/icons/AlignRight` | ![Align Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/align-right.svg) |
| **Align Top** | `@astropub/icons/AlignTop` | ![Align Top](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/align-top.svg) |
| **All Sides** | `@astropub/icons/AllSides` | ![All Sides](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/all-sides.svg) |
| **Angle** | `@astropub/icons/Angle` | ![Angle](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/angle.svg) |
| **Archive** | `@astropub/icons/Archive` | ![Archive](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/archive.svg) |
| **Arrow Bottom Left** | `@astropub/icons/ArrowBottomLeft` | ![Arrow Bottom Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-bottom-left.svg) |
| **Arrow Bottom Right** | `@astropub/icons/ArrowBottomRight` | ![Arrow Bottom Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-bottom-right.svg) |
| **Arrow Down** | `@astropub/icons/ArrowDown` | ![Arrow Down](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-down.svg) |
| **Arrow Left** | `@astropub/icons/ArrowLeft` | ![Arrow Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-left.svg) |
| **Arrow Right** | `@astropub/icons/ArrowRight` | ![Arrow Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-right.svg) |
| **Arrow Top Left** | `@astropub/icons/ArrowTopLeft` | ![Arrow Top Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-top-left.svg) |
| **Arrow Top Right** | `@astropub/icons/ArrowTopRight` | ![Arrow Top Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-top-right.svg) |
| **Arrow Up** | `@astropub/icons/ArrowUp` | ![Arrow Up](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/arrow-up.svg) |
| **Aspect Ratio** | `@astropub/icons/AspectRatio` | ![Aspect Ratio](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/aspect-ratio.svg) |
| **Avatar** | `@astropub/icons/Avatar` | ![Avatar](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/avatar.svg) |
| **Backpack** | `@astropub/icons/Backpack` | ![Backpack](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/backpack.svg) |
| **Badge** | `@astropub/icons/Badge` | ![Badge](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/badge.svg) |
| **Bar Chart** | `@astropub/icons/BarChart` | ![Bar Chart](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/bar-chart.svg) |
| **Bell** | `@astropub/icons/Bell` | ![Bell](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/bell.svg) |
| **Blending Mode** | `@astropub/icons/BlendingMode` | ![Blending Mode](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/blending-mode.svg) |
| **Bookmark** | `@astropub/icons/Bookmark` | ![Bookmark](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/bookmark.svg) |
| **Border All** | `@astropub/icons/BorderAll` | ![Border All](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-all.svg) |
| **Border Bottom** | `@astropub/icons/BorderBottom` | ![Border Bottom](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-bottom.svg) |
| **Border Dashed** | `@astropub/icons/BorderDashed` | ![Border Dashed](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-dashed.svg) |
| **Border Dotted** | `@astropub/icons/BorderDotted` | ![Border Dotted](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-dotted.svg) |
| **Border Left** | `@astropub/icons/BorderLeft` | ![Border Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-left.svg) |
| **Border None** | `@astropub/icons/BorderNone` | ![Border None](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-none.svg) |
| **Border Right** | `@astropub/icons/BorderRight` | ![Border Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-right.svg) |
| **Border Solid** | `@astropub/icons/BorderSolid` | ![Border Solid](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-solid.svg) |
| **Border Split** | `@astropub/icons/BorderSplit` | ![Border Split](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-split.svg) |
| **Border Style** | `@astropub/icons/BorderStyle` | ![Border Style](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-style.svg) |
| **Border Top** | `@astropub/icons/BorderTop` | ![Border Top](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/border-top.svg) |
| **Box Model** | `@astropub/icons/BoxModel` | ![Box Model](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/box-model.svg) |
| **Box** | `@astropub/icons/Box` | ![Box](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/box.svg) |
| **Button** | `@astropub/icons/Button` | ![Button](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/button.svg) |
| **Calendar** | `@astropub/icons/Calendar` | ![Calendar](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/calendar.svg) |
| **Camera** | `@astropub/icons/Camera` | ![Camera](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/camera.svg) |
| **Card Stack Minus** | `@astropub/icons/CardStackMinus` | ![Card Stack Minus](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/card-stack-minus.svg) |
| **Card Stack Plus** | `@astropub/icons/CardStackPlus` | ![Card Stack Plus](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/card-stack-plus.svg) |
| **Card Stack** | `@astropub/icons/CardStack` | ![Card Stack](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/card-stack.svg) |
| **Caret Down** | `@astropub/icons/CaretDown` | ![Caret Down](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/caret-down.svg) |
| **Caret Left** | `@astropub/icons/CaretLeft` | ![Caret Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/caret-left.svg) |
| **Caret Right** | `@astropub/icons/CaretRight` | ![Caret Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/caret-right.svg) |
| **Caret Sort** | `@astropub/icons/CaretSort` | ![Caret Sort](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/caret-sort.svg) |
| **Caret Up** | `@astropub/icons/CaretUp` | ![Caret Up](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/caret-up.svg) |
| **Chat Bubble** | `@astropub/icons/ChatBubble` | ![Chat Bubble](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/chat-bubble.svg) |
| **Check Circled** | `@astropub/icons/CheckCircled` | ![Check Circled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/check-circled.svg) |
| **Check** | `@astropub/icons/Check` | ![Check](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/check.svg) |
| **Checkbox** | `@astropub/icons/Checkbox` | ![Checkbox](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/checkbox.svg) |
| **Chevron Down** | `@astropub/icons/ChevronDown` | ![Chevron Down](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/chevron-down.svg) |
| **Chevron Left** | `@astropub/icons/ChevronLeft` | ![Chevron Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/chevron-left.svg) |
| **Chevron Right** | `@astropub/icons/ChevronRight` | ![Chevron Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/chevron-right.svg) |
| **Chevron Up** | `@astropub/icons/ChevronUp` | ![Chevron Up](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/chevron-up.svg) |
| **Circle Backslash** | `@astropub/icons/CircleBackslash` | ![Circle Backslash](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/circle-backslash.svg) |
| **Circle** | `@astropub/icons/Circle` | ![Circle](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/circle.svg) |
| **Clipboard Copy** | `@astropub/icons/ClipboardCopy` | ![Clipboard Copy](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/clipboard-copy.svg) |
| **Clipboard** | `@astropub/icons/Clipboard` | ![Clipboard](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/clipboard.svg) |
| **Clock** | `@astropub/icons/Clock` | ![Clock](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/clock.svg) |
| **Code** | `@astropub/icons/Code` | ![Code](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/code.svg) |
| **CodeSandbox Logo** | `@astropub/icons/CodeSandboxLogo` | ![CodeSandbox Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/codesandbox-logo.svg) |
| **Column Spacing** | `@astropub/icons/ColumnSpacing` | ![Column Spacing](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/column-spacing.svg) |
| **Columns** | `@astropub/icons/Columns` | ![Columns](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/columns.svg) |
| **Commit** | `@astropub/icons/Commit` | ![Commit](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/commit.svg) |
| **Component 1** | `@astropub/icons/Component1` | ![Component 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/component-1.svg) |
| **Component 2** | `@astropub/icons/Component2` | ![Component 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/component-2.svg) |
| **Component Boolean** | `@astropub/icons/ComponentBoolean` | ![Component Boolean](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/component-boolean.svg) |
| **Component Instance** | `@astropub/icons/ComponentInstance` | ![Component Instance](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/component-instance.svg) |
| **Component None** | `@astropub/icons/ComponentNone` | ![Component None](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/component-none.svg) |
| **Component Placeholder** | `@astropub/icons/ComponentPlaceholder` | ![Component Placeholder](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/component-placeholder.svg) |
| **Container** | `@astropub/icons/Container` | ![Container](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/container.svg) |
| **Cookie** | `@astropub/icons/Cookie` | ![Cookie](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/cookie.svg) |
| **Copy** | `@astropub/icons/Copy` | ![Copy](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/copy.svg) |
| **Corner Bottom Left** | `@astropub/icons/CornerBottomLeft` | ![Corner Bottom Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/corner-bottom-left.svg) |
| **Corner Bottom Right** | `@astropub/icons/CornerBottomRight` | ![Corner Bottom Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/corner-bottom-right.svg) |
| **Corner Top Left** | `@astropub/icons/CornerTopLeft` | ![Corner Top Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/corner-top-left.svg) |
| **Corner Top Right** | `@astropub/icons/CornerTopRight` | ![Corner Top Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/corner-top-right.svg) |
| **Corners** | `@astropub/icons/Corners` | ![Corners](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/corners.svg) |
| **Countdown Timer** | `@astropub/icons/CountdownTimer` | ![Countdown Timer](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/countdown-timer.svg) |
| **Counter Clockwise Clock** | `@astropub/icons/CounterClockwiseClock` | ![Counter Clockwise Clock](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/counter-clockwise-clock.svg) |
| **Crop** | `@astropub/icons/Crop` | ![Crop](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/crop.svg) |
| **Cross 1** | `@astropub/icons/Cross1` | ![Cross 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/cross-1.svg) |
| **Cross 2** | `@astropub/icons/Cross2` | ![Cross 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/cross-2.svg) |
| **Cross Circled** | `@astropub/icons/CrossCircled` | ![Cross Circled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/cross-circled.svg) |
| **Crosshair 1** | `@astropub/icons/Crosshair1` | ![Crosshair 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/crosshair-1.svg) |
| **Crosshair 2** | `@astropub/icons/Crosshair2` | ![Crosshair 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/crosshair-2.svg) |
| **Crumpled Paper** | `@astropub/icons/CrumpledPaper` | ![Crumpled Paper](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/crumpled-paper.svg) |
| **Cube** | `@astropub/icons/Cube` | ![Cube](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/cube.svg) |
| **Cursor Arrow** | `@astropub/icons/CursorArrow` | ![Cursor Arrow](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/cursor-arrow.svg) |
| **Cursor Text** | `@astropub/icons/CursorText` | ![Cursor Text](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/cursor-text.svg) |
| **Dash** | `@astropub/icons/Dash` | ![Dash](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dash.svg) |
| **Dashboard** | `@astropub/icons/Dashboard` | ![Dashboard](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dashboard.svg) |
| **Dimensions** | `@astropub/icons/Dimensions` | ![Dimensions](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dimensions.svg) |
| **Disc** | `@astropub/icons/Disc` | ![Disc](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/disc.svg) |
| **Divider Horizontal** | `@astropub/icons/DividerHorizontal` | ![Divider Horizontal](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/divider-horizontal.svg) |
| **Divider Vertical** | `@astropub/icons/DividerVertical` | ![Divider Vertical](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/divider-vertical.svg) |
| **Dot Filled** | `@astropub/icons/DotFilled` | ![Dot Filled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dot-filled.svg) |
| **Dot** | `@astropub/icons/Dot` | ![Dot](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dot.svg) |
| **Dots Horizontal** | `@astropub/icons/DotsHorizontal` | ![Dots Horizontal](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dots-horizontal.svg) |
| **Dots Vertical** | `@astropub/icons/DotsVertical` | ![Dots Vertical](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dots-vertical.svg) |
| **Double Arrow Down** | `@astropub/icons/DoubleArrowDown` | ![Double Arrow Down](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/double-arrow-down.svg) |
| **Double Arrow Left** | `@astropub/icons/DoubleArrowLeft` | ![Double Arrow Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/double-arrow-left.svg) |
| **Double Arrow Right** | `@astropub/icons/DoubleArrowRight` | ![Double Arrow Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/double-arrow-right.svg) |
| **Double Arrow Up** | `@astropub/icons/DoubleArrowUp` | ![Double Arrow Up](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/double-arrow-up.svg) |
| **Download** | `@astropub/icons/Download` | ![Download](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/download.svg) |
| **Drag Handle Dots 1** | `@astropub/icons/DragHandleDots1` | ![Drag Handle Dots 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/drag-handle-dots-1.svg) |
| **Drag Handle Dots 2** | `@astropub/icons/DragHandleDots2` | ![Drag Handle Dots 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/drag-handle-dots-2.svg) |
| **Drag Handle Horizontal** | `@astropub/icons/DragHandleHorizontal` | ![Drag Handle Horizontal](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/drag-handle-horizontal.svg) |
| **Drag Handle Vertical** | `@astropub/icons/DragHandleVertical` | ![Drag Handle Vertical](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/drag-handle-vertical.svg) |
| **Drawing Pin Filled** | `@astropub/icons/DrawingPinFilled` | ![Drawing Pin Filled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/drawing-pin-filled.svg) |
| **Drawing Pin** | `@astropub/icons/DrawingPin` | ![Drawing Pin](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/drawing-pin.svg) |
| **Dropdown Menu** | `@astropub/icons/DropdownMenu` | ![Dropdown Menu](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/dropdown-menu.svg) |
| **Enter Full Screen** | `@astropub/icons/EnterFullScreen` | ![Enter Full Screen](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/enter-full-screen.svg) |
| **Enter** | `@astropub/icons/Enter` | ![Enter](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/enter.svg) |
| **Envelope Closed** | `@astropub/icons/EnvelopeClosed` | ![Envelope Closed](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/envelope-closed.svg) |
| **Envelope Open** | `@astropub/icons/EnvelopeOpen` | ![Envelope Open](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/envelope-open.svg) |
| **Exclamation Triangle** | `@astropub/icons/ExclamationTriangle` | ![Exclamation Triangle](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/exclamation-triangle.svg) |
| **Exit Full Screen** | `@astropub/icons/ExitFullScreen` | ![Exit Full Screen](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/exit-full-screen.svg) |
| **Exit** | `@astropub/icons/Exit` | ![Exit](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/exit.svg) |
| **External Link** | `@astropub/icons/ExternalLink` | ![External Link](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/external-link.svg) |
| **Eye Closed** | `@astropub/icons/EyeClosed` | ![Eye Closed](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/eye-closed.svg) |
| **Eye None** | `@astropub/icons/EyeNone` | ![Eye None](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/eye-none.svg) |
| **Eye Open** | `@astropub/icons/EyeOpen` | ![Eye Open](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/eye-open.svg) |
| **Face** | `@astropub/icons/Face` | ![Face](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/face.svg) |
| **Figma Logo** | `@astropub/icons/FigmaLogo` | ![Figma Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/figma-logo.svg) |
| **File Minus** | `@astropub/icons/FileMinus` | ![File Minus](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/file-minus.svg) |
| **File Plus** | `@astropub/icons/FilePlus` | ![File Plus](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/file-plus.svg) |
| **File Text** | `@astropub/icons/FileText` | ![File Text](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/file-text.svg) |
| **File** | `@astropub/icons/File` | ![File](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/file.svg) |
| **Font Bold** | `@astropub/icons/FontBold` | ![Font Bold](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/font-bold.svg) |
| **Font Family** | `@astropub/icons/FontFamily` | ![Font Family](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/font-family.svg) |
| **Font Italic** | `@astropub/icons/FontItalic` | ![Font Italic](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/font-italic.svg) |
| **Font Roman** | `@astropub/icons/FontRoman` | ![Font Roman](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/font-roman.svg) |
| **Font Size** | `@astropub/icons/FontSize` | ![Font Size](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/font-size.svg) |
| **Font Style** | `@astropub/icons/FontStyle` | ![Font Style](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/font-style.svg) |
| **Frame** | `@astropub/icons/Frame` | ![Frame](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/frame.svg) |
| **Framer Logo** | `@astropub/icons/FramerLogo` | ![Framer Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/framer-logo.svg) |
| **Gear** | `@astropub/icons/Gear` | ![Gear](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/gear.svg) |
| **GitHub Logo** | `@astropub/icons/GitHubLogo` | ![GitHub Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/github-logo.svg) |
| **Globe** | `@astropub/icons/Globe` | ![Globe](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/globe.svg) |
| **Grid** | `@astropub/icons/Grid` | ![Grid](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/grid.svg) |
| **Group** | `@astropub/icons/Group` | ![Group](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/group.svg) |
| **Half 1** | `@astropub/icons/Half1` | ![Half 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/half-1.svg) |
| **Half 2** | `@astropub/icons/Half2` | ![Half 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/half-2.svg) |
| **Hamburger Menu** | `@astropub/icons/HamburgerMenu` | ![Hamburger Menu](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/hamburger-menu.svg) |
| **Hand** | `@astropub/icons/Hand` | ![Hand](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/hand.svg) |
| **Heading** | `@astropub/icons/Heading` | ![Heading](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/heading.svg) |
| **Height** | `@astropub/icons/Height` | ![Height](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/height.svg) |
| **Home** | `@astropub/icons/Home` | ![Home](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/home.svg) |
| **IconJar Logo** | `@astropub/icons/IconJarLogo` | ![IconJar Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/iconjar-logo.svg) |
| **Id Card** | `@astropub/icons/IdCard` | ![Id Card](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/id-card.svg) |
| **Image** | `@astropub/icons/Image` | ![Image](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/image.svg) |
| **Info Circled** | `@astropub/icons/InfoCircled` | ![Info Circled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/info-circled.svg) |
| **Input** | `@astropub/icons/Input` | ![Input](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/input.svg) |
| **Lap Timer** | `@astropub/icons/LapTimer` | ![Lap Timer](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/lap-timer.svg) |
| **Layers** | `@astropub/icons/Layers` | ![Layers](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/layers.svg) |
| **Layout** | `@astropub/icons/Layout` | ![Layout](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/layout.svg) |
| **Letter Case Capitalize** | `@astropub/icons/LetterCaseCapitalize` | ![Letter Case Capitalize](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/letter-case-capitalize.svg) |
| **Letter Case Lowercase** | `@astropub/icons/LetterCaseLowercase` | ![Letter Case Lowercase](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/letter-case-lowercase.svg) |
| **Letter Case Toggle** | `@astropub/icons/LetterCaseToggle` | ![Letter Case Toggle](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/letter-case-toggle.svg) |
| **Letter Case Uppercase** | `@astropub/icons/LetterCaseUppercase` | ![Letter Case Uppercase](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/letter-case-uppercase.svg) |
| **Letter Spacing** | `@astropub/icons/LetterSpacing` | ![Letter Spacing](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/letter-spacing.svg) |
| **Lightning Bolt** | `@astropub/icons/LightningBolt` | ![Lightning Bolt](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/lightning-bolt.svg) |
| **Line Height** | `@astropub/icons/LineHeight` | ![Line Height](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/line-height.svg) |
| **Link 1** | `@astropub/icons/Link1` | ![Link 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/link-1.svg) |
| **Link 2** | `@astropub/icons/Link2` | ![Link 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/link-2.svg) |
| **Link Break 1** | `@astropub/icons/LinkBreak1` | ![Link Break 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/link-break-1.svg) |
| **Link Break 2** | `@astropub/icons/LinkBreak2` | ![Link Break 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/link-break-2.svg) |
| **Link None 1** | `@astropub/icons/LinkNone1` | ![Link None 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/link-none-1.svg) |
| **Link None 2** | `@astropub/icons/LinkNone2` | ![Link None 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/link-none-2.svg) |
| **List Bullet** | `@astropub/icons/ListBullet` | ![List Bullet](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/list-bullet.svg) |
| **Lock Closed** | `@astropub/icons/LockClosed` | ![Lock Closed](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/lock-closed.svg) |
| **Lock Open 1** | `@astropub/icons/LockOpen1` | ![Lock Open 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/lock-open-1.svg) |
| **Lock Open 2** | `@astropub/icons/LockOpen2` | ![Lock Open 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/lock-open-2.svg) |
| **Loop** | `@astropub/icons/Loop` | ![Loop](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/loop.svg) |
| **Magic Wand** | `@astropub/icons/MagicWand` | ![Magic Wand](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/magic-wand.svg) |
| **Magnifying Glass** | `@astropub/icons/MagnifyingGlass` | ![Magnifying Glass](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/magnifying-glass.svg) |
| **Margin** | `@astropub/icons/Margin` | ![Margin](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/margin.svg) |
| **Mask Off** | `@astropub/icons/MaskOff` | ![Mask Off](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/mask-off.svg) |
| **Mask On** | `@astropub/icons/MaskOn` | ![Mask On](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/mask-on.svg) |
| **Minus Circled** | `@astropub/icons/MinusCircled` | ![Minus Circled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/minus-circled.svg) |
| **Minus** | `@astropub/icons/Minus` | ![Minus](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/minus.svg) |
| **Mix** | `@astropub/icons/Mix` | ![Mix](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/mix.svg) |
| **Mixer Horizontal** | `@astropub/icons/MixerHorizontal` | ![Mixer Horizontal](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/mixer-horizontal.svg) |
| **Mixer Vertical** | `@astropub/icons/MixerVertical` | ![Mixer Vertical](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/mixer-vertical.svg) |
| **Modulz Logo** | `@astropub/icons/ModulzLogo` | ![Modulz Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/modulz-logo.svg) |
| **Moon** | `@astropub/icons/Moon` | ![Moon](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/moon.svg) |
| **Move** | `@astropub/icons/Move` | ![Move](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/move.svg) |
| **Notion Logo** | `@astropub/icons/NotionLogo` | ![Notion Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/notion-logo.svg) |
| **Opacity** | `@astropub/icons/Opacity` | ![Opacity](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/opacity.svg) |
| **Overline** | `@astropub/icons/Overline` | ![Overline](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/overline.svg) |
| **Padding** | `@astropub/icons/Padding` | ![Padding](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/padding.svg) |
| **Paper Plane** | `@astropub/icons/PaperPlane` | ![Paper Plane](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/paper-plane.svg) |
| **Pause** | `@astropub/icons/Pause` | ![Pause](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pause.svg) |
| **Pencil 1** | `@astropub/icons/Pencil1` | ![Pencil 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pencil-1.svg) |
| **Pencil 2** | `@astropub/icons/Pencil2` | ![Pencil 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pencil-2.svg) |
| **Person** | `@astropub/icons/Person` | ![Person](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/person.svg) |
| **Pie Chart** | `@astropub/icons/PieChart` | ![Pie Chart](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pie-chart.svg) |
| **Pilcrow** | `@astropub/icons/Pilcrow` | ![Pilcrow](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pilcrow.svg) |
| **Pin Bottom** | `@astropub/icons/PinBottom` | ![Pin Bottom](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pin-bottom.svg) |
| **Pin Left** | `@astropub/icons/PinLeft` | ![Pin Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pin-left.svg) |
| **Pin Right** | `@astropub/icons/PinRight` | ![Pin Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pin-right.svg) |
| **Pin Top** | `@astropub/icons/PinTop` | ![Pin Top](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/pin-top.svg) |
| **Play** | `@astropub/icons/Play` | ![Play](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/play.svg) |
| **Plus Circled** | `@astropub/icons/PlusCircled` | ![Plus Circled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/plus-circled.svg) |
| **Plus** | `@astropub/icons/Plus` | ![Plus](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/plus.svg) |
| **Question Mark Circled** | `@astropub/icons/QuestionMarkCircled` | ![Question Mark Circled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/question-mark-circled.svg) |
| **Question Mark** | `@astropub/icons/QuestionMark` | ![Question Mark](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/question-mark.svg) |
| **Quote** | `@astropub/icons/Quote` | ![Quote](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/quote.svg) |
| **Radiobutton** | `@astropub/icons/Radiobutton` | ![Radiobutton](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/radiobutton.svg) |
| **Reader** | `@astropub/icons/Reader` | ![Reader](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/reader.svg) |
| **Reload** | `@astropub/icons/Reload` | ![Reload](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/reload.svg) |
| **Reset** | `@astropub/icons/Reset` | ![Reset](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/reset.svg) |
| **Resume** | `@astropub/icons/Resume` | ![Resume](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/resume.svg) |
| **Rocket** | `@astropub/icons/Rocket` | ![Rocket](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/rocket.svg) |
| **Rotate Counter Clockwise** | `@astropub/icons/RotateCounterClockwise` | ![Rotate Counter Clockwise](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/rotate-counter-clockwise.svg) |
| **Row Spacing** | `@astropub/icons/RowSpacing` | ![Row Spacing](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/row-spacing.svg) |
| **Rows** | `@astropub/icons/Rows` | ![Rows](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/rows.svg) |
| **Ruler Horizontal** | `@astropub/icons/RulerHorizontal` | ![Ruler Horizontal](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/ruler-horizontal.svg) |
| **Ruler Square** | `@astropub/icons/RulerSquare` | ![Ruler Square](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/ruler-square.svg) |
| **Section** | `@astropub/icons/Section` | ![Section](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/section.svg) |
| **Sewing Pin Filled** | `@astropub/icons/SewingPinFilled` | ![Sewing Pin Filled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/sewing-pin-filled.svg) |
| **Sewing Pin** | `@astropub/icons/SewingPin` | ![Sewing Pin](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/sewing-pin.svg) |
| **Shadow Inner** | `@astropub/icons/ShadowInner` | ![Shadow Inner](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/shadow-inner.svg) |
| **Shadow None** | `@astropub/icons/ShadowNone` | ![Shadow None](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/shadow-none.svg) |
| **Shadow Outer** | `@astropub/icons/ShadowOuter` | ![Shadow Outer](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/shadow-outer.svg) |
| **Shadow** | `@astropub/icons/Shadow` | ![Shadow](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/shadow.svg) |
| **Share 1** | `@astropub/icons/Share1` | ![Share 1](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/share-1.svg) |
| **Share 2** | `@astropub/icons/Share2` | ![Share 2](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/share-2.svg) |
| **Shuffle** | `@astropub/icons/Shuffle` | ![Shuffle](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/shuffle.svg) |
| **Size** | `@astropub/icons/Size` | ![Size](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/size.svg) |
| **Sketch Logo** | `@astropub/icons/SketchLogo` | ![Sketch Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/sketch-logo.svg) |
| **Slash** | `@astropub/icons/Slash` | ![Slash](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/slash.svg) |
| **Slider** | `@astropub/icons/Slider` | ![Slider](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/slider.svg) |
| **Space Between Horizontally** | `@astropub/icons/SpaceBetweenHorizontally` | ![Space Between Horizontally](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/space-between-horizontally.svg) |
| **Space Between Vertically** | `@astropub/icons/SpaceBetweenVertically` | ![Space Between Vertically](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/space-between-vertically.svg) |
| **Space Evenly Horizontally** | `@astropub/icons/SpaceEvenlyHorizontally` | ![Space Evenly Horizontally](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/space-evenly-horizontally.svg) |
| **Space Evenly Vertically** | `@astropub/icons/SpaceEvenlyVertically` | ![Space Evenly Vertically](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/space-evenly-vertically.svg) |
| **Speaker Loud** | `@astropub/icons/SpeakerLoud` | ![Speaker Loud](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/speaker-loud.svg) |
| **Speaker Moderate** | `@astropub/icons/SpeakerModerate` | ![Speaker Moderate](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/speaker-moderate.svg) |
| **Speaker Off** | `@astropub/icons/SpeakerOff` | ![Speaker Off](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/speaker-off.svg) |
| **Speaker Quiet** | `@astropub/icons/SpeakerQuiet` | ![Speaker Quiet](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/speaker-quiet.svg) |
| **Square** | `@astropub/icons/Square` | ![Square](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/square.svg) |
| **Stack** | `@astropub/icons/Stack` | ![Stack](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/stack.svg) |
| **Star Filled** | `@astropub/icons/StarFilled` | ![Star Filled](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/star-filled.svg) |
| **Star** | `@astropub/icons/Star` | ![Star](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/star.svg) |
| **Stitches Logo** | `@astropub/icons/StitchesLogo` | ![Stitches Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/stitches-logo.svg) |
| **Stop** | `@astropub/icons/Stop` | ![Stop](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/stop.svg) |
| **Stopwatch** | `@astropub/icons/Stopwatch` | ![Stopwatch](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/stopwatch.svg) |
| **Stretch Horizontally** | `@astropub/icons/StretchHorizontally` | ![Stretch Horizontally](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/stretch-horizontally.svg) |
| **Stretch Vertically** | `@astropub/icons/StretchVertically` | ![Stretch Vertically](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/stretch-vertically.svg) |
| **Strikethrough** | `@astropub/icons/Strikethrough` | ![Strikethrough](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/strikethrough.svg) |
| **Sun** | `@astropub/icons/Sun` | ![Sun](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/sun.svg) |
| **Switch** | `@astropub/icons/Switch` | ![Switch](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/switch.svg) |
| **Symbol** | `@astropub/icons/Symbol` | ![Symbol](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/symbol.svg) |
| **Table** | `@astropub/icons/Table` | ![Table](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/table.svg) |
| **Target** | `@astropub/icons/Target` | ![Target](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/target.svg) |
| **Text Align Center** | `@astropub/icons/TextAlignCenter` | ![Text Align Center](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/text-align-center.svg) |
| **Text Align Justify** | `@astropub/icons/TextAlignJustify` | ![Text Align Justify](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/text-align-justify.svg) |
| **Text Align Left** | `@astropub/icons/TextAlignLeft` | ![Text Align Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/text-align-left.svg) |
| **Text Align Right** | `@astropub/icons/TextAlignRight` | ![Text Align Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/text-align-right.svg) |
| **Text None** | `@astropub/icons/TextNone` | ![Text None](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/text-none.svg) |
| **Text** | `@astropub/icons/Text` | ![Text](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/text.svg) |
| **Thick Arrow Down** | `@astropub/icons/ThickArrowDown` | ![Thick Arrow Down](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/thick-arrow-down.svg) |
| **Thick Arrow Left** | `@astropub/icons/ThickArrowLeft` | ![Thick Arrow Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/thick-arrow-left.svg) |
| **Thick Arrow Right** | `@astropub/icons/ThickArrowRight` | ![Thick Arrow Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/thick-arrow-right.svg) |
| **Thick Arrow Up** | `@astropub/icons/ThickArrowUp` | ![Thick Arrow Up](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/thick-arrow-up.svg) |
| **Timer** | `@astropub/icons/Timer` | ![Timer](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/timer.svg) |
| **Tokens** | `@astropub/icons/Tokens` | ![Tokens](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/tokens.svg) |
| **Track Next** | `@astropub/icons/TrackNext` | ![Track Next](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/track-next.svg) |
| **Track Previous** | `@astropub/icons/TrackPrevious` | ![Track Previous](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/track-previous.svg) |
| **Transparency Grid** | `@astropub/icons/TransparencyGrid` | ![Transparency Grid](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/transparency-grid.svg) |
| **Trash** | `@astropub/icons/Trash` | ![Trash](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/trash.svg) |
| **Triangle Down** | `@astropub/icons/TriangleDown` | ![Triangle Down](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/triangle-down.svg) |
| **Triangle Left** | `@astropub/icons/TriangleLeft` | ![Triangle Left](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/triangle-left.svg) |
| **Triangle Right** | `@astropub/icons/TriangleRight` | ![Triangle Right](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/triangle-right.svg) |
| **Triangle Up** | `@astropub/icons/TriangleUp` | ![Triangle Up](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/triangle-up.svg) |
| **Twitter Logo** | `@astropub/icons/TwitterLogo` | ![Twitter Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/twitter-logo.svg) |
| **Underline** | `@astropub/icons/Underline` | ![Underline](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/underline.svg) |
| **Update** | `@astropub/icons/Update` | ![Update](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/update.svg) |
| **Upload** | `@astropub/icons/Upload` | ![Upload](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/upload.svg) |
| **Value None** | `@astropub/icons/ValueNone` | ![Value None](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/value-none.svg) |
| **Value** | `@astropub/icons/Value` | ![Value](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/value.svg) |
| **Vercel Logo** | `@astropub/icons/VercelLogo` | ![Vercel Logo](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/vercel-logo.svg) |
| **Video** | `@astropub/icons/Video` | ![Video](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/video.svg) |
| **View Grid** | `@astropub/icons/ViewGrid` | ![View Grid](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/view-grid.svg) |
| **View Horizontal** | `@astropub/icons/ViewHorizontal` | ![View Horizontal](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/view-horizontal.svg) |
| **View None** | `@astropub/icons/ViewNone` | ![View None](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/view-none.svg) |
| **View Vertical** | `@astropub/icons/ViewVertical` | ![View Vertical](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/view-vertical.svg) |
| **Width** | `@astropub/icons/Width` | ![Width](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/width.svg) |
| **Zoom In** | `@astropub/icons/ZoomIn` | ![Zoom In](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/zoom-in.svg) |
| **Zoom Out** | `@astropub/icons/ZoomOut` | ![Zoom Out](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/zoom-out.svg) |

<!-- :ICON_STATS -->

---



## License

Licensed under the MIT License. Copyright © 2020–present Modulz.
