(function(){
	function performGetRequestOne(){
		var getTodos = document.getElementById("getTodos");
		var resultElement = document.getElementById("getResultOne");

		getTodos.addEventListener("click", function getTodosClick(){
			axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(function todoResults(response){
				resultElement.innerHTML = generateSuccessHTMLOutput(response);
			})
			.catch(function todoErrors(error){
				resultElement.innerHTML = generateErrorHTMLOutput(error);
			});
		});
	}

	function generateSuccessHTMLOutput(response){
		return `<h4>Result:</h4>
		<h5>Status:</h5>
		<pre>${response.status + ' ' + response.statusText}</pre>
		<h5>Headers:</h5>
		<pre>${JSON.stringify(response.headers, null, '\t')}</pre>
		<h5>Data:</h5>
		<pre>${JSON.stringify(response.data, null, '\t')}</pre>`
	}

	function generateErrorHTMLOutput(error){
		return `<h4>Result:</h4>
		<h5>Message:</h5>
		<pre>${error.message}</pre>
		<h5>Status:</h5>
		<pre>${error.response.status + ' ' + error.response.statusText}</pre>
		<h5>Headers:</h5>
		<pre>${JSON.stringify(error.response.headers, null, '\t')}</pre>
		<h5>Data:</h5>
		<pre>${JSON.stringify(error.response.data, null, '\t')}</pre>`
	}

	function performGetRequestTwo(){
		var getTodoByIdBtn = document.getElementById("getTodoById");
		var resultElement = document.getElementById("getResultTwo");

		getTodoByIdBtn.addEventListener("click", function getTodosClick(){
			var todoId = document.getElementById("todoId").value;
			axios.get('https://jsonplaceholder.typicode.com/todos/', {
				params: {
					id: todoId
				}
			})
			.then(function todoResults(response){
				resultElement.innerHTML = generateSuccessHTMLOutput(response);
			})
			.catch(function todoErrors(error){
				resultElement.innerHTML = generateErrorHTMLOutput(error);
			});
		});
	}

	function performPostRequest(){
		var resultElement = document.getElementById("postResult");
		document.getElementById('todoInputForm').addEventListener("submit", function submitTodo(event){
			event.preventDefault();
			var todoTitle = document.getElementById("todoTitle").value; 
			axios.post("https://jsonplaceholder.typicode.com/todos", {
				userId: "1",
				title: todoTitle,
				completed: false
			})
			.then(function postResult(response){
				resultElement.innerHTML = generateSuccessHTMLOutput(response);
			})
			.catch(function postError(error){
				resultElement.innerHTML = generateErrorHTMLOutput(error);
			});
		});
	}

	function clearOutput(){
		var cleanButton = document.getElementById("cleanButton");
		cleanButton.addEventListener("click", function clear(){
			var resultElement = document.getElementById('getResultOne');
			resultElement.innerHTML = "";
			resultElement = document.getElementById("getResultTwo");
			resultElement.innerHTML = "";
			resultElement = document.getElementById("postResult");
			resultElement.innerHTML = "";
		});
		
	}

	performGetRequestOne();
	performGetRequestTwo();
	performPostRequest();
	clearOutput();
})();