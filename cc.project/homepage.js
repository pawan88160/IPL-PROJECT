$(() => {
    let data = JSON.parse(localStorage.getItem('team-data'));
    let teams = JSON.parse(localStorage.getItem('teams'));
    function createTeamCard(team){
        return `
        <a href='./teamdetails.html?team_id=${data[team].teamId}'>
        <div class = 'team-card' style = "background-image: url(${data[team].teamBackground});">
        <img src = ${data[team].teamLogo} alt = ${data[team].teamName}>
        <h3>${data[team].teamName}</h3>
        </div>
        </a>
        `
    }

    for(let index = 0; index < data.length; ++index){
        $('#team-card').append(createTeamCard(index))
    }

    $('#add-team-btn').click(()=>{
        document.querySelector('.main-form').classList.remove('hide');
        document.querySelector('.main-form').classList.add('active');
    });

    $('.form p').click(()=>{
        document.querySelector('.main-form').classList.remove('active');
        document.querySelector('.main-form').classList.add('hide');
    });

    $('#submit').click(()=>{
        let teamName = document.querySelector('#teamName').value;
        let teamLogo = document.querySelector('#teamLogo').value;
        teamLogo = (teamLogo === null || teamLogo === undefined || teamLogo === '')?`https://robohash.org/${teamName}?size=200x200`:teamLogo;
        let teamBG = document.querySelector('#teamBG').value;
        let topBatsman = document.querySelector('#topBatsman').value;
        let topBowler = document.querySelector('#topBowler').value;
        let championshipWonCount = document.querySelector('#championshipWonCount').value;
        let playerCount = 0;
        let teamCode = document.querySelector('#teamCode').value;
        let tempData = {
            'teamId':data.length+1,
            'teamName':teamName,
            'teamLogo':teamLogo,
            'teamBackground':teamBG,
            'playerCount':playerCount,
            'topbatsman':topBatsman,
            'topBowler':topBowler,
            'championshipWonCount':championshipWonCount,
        };
        data.push(tempData);
        let teams = JSON.parse(localStorage.getItem('teams'));
        teams.push(teamCode);
        localStorage.setItem('teams',JSON.stringify(teams));
        localStorage.setItem('team-data',JSON.stringify(data));
        document.querySelector('.main-form').classList.remove('active');
        document.querySelector('.main-form').classList.add('hide');
        location.reload();
    });

    $("#search-btn").click(()=>{
        let searchQuery = document.querySelector('#search-box').value.toUpperCase();
        $("#search-box").val('');
        for(let index = 0; index < teams.length; ++index){
            if(teams[index] === searchQuery){
                window.location.href = `./teamdetails.html?team_id=${index+1}`;
            }
        }
    });
});