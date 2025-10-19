(async () => {
  const res = await fetch("/me", { credentials: "include" });
  const data = await res.json();
  if (!res.ok) return (location.href = "/signin.html");
  document.getElementById("welcome").textContent = data.user.email;
})();
