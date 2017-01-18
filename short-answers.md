# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:

 It's bad practice to use global variables because code is clearer and easier to maintain without it. Especially since it's easy to lose track of how the variable is currently defined or if you're using multiple for loops it causes you to use different counter variables for each one which can lead small errors if you are in the habit of using 'i' for all your array index references.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

A closure is when a function has access to something because it is located inside a function that has access to it.

1. What is scope? When is new scope created in JavaScript?
Answer:

Scope is the current context of your code. Two examples of scope are local and global variables. Local variables can only be accessed within the function that it is contained inside and global variable can be accessed globally. You can create new scope by using closures or using ES6 let keyword to force local scope in variables and functions.

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

A pro is that promises allow to you to make Javascript code synchronous. a con is that when chaining promises if there are error that cause one promise in the chain not to excute properly the late promises in the chain will never be activated.

1. What happens when you type a URL into a browser and hit enter?
Answer:

 When you type a url into the browser and press enter, it sends the url to a server that matches the url to it's matching ip address, then it send it back to your pc and your pc requests for the site by ip address and if the server of the website is running( and there are no other issues) the website you were trying to reach loads in your browser.
