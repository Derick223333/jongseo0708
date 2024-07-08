const games = [
    "리그 오브 레전드",
    "오버워치",
    "마인크래프트",
    "포트나이트",
    "스타크래프트 II",
    "피파 22",
    "카트라이더",
    "배틀그라운드",
    "갓 오브 워",
    "벽돌 깨기",
    "퇴마 검사 키우기",
    "무한의 미로"
];

const button = document.getElementById('recommend-button');
const gameName = document.getElementById('game-name');

button.addEventListener('click', recommendGame);

function recommendGame() {
    const randomIndex = Math.floor(Math.random() * games.length);
    gameName.textContent = games[randomIndex];
}
