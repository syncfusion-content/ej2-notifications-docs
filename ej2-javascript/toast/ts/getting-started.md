---
layout: post
title: Getting started with ##Platform_Name## Toast control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Toast control

This section explains the steps required to create the toast control using TypeScript and configure its properties using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the toast control in your application:

```js
|-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Add toast to the Application

The toast message can be rendered by defining an `title` or `content`.

* Add an HTML div tag with its `id` attribute as `element` in your `index.html` file to initialize the toast control.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Toast</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
</head>

<body>
    <div style="margin: 50px;">
        <!--element which is going to render-->
        <div id="element"></div>
    </div>

</body>

</html>
```

* Import the toast control to your `app.ts` file, and initialize it to the `#element` as shown.

`[src/app/app.ts]`

```ts

import { Toast } from '@syncfusion/ej2-notifications';

// Initialize Toast component
let toast: Toast = new Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept'
});

// Render initialized Toast
toast.appendTo('#element');

```

## Running the application

* Run the application in the browser using the following command.

```
npm start
```

Output will be as follows:

> In the example, the `#element` is the `id` of the HTML element in a page to which the toast is initialized.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/toast/toast-cs10" %}

## See Also

* [How to close the toast with click/tap](./how-to/close-the-toast-with-click-tap/)
* [How to prevent duplicate toast display](./how-to/prevent-duplicate-toast-display/)
* [How to show different types of toast](./how-to/show-different-types-of-toast/)
