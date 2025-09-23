// Fetch data from placeholder API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector("#userTable tbody");

    data.forEach(user => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error("Error fetching data:", error));