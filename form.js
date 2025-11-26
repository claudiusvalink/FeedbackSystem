async function submitFeedback() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    eventName: document.getElementById("eventName").value,
    division: document.getElementById("division").value,
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value,
    suggestion: document.getElementById("suggestion").value,
  };

  const res = await fetch("http://localhost:3000/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) alert("Feedback submitted!");
}
