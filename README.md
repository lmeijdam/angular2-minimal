# Angular 2 Mini
A repository with the minimal set-up of an Angular 2 project. This is a short tutorial written by Lars Meijdam - 2016.


### Prerequisites
- Node.js
- Visual Studio Code (VS Code)
- Some knowledge of development
- A clear mind

## There we go
To start off with Angular 2, there a lot of tools out there already with some predefined files. I started this tutorial to clear out all extra files that basicly are not really needed for a basic Angular 2 application. 

> **Disclaimer** - This is only to start of with a 'Basic' project

To create a basic project we need to be sure Node.js is installed. To install Node.js, we navigate to the Node.js website; NODE WEBSITE.

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
> It's quite easy to use and is very lightweight. It can be downloaded HERE VSC WEBSITE.



## Creating a project
Now we've all set up, we can start creating a basic application. Navigate to any folder to your own needs and follow the first basic steps.
1. Create a new folder with a name of choice.
2. Open up Command Prompt and navigate to the created folder
3. Run following command to initialize the project for Node.js
````
    npm init -y 
````

This command will create a 'project.json' file with some default configuration for Node.js. The '-y' flag will answer yes to all questions in the proces. 

Now open the folder in your editor and directly navigate/open the 'project.json' file. 
*If you installed Visual Studio Code, you can also use the following command from the Command Prompt:*
````
    code .
````

This will open the active folder in VS Code.

Once you've opened the file, there are 3 additions that need to be made to the configuration. We firstly need to add dependencies that are necessary.

4. Please copy next piece into the 'project.json' dependencies section (if not there, copy all)
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

5. Next, we need a server and a reference to TypeScript. These are put into another section called 'devDependencies'. Please copy the following
````javascript
 "devDependencies": {
    "concurrently": "^3.1.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.10"
  },
````

> A good note on the difference between types of 'dependencies' can be found here

6. Last but not least, we want to copy some default scripts to handle some automation
````javascript
 "scripts"        : {
    "start"      : "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "lite"       : "lite-server",
    "tsc"        : "tsc",
    "tsc:w"      : "tsc -w"
  },
````

## Hello 'World'
As almost every tutorial starts off with some basic 'Hello World!' 



