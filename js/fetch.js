function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => displayData(json));
}

function displayData(data) {
  const showData = document.getElementById("showData");
  const filteredData = data.filter((user) => !!user.completed);
  filteredData.map((user) => {
    const li = document.createElement("li");
    li.innerText = user.title;
    showData.appendChild(li);
  });
  // console.log(filteredData);
  // console.log(data);
}
