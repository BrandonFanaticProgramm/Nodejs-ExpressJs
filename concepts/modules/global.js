var someting = 'Hello World';
//console.log(window.someting); // window dont exist
global.someting = 'Hello World from global node js';
console.log(global.someting)
