export async function adminLoader({ params }: any) {
  const user = localStorage.getItem("user");

  if (user) {
    const userData = JSON.parse(user);
    if (userData.isAdmin) {
      return true;
    }
  }
  throw new Response("", {
    status: 404,
    statusText: "Not Found",
  });
}

export async function userLoader({ params }: any) {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  throw new Response("", {
    status: 404,
    statusText: "Not Found",
  });
}
