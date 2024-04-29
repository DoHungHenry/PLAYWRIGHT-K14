// day 9
/* 
Send api request
Process response
Verify response
Do some work
*/

const url = "https://jsonplaceholder.typicode.com/todos/1";

(async function fetchData(url) {
  const response = await fetch(url);
  console.log(await response.json());
})(url);

