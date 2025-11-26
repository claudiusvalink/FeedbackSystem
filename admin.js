async function loadFeedback() {
  const res = await fetch("http://localhost:3000/api/feedback");
  const data = await res.json();

  const tbody = document.getElementById("feedbackTable");
  tbody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
<td>${item.name}</td>
<td>${item.eventName}</td>
<td>${item.division}</td>
<td>${item.rating}</td>
<td>
<select onchange="updateStatus('${item.id}', this.value)">
<option ${item.status === "open" ? "selected" : ""}>open</option>
<option ${item.status === "in-review" ? "selected" : ""}>in-review</option>
<option ${item.status === "resolved" ? "selected" : ""}>resolved</option>
</select>
</td>
<td>
<button class="action-btn delete" onclick="deleteFeedback('${
      item.id
    }')">Delete</button>
</td>
`;
    tbody.appendChild(row);
  });
}

async function updateStatus(id, status) {
  await fetch(`http://localhost:3000/api/feedback/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
}

async function deleteFeedback(id) {
  if (!confirm("Delete this item?")) return;

  await fetch(`http://localhost:3000/api/feedback/${id}`, {
    method: "DELETE",
  });

  loadFeedback();
}

loadFeedback();
