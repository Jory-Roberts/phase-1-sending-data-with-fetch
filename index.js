// Add your code here
const name = document.getElementById("name");

const formData = {
  name: "Steve",
  email: "steve@steve.com",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

function submitData(name, email) {
  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
      .then(data => {
          const newId = data.id;
          const newIdElement = document.createElement('p');
          newIdElement.textContent = `${newId}`;
          document.body.appendChild(newIdElement);
      })
      .catch(error => {
          const errorElement = document.createElement('p');
          errorElement.textContent = `Error: ${error}`;
          document.body.appendChild(errorElement);
   })
}
