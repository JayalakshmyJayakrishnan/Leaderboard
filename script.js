let teams = [
  { name: "Team Alpha", points: 150 },
  { name: "Team Beta", points: 120 },
  { name: "Team Gamma", points: 110 },
  { name: "Team Delta", points: 90 },
  { name: "Team Epsilon", points: 80 },
  { name: "Team Zeta", points: 70 },
  { name: "Team Eta", points: 60 },
  { name: "Team Theta", points: 50 },
  { name: "Team Iota", points: 40 },
  { name: "Team Kappa", points: 30 },
];

function renderLeaderboard() {
  teams.sort((a, b) => b.points - a.points);

  // Update top 3
  for (let i = 0; i < 3; i++) {
    document.getElementById(`team-${i}-name`).textContent = teams[i].name;
    document.getElementById(`team-${i}-points`).textContent = teams[i].points;
  }

  // Update rest
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
  for (let i = 3; i < teams.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${teams[i].name}</td>
      <td>${teams[i].points}</td>
      <td>
        <input type="number" id="input-${i}" placeholder="±">
        <button onclick="updatePoints(${i})">Update</button>
      </td>
    `;
    tbody.appendChild(row);
  }
}

function updatePoints(index) {
  const input = document.getElementById(`input-${index}`);
  const delta = parseInt(input.value);
  if (!isNaN(delta)) {
    teams[index].points += delta;
    input.value = "";
    renderLeaderboard();
  }
}

renderLeaderboard();
