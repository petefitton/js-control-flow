var testScore;

var letterGrade = function (number) {
    switch(true) {
        case (number >= 90):
            console.log('You got an A!');
            break;
        case (number >= 80 && number < 90):
            console.log('You got a B!');
            break;
        case (number >= 70 && number < 80):
            console.log('You got a C');
            break;
        case (number >= 60 && number < 70):
            console.log('You got a D');
            break;
        default:
            console.log('You got an F :(')
    }
}

testScore = 72;

letterGrade(testScore);