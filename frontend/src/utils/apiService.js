const getUserData = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export { getUserData };

const getUserActivity = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export { getUserActivity };

const getUserAverageSessions = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export { getUserAverageSessions };

const getPerformanceData = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export { getPerformanceData };
