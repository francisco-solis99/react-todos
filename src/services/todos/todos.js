const API = {
  baseUrl: 'http://localhost:3001',
}


export function getTodosRequest() {
  return fetch(`${API.baseUrl}/todos`)
    .then(response => response.json())
    .catch(err => console.log(err));
}


export function updateTodoRequest(idTodo, body) {
  return fetch(`${API.baseUrl}/todos/${idTodo}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .catch(err => console.err(err));

}


export function createTodoRequest(body) {
  return fetch(`${API.baseUrl}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .catch(err => console.err(err));
}


export function deleteTodoRequest(idTodo) {
  return fetch(`${API.baseUrl}/todos/${idTodo}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(err => console.err(err));
}
