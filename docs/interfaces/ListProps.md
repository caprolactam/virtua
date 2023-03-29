# Interface: ListProps

Props of [List](../API.md#list).

## Table of contents

### Properties

- [children](ListProps.md#children)
- [itemSize](ListProps.md#itemsize)
- [overscan](ListProps.md#overscan)
- [horizontal](ListProps.md#horizontal)
- [endThreshold](ListProps.md#endthreshold)
- [style](ListProps.md#style)
- [innerStyle](ListProps.md#innerstyle)
- [element](ListProps.md#element)
- [innerElement](ListProps.md#innerelement)
- [itemElement](ListProps.md#itemelement)
- [onEndReached](ListProps.md#onendreached)

## Properties

### children

• **children**: `ReactNode`

Elements rendered by this component.

#### Defined in

[src/List.tsx:221](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L221)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

40

#### Defined in

[src/List.tsx:226](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L226)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

6

#### Defined in

[src/List.tsx:231](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L231)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/List.tsx:235](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L235)

___

### endThreshold

• `Optional` **endThreshold**: `number`

Number of items to be the margin from the end of the scroll. See also [onEndReached](ListProps.md#onendreached).

**`Default Value`**

0

#### Defined in

[src/List.tsx:240](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L240)

___

### style

• `Optional` **style**: `CSSProperties`

Inline style prop to override style of scrollable element.

#### Defined in

[src/List.tsx:244](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L244)

___

### innerStyle

• `Optional` **innerStyle**: `CSSProperties`

Inline style prop to override style of inner element.

#### Defined in

[src/List.tsx:248](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L248)

___

### element

• `Optional` **element**: `CustomElementType`

Customized element type for scrollable element.

**`Default Value`**

"div"

#### Defined in

[src/List.tsx:253](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L253)

___

### innerElement

• `Optional` **innerElement**: `CustomElementType`

Customized element type for inner element.

**`Default Value`**

"div"

#### Defined in

[src/List.tsx:258](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L258)

___

### itemElement

• `Optional` **itemElement**: `CustomElementType`

Customized element type for item element.

**`Default Value`**

"div"

#### Defined in

[src/List.tsx:263](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L263)

___

### onEndReached

• `Optional` **onEndReached**: () => `void`

#### Type declaration

▸ (): `void`

Callback invoked when scrolling reached to the end. The margin from the end is specified by [endThreshold](ListProps.md#endthreshold).

##### Returns

`void`

#### Defined in

[src/List.tsx:267](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L267)