# Angular Window Focus
Window focus/blur service that also supports callbacks.

- Did you ever have the need to simply check for window focus without doing all the blur/focus+variable binding stuff?
- Have you ever felt bad implementing such a loginc into your controllers?

Then you may have found just the *"pad"* you need!

### 2 Steps Setup & Usage

**1. Include Window Focus Module**

Include window-focus.js after angular.js and before your app code as this example shows.

```html
<script type='text/javascript' src="vendor/angular.min.js"></script>
<script type='text/javascript' src="vendor/angular-pads/window-focus.js"></script>
<script type='text/javascript' src="app/app.js"></script>
```

**2. Add Window Focus To Your App**

Simply add **pads.windowFocus** to your app depenencies.

```js
var myApp = angular.module('myApp', ['pads.windowFocus']);
```

**3. Use Window Focus**

Inject **$padswindowFocus** to a module and use it.

```js
angular.module('myApp').controller('MyCtrl', function ($scope, $padsWindowFocus) {
    if ($padsWindowFocus.has()) {
        // Do something when the window currently has focus.
    }

    $padsWindowFocus.on('focus', 'my-ctrl:focus', function () {
        // Anonymous function registered on "focus" for the given namespace.
        // The namespace allows unregistering anonymous functions as follows.
        $padsWindowFocus.off('focus', 'my-ctrl:focus');
    });

    // The same thing works with blur.
    $padsWindowFocus.on('blur', 'my-ctrl:blur', function () { });
    $padsWindowFocus.off('blur', 'my-ctrl:blur');
});
```

License
----

MIT


**Free Software for your enjoyment!**