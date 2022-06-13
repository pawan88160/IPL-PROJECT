const teams = [
    'CSK',
    'DC',
    'KKR',
    'MI',
    'RR',
    'RCB',
]

let teamData = [
        {
            teamId:1,
            teamName:'chennai super kings',
            teamLogo:'https://i1.wp.com/www.eventstodayz.com/wp-content/uploads/2019/03/csk-hd-logo-2020.png?resize=1536%2C1266&ssl=1',
            playerCount:5,
            topBatsman:'Ruturaj Gaikwad',
            topBowler:'Mukesh Choudhary',
            championshipWonCount:4,
        },
        {
            teamId:2,
            teamName:'delhi capitals',
            teamLogo:'https://www.nsbpictures.com/wp-content/uploads/2019/03/1024px-Delhi_Capitals_Logo.svg_.png',
            playerCount:4,
            topBatsman:'David Warner',
            topBowler:'Kuldeep Yadav',
            championshipWonCount:0,
        },
        {
            teamId:3,
            teamName:'kolkata knight riders',
            teamLogo:'https://kreditings.com/wp-content/uploads/2020/09/KKR-Logo.png',
            playerCount:0,
            topBatsman:'',
            topBowler:'',
            championshipWonCount:2,
            players:[],
        },
        {
            teamId:4,
            teamName:'mumbai indians',
            teamLogo:'https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/mumbai-indians-png-logo-2020.png?quality=100&f=auto',
            playerCount:4,
            topBatsman:'Ishan Kishan',
            topBowler:'',
            championshipWonCount:5,
        },
        {
            teamId:5,
            teamName:'rajasthan royals',
            teamLogo:'https://kreditings.com/wp-content/uploads/2020/09/RR-Logo.png',
            playerCount:0,
            topBatsman:'',
            topBowler:'',
            championshipWonCount:1,
            players:[],
        },
        {
            teamId:6,
            teamName:'royal challengers bangalore',
            teamLogo:'https://kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png',
            playerCount:5,
            topBatsman:'Virat Kohli',
            topBowler:'Glenn Maxwell',
            championshipWonCount:0,
        }
];

let playerData = [
    {
      "id": 1,
      "playerName": "MS Dhoni",
      "from": "CSK",
      "price": "₹12 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.id4AeoeOTAlcmpQKQofNuAHaEK%26pid%3DApi&f=1"
    },
    {
      "id": 2,
      "playerName": "Ruturaj Gaikwad",
      "from": "KKR",
      "price": "₹6 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.NAIVFEv1F_Z41eAaDCggIwHaJA%26pid%3DApi&f=1"
    },
    {
      "id": 3,
      "playerName": "Robin Uthappa",
      "from": "CSK",
      "price": "₹2 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fst3.cricketcountry.com%2Fwp-content%2Fuploads%2F2014%2F11%2Fcl_Robin-Uthappa-1.jpg&f=1&nofb=1"
    },
    {
      "id": 4,
      "playerName": "Ravindra Jadeja",
      "from": "KKR",
      "price": "₹16 crore",
      "isPlaying": true,
      "description": "All-rounder",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4504624.jpg&f=1&nofb=1"
    },
    {
      "id": 5,
      "playerName": "Mukesh Choudhary",
      "from": "CSK",
      "price": "₹20 lakh",
      "isPlaying": true,
      "description": "Bowler",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.VQXPviu9BYx2EQENR8YwoAHaFj%26pid%3DApi&f=1"
    },
    {
      "id": 6,
      "playerName": "Prithvi Shaw",
      "from": "DC",
      "price": "₹7.5 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.ndtvimg.com%2F2020-08%2F8u1s2eus_prithvi-shaw-afp_625x300_21_August_20.jpg%3Foutput-quality%3D80%26downsize%3D1278%3A*&f=1&nofb=1"
    },
    {
      "id": 7,
      "playerName": "David Warner",
      "from": "DC",
      "price": "₹6.25 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.india.com%2Fwp-content%2Fuploads%2F2020%2F09%2FDavid-Warner-2.jpg&f=1&nofb=1"
    },
    {
      "id": 8,
      "playerName": "Rishabh Pant",
      "from": "DC",
      "price": "₹16 crore",
      "isPlaying": true,
      "description": "Wicket-keeper",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.PJCtBr4vi5mDEEd_cTR1WQHaEK%26pid%3DApi&f=1"
    },
    {
      "id": 9,
      "playerName": "Kuldeep Yadav",
      "from": "KK",
      "price": "₹2 crore",
      "isPlaying": true,
      "description": "Bowler",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aDCRi6wKVUl04vJ4eel6CAHaFP%26pid%3DApi&f=1"
    },
    {
      "id": 10,
      "playerName": "Virat Kohli",
      "from": "RCB",
      "price": "₹15 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.eyebridge.in%2Fblog%2Fwp-content%2Fuploads%2F2017%2F03%2Fvirat-on-pitch.jpg&f=1&nofb=1"
    },
    {
      "id": 11,
      "playerName": "Faf du Plessis",
      "from": "RCB",
      "price": "₹7 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe0.365dm.com%2F20%2F03%2F2048x1152%2Fskysports-faf-du-plessis-south-africa_4953786.jpg&f=1&nofb=1"
    },
    {
      "id": 12,
      "playerName": "Finn Allen",
      "from": "RCB",
      "price": "₹80 lakh",
      "isPlaying": "FALSE",
      "description": "Wicket-keeper",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lErSMCZ-wYAzkBtmYcgNSgHaEH%26pid%3DApi&f=1"
    },
    {
      "id": 13,
      "playerName": "Dinesh Karthik",
      "from": "MI",
      "price": "₹5.5 crore",
      "isPlaying": true,
      "description": "Wicket-keeper",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.telegraphindia.com%2Ftelegraph%2Fd6716f41-9d25-40bc-9d91-f510799ec755.jpg&f=1&nofb=1"
    },
    {
      "id": 14,
      "playerName": "Glenn Maxwell",
      "from": "MI",
      "price": "₹11 crore",
      "isPlaying": true,
      "description": "All-rounder",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K3Zq3Y1o_cYMznj2OuzRsQHaEK%26pid%3DApi&f=1"
    },
    {
      "id": 15,
      "playerName": "Rohit Sharma",
      "from": "RR",
      "price": "₹16 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.zeebiz.com%2Fsites%2Fdefault%2Ffiles%2F2020%2F03%2F31%2F115350-rohit-sharma-reuters.jpg&f=1&nofb=1"
    },
    {
      "id": 16,
      "playerName": "Tilak Varma",
      "from": "RR",
      "price": "₹1.7 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresize.indiatvnews.com%2Fen%2Fresize%2Fnewbucket%2F715_-%2F2019%2F09%2Far-1567845697.jpg&f=1&nofb=1"
    },
    {
      "id": 17,
      "playerName": "Dewald Brevis",
      "from": "RR",
      "price": "₹3 crore",
      "isPlaying": true,
      "description": "batsman",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oEHpW9RiZ3tRQF7EU9j90gHaGI%26pid%3DApi&f=1"
    },
    {
      "id": 18,
      "playerName": "Ishan Kishan",
      "from": "MI",
      "price": "₹15.25 crore",
      "isPlaying": true,
      "description": "Wicket-keeper",
      "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fenglish.cdn.zeenews.com%2Fsites%2Fdefault%2Ffiles%2F2019%2F02%2F25%2F765347-ishankishan.jpg&f=1&nofb=1"
    }
];

if(localStorage.getItem('teams') === null || localStorage.getItem('team') === undefined){
    localStorage.setItem('teams',JSON.stringify(teams));
}

  if(localStorage.getItem('team-data') === null || localStorage.getItem('team-data') === undefined){
    localStorage.setItem('team-data',JSON.stringify(teamData));
}

if(localStorage.getItem('player-data') === (null) || localStorage.getItem('player-data') === undefined){
    localStorage.setItem('player-data',JSON.stringify(playerData));
}