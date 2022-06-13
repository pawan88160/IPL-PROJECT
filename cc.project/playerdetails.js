$(() => {
    let playerId = Number(new URLSearchParams(window.location.search).get('player_id'))-1;
    let playerData = JSON.parse(localStorage.getItem('player-data'))[playerId];

    $('#player-photo').html(`
    <img src = ${playerData.photo}>
    `);

    let playerStatus = playerData.isPlaying?'Playing':'on-bench';
    $('#player-details').html(`
    <h1>${playerData.playerName}</h3>
    <h2>Team : ${playerData.from}</h2>
    <h2>Price : ${playerData.price}</h2>
    <h2>Playing status : ${playerStatus}</h2>
    <h2>Role : ${playerData.description}</h2>
    `)

    $('#back-btn').click(()=>{
        window.history.back();
    });
});