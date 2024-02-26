const users = [];

function register(event) {
  event.preventDefault();
  const user = {};
  const formData = new FormData(event.target);
  formData.forEach((key, value) => (user[value] = key));
  users.push(user);
  event.target.reset();
}

function allUsers() {
  console.log(users);
}

function reset(event) {
  event.target.reset();
}