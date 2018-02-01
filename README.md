"#README" 

The project uses NodeJS.
I prefered NodeJS, and MongoDB since they were the fastest to have up and running.
I had not recieved the email and a didn't have enough time to install PHP, Python or XAMPP on my machine.
I previously had them installed but never got to replace them after installing a new OS two weeks ago.
I'm mainly a JavaScript developer good at:
    NodeJS, AngularJS, Angular5, TypeScript, jQuery, Ionic, PhoneGap, React, Socket.io and Bootstrap.

Non-JavaScript languages and technologies I'm good at:
    Android dev using C# and Xamarin, Windows StoreApps Development, IoT (Arduino), Python, C#, SQL Server 2016.

RUNNING THE APP

The app requires a few NPM modules installed:
Express: To provide easy server funtions like routing.  "npm install express"
Body Parser: To parse url encoded objects in the request body. "npm install body-parser"
Json Web Token: A security layer that uses tokens for authentication "npm install jsonwebtoken"
Mongoose: Query our MongoDB and defining schemas for the data. "npm install mongoose"
Pug: A HTML templating engine "npm install pug"

Alternatively, go to the root of the app in CMD and type "npm i" or "npm install"
*node is required
*mongodb is also required

DEFENCE

1. I prefer using NodeJS as it is asynchronous, fast, and more scalable than PHP, Java or Python. NodeJS is also lightweight and implements Callbacks which are an integral part to ensure the app operates in a non-blocking way. A lot of hosts also support NodeJS as it is fast outpacing PHP in popularity.With Express, it's also easier to have an app quickly up and running in a few lines of code as opposed to other languages.

2. I would use React to add a Cart to add the items to, I already added the option of the admin having the capability of adding the items to the database. I would also implement a payment system using MPesa as I am familiar with using MPesa APIs. To get some money I could also add some ads from Google Ads since there is a lot of space on the app.

3. JSON webtokens use a secret key to encrypt your login information. It is very useful in making authentication for REST applications and that serve JSON data to SPAs built using Angular, React or Vue.JS. When a user log's in a token is sent to the browser and it saves it in LocalStorage. The user can then use this token in all their request where an ensureToken function ensures the token sent in the header is valid, if invalid the users are redirected to login page.
**Hit F12 key to open up dev on the browser, go to application after logging in and check to see if there is a token**

4. I used Visual Studio Code which is a lightweight code editor. I prefer VS code due to it's quick shortcuts, intergration with Git, Debugging options and Extensions for developers to play around with purely using JavaScript. Visual Studio Code extensions can be installed and uninstalled at will where a user can add extensions for syntax highlighting of new languages, quick shortcuts and functions. VS code also features it's very own terminal which can be accessed by pressing Ctrl + `, Opening and saving multiple workspaces for easy picking off from where you left off. Other VS Code like editors are Atom and Sublime Text, users can also download WebMatrix or Notepad++ for their editing. If you are looking for a fully featured IDE to make WebApps, Visual Studio 2017 would be the best choice.