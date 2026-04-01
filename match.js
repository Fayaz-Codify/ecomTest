const jsonURL = [
  {
    "match": "PAK vs IND",
    "flags": {
      "team1": "https://flagcdn.com/pk.svg",
      "team2": "https://flagcdn.com/in.svg"
    },
    "servers": [
      { "name": "PTV SPRTS (HD)", "url": "https://cdn07isb.tamashaweb.com:8087/YlUHeDQb7a/189H/chunks.m3u8" },
      { "name": "URDU (NO ADS)", "url": "https://tencentcdn11.tamashaweb.com/v1/019bf9b9eb3215fc600b35c80a5fba/019bffdc5fb61ea540a817848da787/TMSHU1WEB_clone_360p.m3u8" },
      { "name": "ENGLISH (Low Data)", "url": "https://psl.bigbaat.app/out/v1/0ef369b90c7b4025b76621e46ee5fb70/index_2.m3u8" },
      { "name": "TEN SPORTS", "url": "https://cdn07isb.tamashaweb.com:8087/YlUHeDQb7a/157-3H/chunks.m3u8" }
    ]
  },
  {
    "match": "ENG vs AUS",
    "flags": {
      "team1": "https://flagcdn.com/gb.svg",
      "team2": "https://flagcdn.com/au.svg"
    },
    "servers": [
      { "name": "Server 1", "url": "YOUR_ENG_AUS_SERVER1" },
      { "name": "Server 2", "url": "YOUR_ENG_AUS_SERVER2" }
    ]
  }
];



const matches = jsonURL;

console.log(matches);
const matchList = document.getElementById('match-list');
matchList.innerHTML = '';

matches.forEach((match, index) => {
  const card = document.createElement('div');
  card.className = 'match-card';
  if (index === 0) card.classList.add('active');

  const serversHTML = match.servers.map(s =>
    `<button class="btn-server" onclick="playStream('${s.url}','${match.match}',this)">${s.name}</button>`
  ).join('');

  card.innerHTML = `
                <div class="teams">
                    <img src="${match.flags.team1}" class="flag">${match.match.split(' vs ')[0]}
                    <span class="vs">VS</span>
                    ${match.match.split(' vs ')[1]}<img src="${match.flags.team2}" class="flag">
                </div>
                <div class="server-list">
                    <div class="server-grid">${serversHTML}</div>
                </div>
            `;
  matchList.appendChild(card);
});

// Auto-play first server of first match
if (matches.length > 0 && matches[0].servers.length > 0) {
  playStream(matches[0].servers[0].url, matches[0].match, document.querySelector('.btn-server'));
}

