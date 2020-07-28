# Protractor End-End framework setup includes,
1) NodeJS congiguration
2) IDE VS CODE Configuration
3) Allure Report setup
4) Git Integration
5) Jenkins Integration

# Project includes 
1) Test file with functionality,
Page Title has been checked 
Textboxes, Alert and buttons
2) POM(Page Object Model) for each page
3) conf file for framework and browser config
4) Allure Report and HTML Reporter
5) JSON Prop file for test data
6) cross browser testing with chrome and firefox(parallel execution)

# Miscellaneous 
1) Jasmine syntax and coding standard = https://jasmine.github.io/2.0/introduction
2) Jasmine cheat sheet = https://devhints.io/jasmine
3) Protractor API = https://www.protractortest.org/#/api?view=ProtractorBy
4) VS Code extension 
 Protractor Snippet and guidelines for protractor snippet = https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-protractor-snippets
 Code Runner

# ProtractorFrameworkProject
Node JS Installation Steps

1)	Download node js = https://nodejs.org/en/download/
2)	Install
3)	After installation to cross verify installation, give following command in cmd prompt,
$ node –v  or npm –v  or node –version

4)	By default System variables –environment variables ill contain node installation path. If not set path manually.

5)	To install protractor, give following command in cmd prompt
$npm install –g protractor

6)	To check installed protractor version, give following command in cmd prompt
$protractor –version

7)	To check for protractor installation, give following command in cmd prompt
$where protractor

8)	Webdriver manager is necessary for protractor browser execution, as it is build upon WebDriver JS. To setup webdriver manager, give following command in cmd prompt,
$webdriver-manager update

9)	By default there will be 2 files,
	Conf file – where all configuration details like browser, framework, and test location will be present
	Spec file – where test code will be present

10)	To execute default spec file(test file), In command prompt,
$cd “file path location”
$protractor conf.js

# IDE Installation Steps  IDE – VS CODE
1)	Download visual studio code = https://code.visualstudio.com/download
2)	Install VS Code
3)	In VS Code extensions menu – install support for JavaScript and TypeScript
4)	Open VS Code IDE – Go To Explorer menu – create project folder – create conf file and spec (test) file.
Hint: for easy setup for beginners: can use default conf and spec files and customize as per project.

5)	Jasmine framework will be installed by default while installing protractor.

6)	Always have to execute conf file which contains details of spec file.
	Make sure spec file location is properly mentioned in conf file.
1.	To get the location of any file in VS Code IDE,
2.	Open the file – right click – copy path or copy relative path

7)	To execute any project, Go To VS Code terminal(which is similar to command prompt)  New Terminal  following commands,
$ Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
$ protractor .\conf\conf.js
Hint : for path settings: (can use tab key to get the path)

# Allure Report Installation Steps

1)	To know the commands of allure report, Go to = https://www.npmjs.com/package/jasmine-allure-reporter

2)	To install allure report, give below command in cmd prompt,
   $ npm i –g  jasmine-allure-reporter

3)	Go to VS Code  open conf file  give the below code,

// conf.js
exports.config = {
framework: 'jasmine2',
onPrepare: function() {
var AllureReporter = require('jasmine-allure-reporter');
jasmine.getEnv().addReporter(new AllureReporter({
resultsDir: 'allure-results'
}));
}
}
4)	Allure command line tool = https://www.npmjs.com/package/allure-commandline
Go to cmd prompt, give following command,
$ npm i –g allure-commandline

Now can check the project folder for report

# HTML Reporter 

1) Install HTML reporter with following command in cmd prompt,
$ npm i -g protractor-html-reporter-2
2) details of config details be found in following page = https://www.npmjs.com/package/protractor-html-reporter-2
3) Add complete and onprepare function of reporter to confi file in VS code 

# GIT Integration Steps

GIT can be integrated in 2 ways ,
1.	Through IDE –VS Code
2.	Through cmd prompt

Steps to Integrate GIT through cmd prompt, I have used following commands,
download git in local system
create repository in github in cloud
1) $ git config --global user.name ""
2) $ git config --global user.email ""
3) move to project folder that needed to upload in git, in cmd prompt using cd...
4) $ git add * or git add "filename"
5) $ git status(optional as I need to check files are in staging)
6) $ git commit -m "message"
7) $ git remote add origin master "repo url"
8) $ git push origin master 
9) some times it shows error as if we have readme file so we have to pull that to local system and make a code push
so for that give following command before push
$ git pull origin master --unrelated histories 
