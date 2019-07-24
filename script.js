/*
let promise = new Promise(function(resolve, reject){
    resolve(1);
});

promise.then(function(val){
    console.log(val);
    return val + 2;
}).then(function(val) {
    console.log(val); 
});
*/


(async () => {
    const url = 'https://my-json-server.typicode.com/typicode/demo/comments/';
    const response = await fetch(url);
    const comments = await response.json();
    const firstComment = comments[0];
    const commentData = await fetch(`${url}${firstComment.id}`);
    console.log(commentData.json());
})();
 