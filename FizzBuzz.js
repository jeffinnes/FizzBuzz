const fs = require('fs');

let answerKey = fs.readFileSync('FizzBuzz_answer_key.txt').toString().split(',');
let answer = [];


for (let i = 1; i < 101; i++) {
    let str = '';

    if ( i % 3 === 0 ) {

        str = str + 'Fizz';

    }

    if ( i % 5 === 0) {

        str = str + 'Buzz';

    }

    if ( str === '' ) {

        str = i.toString();

    }

    answer.push(str);
    
}



// Really hacky way to check my answer. #notproud

if ( answer.length === answerKey.length ) {

    console.log('answer  -  answerKey');

    for (let j = 0; j < answer.length; j++) {
        
            console.log(answer[j] + '  -  ' + answerKey[j] + '\n');
        
    }

} 