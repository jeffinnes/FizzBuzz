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

    console.log('str');
    
}