// Dans src/services/userService.js
const getUserData = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export { getUserData };
