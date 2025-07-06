// Initial team data
let teams = [
  { name: "Team Alpha", points: 0 },
  { name: "Team Beta", points: 0 },
  { name: "Team Gamma", points: 0 },
  { name: "Team Delta", points: 0 },
  { name: "Team Epsilon", points: 0 },
  { name: "Team Zeta", points: 0 },
  { name: "Team Eta", points: 0 },
  { name: "Team Theta", points: 0 },
  { name: "Team Iota", points: 0 },
  { name: "Team Kappa", points: 0 },
];

function renderLeaderboard() {
  // Sort by points descending
  teams.sort((a, b) => b.points - a.points);
  
  const tbody = document.getElementById("leaderboard-body");
  tbody.innerHTML = ""; // Clear current data

  teams.forEach((team, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${team.name}</td>
      <td>${team.points}</td>
      <td>
        <input type="number" id="points-${index}" placeholder="+/-">
        <button onclick="updatePoints(${index})">Update</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function updatePoints(index) {
  const input = document.getElementById(`points-${index}`);
  const delta = parseInt(input.value);

  if (!isNaN(delta)) {
    teams[index].points += delta;
    input.value = "";
    renderLeaderboard();
  }
}

// Initial render
renderLeaderboard();
