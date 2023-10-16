---
layout: post
title: Getting started with ##Platform_Name## Progressbar control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Progressbar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Progressbar control

This section explains the steps required to create the ProgressBar control using TypeScript and configure its properties using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the ProgressBar control in your application:

```javascript
|-- @syncfusion/ej2-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data: "*"
    |-- @syncfusion/ej2-svg-base
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

## Add Progress Bar to the Application

* Add an HTML div tag with its id attribute as `element` in your `index.html` file to initialize the ProgressBar control.

`[src/index.html]`

```html

<!DOCTYPE html>
<html lang="en">

<head>
<title>Essential JS 2 ProgressBar</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<meta name="description" content="Essential JS 2" />
</head>

<body>
<!--element which is going to render-->
<div id="element"></div>
</body>

</html>
```

* Import the Progress Bar control to your `app.ts` file to instantiate a Progress Bar and append the  instance to the `#element` as shown.

`[src/app/app.ts]`

```ts

import { ProgressBar } from '@syncfusion/ej2-progressbar ';

// Initialize ProgressBar component
let ProgressBar: ProgressBar = new ProgressBar({
      value: 40
});

// Render initialized ProgressBar
ProgressBar.appendTo('#percentage');

```

## Run the application

* Run the application in the browser using the following command.

```
npm start
```

Output will be as follows:

> In the example, the `#element` is the `id` of the HTML element in a page to which the Progress Bar is initialized.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progressbar/progressbar-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progressbar/progressbar-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/progressbar/progressbar-cs13" %}