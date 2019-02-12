const eightiesSongs = [
    blueMonday = {
        id: 1,
        artist: 'New Order',
        album: 'N/A',
        year: 1983,
        lyrics: 'How does it feel / To treat me like you do?',
        otherAnswers: [
            'Stone Roses',
            'The Smiths',
            'New Order',
            'The Pixies'
        ]
    },
    naiveMelody = {
        id: 2,
        artist: 'Talking Heads',
        album: 'Speaking in Tongues',
        year: 1983,
        lyrics: 'I feel numb, burn with a weak heart / I guess I must be having fun',
        otherAnswers: [
            'The Smiths',
            'Talking Heads',
            'Michael jackson',
            'Jesus and Mary'
        ]
    },
    closeToMe = {
        id: 3,
        artist: 'The Cure',
        album: 'The Head on the Door',
        year: 1985,
        lyrics: 'If only I was sure / that my head on the door was a dream',
        otherAnswers: [
            'The Smiths',
            'The Cure',
            'Michael jackson',
            'The Pixies'
        ]
    },
    ghostTown = {
        id: 4,
        artist: 'The Specials',
        album: 'N/A',
        year: 1981,
        lyrics: 'We danced and sang, and the music played in a de boomtown',
        otherAnswers: [
            'The Smiths',
            'Stone Roses',
            'The Specials',
            'The Pixies'
        ]
    },
    paidInFull = {
        id: 5,
        artist: 'Eric B. & Rakim',
        album: 'Paid In Full',
        year: 1987,
        lyrics: 'Cos I don \'t like to dream about gettin paid / So I dig into the books of the rhymes that I made',
        otherAnswers: [
            'The Smiths',
            'Eric B. & Rakim',
            'Michael jackson',
            'The Pixies'
        ]
    },
    aprilSkies = {
        id: 6,
        artist: 'The Jesus and Mary Chain',
        album: 'Darklands',
        year: 1987,
        lyrics: 'Hey honey what you trying to say / As I stand here / Don\'t you walk away',
        otherAnswers: [
            'The Smiths',
            'Stone Roses',
            'The Jesus and Mary Chain',
            'The Pixies'
        ]
    },
    debaser = {
        id: 7,
        artist: 'The Pixies',
        album: 'Doolittle',
        year: 1989,
        lyrics: 'Got me a movie / I want you to know / Slicing up eyeballs / I want you to know',
        otherAnswers: [
            'The Smiths',
            'Stone Roses',
            'Michael jackson',
            'The Pixies'
        ]
    },
    charmingMan = {
        id: 8,
        artist: 'The Smiths',
        album: 'The Smiths',
        year: 1983,
        lyrics: "This man said, 'It's gruesome / That someone so handsome should care'",
        otherAnswers: [
            'The Smiths',
            'Stone Roses',
            'Michael jackson',
            'The Pixies'
        ]
    },
    birthday = {
        id: 9,
        artist: 'The Sugarcubes',
        album: 'Life\'s Too Good',
        year: 1988,
        lyrics: 'Today is her birthday / They\'re smoking cigars / He got a chain of flowers / And Sews a bird in her knickers',
        otherAnswers: [
            'The Smiths',
            'Stone Roses',
            'The Sugarcubes',
            'The Pixies'
        ]
    }
]


// const getRanNum = function (min, max) {
//     return Math.floor((Math.random() * (max - min) + min) + 1);
// }



//START: NEED IF ELSE DEPENDING ON USERS CHOICE OF 80/90/00; DIRECT THEM TO THAT ARRAY

const questionLoop = () => {
    for (let i = 0; i < eightiesSongs.length; i++) {
        return songId = i;
        
    }
}

//APPENDS QUESTION IN QUESTION BLOCK
const appendQuestion = (i) => {
    $('.questionBlock').text(`${eightiesSongs[i].lyrics}`);
};

//Append possible answers to answer boxes
const appendAnswers = (i) => {
    $('.answerBox1').append(`<p>${eightiesSongs[i].otherAnswers[0]}</p>`);
    $('.answerBox2').append(`<p>${eightiesSongs[i].otherAnswers[1]}</p>`);
    $('.answerBox3').append(`<p>${eightiesSongs[i].otherAnswers[2]}</p>`);
    $('.answerBox4').append(`<p>${eightiesSongs[i].otherAnswers[3]}</p>`);

};

const userAnswer = function (i) {
    $('.answerBlock').on('click', function () {

        if ($(this).find('p')[0].innerHTML == eightiesSongs[i].artist) {
            $(this).css('background-color', 'green');
            $('.startGame').removeClass('hideMe');
            $('.startGame').html(`<button class='nextRound'>Next Round</button>`)

        } else {
            $(this).css('background-color', 'red');
             $('.startGame').removeClass('hideMe');
             $('.startGame').html(`<button class='nextRound'>Next Round</button>`)
           
        }
    })
};

const gameReset = () => {
    $('.answerBlock').children('p').remove();
    
}

const nextRound = () => {
    $('.nextRound').on('click', function () { 

        gameReset();

        appendQuestion(songId);

        appendAnswers(songId);

        userAnswer(songId);
        
    })
}

//game starts here. User clicks button and it retrieves number that is passed throgh the appendquestion, appendanswer and useranswer functions.
const gameInit = () => {
    questionLoop();

};

const startQuestions = () => {
    $('.startGame').on('click', function () {
        $(this).addClass('hideMe');
        $('.answerBlock').removeClass('hideMe').addClass('blockMe');

        appendQuestion(songId);

        appendAnswers(songId);

        userAnswer(songId);
    });
};


$(function () {
    gameInit();

    startQuestions(songId);

    nextRound(songId);



})