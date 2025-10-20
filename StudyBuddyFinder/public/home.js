const API = "http://localhost:3000";

(async () => {
  const res = await fetch(`${API}/me`, { credentials: "include" });
  const data = await res.json();
  if (!res.ok) return (location.href = "public/signin.html");
  document.getElementById("welcome").textContent =
    "Welcome back, " + data.user.email + "!";
})();

async function createListing() {
  const location = document.getElementById("location").value;
  const group_size = parseInt(document.getElementById("group-size").value);
  const time = document.getElementById("time").value;
  const description = document.getElementById("description").value;

  const res = await fetch(`${API}/listings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ location, group_size, time, description }),
  });

  const data = await res.json();
  if (res.ok) {
    alert("Listing submitted!");
    console.log("Inserted:", data);
  } else {
    console.log("Error: " + data.error);
  }
}

async function getListings() {
  fetch("http://localhost:3000/listings", {
    headers: {
      Authorization: `Bearer ${user.access_token}`,
    },
  });
}

async function logout() {
  try {
    const res = await fetch(`${API}/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) throw new Error("Fail");

    localStorage.removeItem("auth");
    sessionStorage.removeItem("auth");

    window.location.replace("public/signin.html");
  } catch (err) {
    console.log(err.message);
  }
}
