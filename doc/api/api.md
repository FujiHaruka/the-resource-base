# the-resource-base@1.0.1

Base of the-resource

+ Functions
  + [create(args)](#the-resource-base-function-create)
  + [listenMix()](#the-resource-base-function-listen-mix)
  + [listenToCreate(onCreate)](#the-resource-base-function-listen-to-create)
  + [listenToUpdate(onUpdate)](#the-resource-base-function-listen-to-update)
  + [listenToDestroy(onDestroy)](#the-resource-base-function-listen-to-destroy)
  + [listenToDrop(onDrop)](#the-resource-base-function-listen-to-drop)
+ [`TheResource`](#the-resource-base-classes) Class
  + [new TheResource()](#the-resource-base-classes-the-resource-constructor)

## Functions

<a class='md-heading-link' name="the-resource-base-function-create" ></a>

### create(args) -> `TheResource`

Create a TheResource instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |

<a class='md-heading-link' name="the-resource-base-function-listen-mix" ></a>

### listenMix()

Mixins for listen
<a class='md-heading-link' name="the-resource-base-function-listen-to-create" ></a>

### listenToCreate(onCreate) -> `function`

Listen to create

| Param | Type | Description |
| ----- | --- | -------- |
| onCreate | function |  |

<a class='md-heading-link' name="the-resource-base-function-listen-to-update" ></a>

### listenToUpdate(onUpdate) -> `function`

Listen to update

| Param | Type | Description |
| ----- | --- | -------- |
| onUpdate | function |  |

<a class='md-heading-link' name="the-resource-base-function-listen-to-destroy" ></a>

### listenToDestroy(onDestroy) -> `function`

Listen to destroy

| Param | Type | Description |
| ----- | --- | -------- |
| onDestroy | function |  |

<a class='md-heading-link' name="the-resource-base-function-listen-to-drop" ></a>

### listenToDrop(onDrop) -> `function`

Listen to drop

| Param | Type | Description |
| ----- | --- | -------- |
| onDrop | function |  |



<a class='md-heading-link' name="the-resource-base-classes"></a>

## `TheResource` Class

Resource for the DB

**Extends**: 

+ `ClayResource`


+ `ListenMixed`



<a class='md-heading-link' name="the-resource-base-classes-the-resource-constructor" ></a>

### new TheResource()

Constructor of TheResource class





