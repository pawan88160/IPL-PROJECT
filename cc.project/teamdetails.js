$(() => {
    let teamId = Number(new URLSearchParams(window.location.search).get('team_id'))-1;
    let teamData = JSON.parse(localStorage.getItem('team-data'))[teamId];
    let playerData = JSON.parse(localStorage.getItem('player-data'));
    let teams = JSON.parse(localStorage.getItem('teams'));

    document.querySelector('#team-details').innerHTML=`
    <img src = ${teamData.teamLogo} width='150rem'>
    <h2>${teamData.teamName}</h2>
    <h3>Total Players : ${teamData.playerCount}</h2>
    <h3>Top Batsman : ${teamData.topBatsman}</h3>
    <h3>Top Bowler : ${teamData.topBowler}</h3>
    <h3>Championship Won Count : ${teamData.championshipWonCount}</h3>
    `;

    function createPlayerCard(player){
        let status = playerData[player].isPlaying?'Playing':'on-bench';
        return `
        <a href='./playerdetails.html?player_id=${playerData[player].id}'>
        <div class = 'player-card'>
        <img src = ${playerData[player].photo} alt = ${playerData[player].name}>
        <h3>${playerData[player].playerName}</h3>
        <h4>Team : ${playerData[player].from}</h4>
        <h4>Price : ${playerData[player].price}</h4>
        <h4>Playing status : ${status}</h4>
        <h4>Role : ${playerData[player].description}</h4>
        </div>
        </a>
        `
    }

    for(let index = 0; index < playerData.length; index++){
        if(playerData[index].from === teams[teamId]){
            $('#player-card').append(createPlayerCard(index));
        }
    }

    $('#add-player-btn').click(()=>{
        document.querySelector('.main-form').classList.remove('hide');
        document.querySelector('.main-form').classList.add('active');
    });

    $('.form p').click(()=>{
        document.querySelector('.main-form').classList.remove('active');
        document.querySelector('.main-form').classList.add('hide');
    });

    $('#submit').click(()=>{
        let playerName = document.querySelector('#playerName').value;
        let team = document.querySelector('#team').value;
        let price = `₹${document.querySelector('#price').value}`;
        let status = document.querySelector('#isPlaying').value;
        status = (status === 'playing')?true:false;
        let description = document.querySelector('#description').value;
        let photo = document.querySelector('#photo').value;
        photo = (photo === null || photo === undefined || photo === '')?`https://robohash.org/${playerName}?size=200x200`:photo;
        let tempData = {
            "id": playerData.length+1,
            "playerName": playerName,
            "from": team,
            "price": price,
            "isPlaying": status,
            "description": description,
            "photo": photo
        };
        playerData.push(tempData);
        localStorage.setItem('player-data',JSON.stringify(playerData));
        document.querySelector('.main-form').classList.remove('active');
        document.querySelector('.main-form').classList.add('hide');
    });
});