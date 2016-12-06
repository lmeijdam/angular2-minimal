# Angular 2 Mini
A repository with the minimal set-up of an Angular 2 project. This is a short tutorial written by Lars Meijdam - 2016.


### Prerequisites
- Node.js
- Visual Studio Code (VSCode)
- Some knowledge of development
- A clear mind

## There we go
To start off with Angular 2, there a lot of tools out there already with some predefined files. I started this tutorial to clear out all extra files that basicly are not really needed for a basic Angular 2 application. 

> **Disclaimer** - This is only to start of with a 'Basic' project

To create a basic project we need to be sure Node.js is installed. To install Node.js, we navigate to the Node.js website; [https://nodejs.org/en/](https://nodejs.org/en/).

Make sure you've installed Node.js by running the following command in the Command Prompt
````
    node -v
````

This command will give you version information for the Node.js version installed.

Next we need to install TypeScript. As we are developing for Angular 2, TypeScript is the preferred language. 

> JavaScript / ES2015 is still possible to use instead of TypeScript.

To install TypeScript we run the following command in the Command Prompt
````
    npm install -g typescript
````

This will install TypeScript globally and will also make the compiler/transpiler globally accessible.

> To start developing I recommend using Visual Studio Code as editor. 
> It's quite easy to use and is very lightweight. It can be downloaded at [https://code.visualstudio.com/](https://code.visualstudio.com/).

## Creating a project
Now we've all set up, we can start creating a basic application. Navigate to any folder to your own needs and follow the first basic steps.
- Create a new folder with a name of choice.

- Open up Command Prompt and navigate to the created folder

- Run following command to initialize the project for Node.js
````
    npm init -y 
````

This command will create a 'package.json' file with some default configuration for Node.js. The '-y' flag will answer yes to all questions in the proces. 

Now open the folder in your editor and directly navigate/open the 'package.json' file. 
*If you installed Visual Studio Code, you can also use the following command from the Command Prompt:*
````
    code .
````

> This will open the active folder in VSCode. 

Once you've opened the file, there are 3 additions that need to be made to the configuration. We firstly need to add dependencies that are necessary.

- Please copy next piece into the 'package.json' dependencies section (if not there, copy all)
````javascript
    "dependencies"   : {
    "@angular/common": "~2.2.0",
    "@angular/compiler": "~2.2.0",
    "@angular/core": "~2.2.0",
    "@angular/forms": "~2.2.0",
    "@angular/http": "~2.2.0",
    "@angular/platform-browser": "~2.2.0",
    "@angular/platform-browser-dynamic": "~2.2.0",
    "@angular/router": "~3.2.0",

    "angular-in-memory-web-api": "~0.1.15",
    "systemjs": "0.19.40",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.8",
    "rxjs": "5.0.0-beta.12",
    "zone.js": "^0.6.26"
  },
````

- Next, we need a server and a reference to TypeScript. These are put into another section called 'devDependencies'. Please copy the following
````javascript
 "devDependencies": {
    "concurrently": "^3.1.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.10"
  },
````

> A good answer on the difference between types of 'dependencies' can be found [here](http://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) (first answer).

- Last but not least, we want to copy some default scripts to handle some automation
````javascript
 "scripts"        : {
    "start"      : "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "lite"       : "lite-server",
    "tsc"        : "tsc",
    "tsc:w"      : "tsc -w"
  },
````

- Now where set-up the basic packages we can install them all with the following command
````
    npm install
````

After all packages are installed, a 'node_modules' folder will be shown with all packages.

## TypeScript
To use TypeScript in the best way recommended, we need to create a 'tsconfig.json'. This file will set up the 'compiler' options for the TypeScript compiler to use.

- Create a 'tsconfig.json' file in the project folder (same level as package.json). Copy next piece of code.
````javascript
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [
      "es2015",
      "dom"
    ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  }
}
````

To get started with the 'tsconfig' file, please navigate to [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

> **For Dutch developers**; A friend and I created an introduction repository for using TypeScript. This repository can be found [here](https://github.com/lmeijdam/typescript-start).

## Handle files
To let the browser take care of requesting and serving files, we're going to use a module loader. The preferred module loader for Angular 2 is 'SystemJs'. More information can be found at the [website](https://github.com/systemjs/systemjs).

- Create a new file named 'systemjs.config.js' and paste following code into the file
````javascript
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the module loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular file references
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the module loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
````

As you can see, there will be comments added to the file. These comments will give a rough description of what it does. 

For the module loader to work accordingly we need to configure it in the 'index' of the application.
- Create a 'index.html' file with the following content
````html
<html>
    <head>
        <title>Angular 2 Mini</title>

        <!-- 1. Load libraries -->
        <!-- Polyfill(s) for older browsers -->
        <script src="node_modules/es6-shim/es6-shim.min.js"></script>

        <script src="node_modules/zone.js/dist/zone.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>
        <script src="node_modules/systemjs/dist/system.src.js"></script>

        <!-- 2. Configure SystemJS -->
        <script src="systemjs.config.js"></script>
        <script>
            System.import('app').catch(function(err){ console.error(err); });
        </script>
        
        </head>

    <!-- 3. Load the application -->
    <body>
        <my-app>
            Loading...
        </my-app>
    </body>
</html>
````

In the code above you'll see the System.import('app'). This is a reference to the 'packages' section inside of the 'systemjs.config.js' file.

## Hello 'World'!
We finally got to the part to make it a real application. As Angular 2 is Component-based, it means we work with components. These components get rendered to the view.

To start off, we will create our first component.

- Create a 'app' folder to store Angular 2 related files in.

- Create a new 'app.component.ts' file inside the 'app' folder.

- Define a component inside of the 'app.component.ts' file with following code
````javascript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{value}}</h1>`
})
export class AppComponent {
    value = "World!"
}
````

As you can see the Components' 'selector' matches the same name it uses in the 'index.html' file. Inside of the 'template' notice I use a, what so called, backtick. This way I can use multiple lines without traditional escaping with '\n'.

> If you develop with VSCode, there is a nice extension called 'Angular 2 TypeScript Snippets'. This extension follows the Angular 2 styleguide created by John Papa.

- Next step is to create a 'Module' which loads the 'top-level' Component.

- Create a new file named 'app.module.ts' and implement the following
````javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
````

For the last file we need to 'bootstrap' the Module to the browser. As we look at the 'systemjs.config.js' file we noticed the 'app' package has a 'main.js' file linked to the 'main' property. This is the entry point for the Angular 2 application to be bootstrapped.

- To get a 'main.js' file, create a 'main.ts' file inside of the 'app' folder and implement the 'bootstrap' code
````javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
````

Now we have created all of the files needed to start off with a basic Angular 2 app. We still need to test it. To test if all is working, please run the following command in the Command Prompt
````
    npm start
````

This will use the 'start' script mentioned in the 'package.json' file. It compiles all of the TypeScript files to JavaScript and you can see the '.js' files in the editor as they appear.

## A finishing touch
If you're feeling comfortable with a basic set up where you have control over all of the files with little knowledge. This tutorial is something for you. Please note that it covers a 'basic' set up.

When you're moving into more advanced projects with Angular 2, I would recommend using the [Angular CLI](https://cli.angular.io/). A Command Line interface created by the Angular team. Use it to ease the creation of project with testing already in mind. This tool already prepares a lot of files.

Next to project creation, the tool can also be used to create services, components and lots of other stuff by just the command line.

Good Luck!
Lars Meijdam





