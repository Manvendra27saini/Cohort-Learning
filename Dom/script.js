function addTodo() {
  const inputElement = document.querySelector('input');
  const todo = inputElement.value;
  console.log(todo);
}

function updateTodo() {
  const inputElement = document.querySelectorAll('h4')[1];
  inputElement.innerHTML = "updated";
  console.log(inputElement.innerHTML);
}

function updateCount() {
  const h4Element = document.querySelectorAll('h4')[1];
  const intervalId = setInterval(() => {
    let currentCount = parseInt(h4Element.innerHTML, 10);
    if (currentCount >= 50) {
      clearInterval(intervalId);
    } else {
      h4Element.innerHTML = currentCount + 1;
    }
  }, 1000);
}

updateCount();