document.addEventListener("DOMContentLoaded", () => {
  const userContainer = document.getElementById("user-container");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const userName = document.createElement("h3");
        userName.textContent = user.name;
        const userEmail = document.createElement("p");
        userEmail.textContent = `Email: ${user.email}`;
        const userAddress = document.createElement("p");
        userAddress.textContent = `Місто: ${user.address.city}`;
        card.appendChild(userName);
        card.appendChild(userEmail);
        card.appendChild(userAddress);
        userContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Помилка:", error));
});
