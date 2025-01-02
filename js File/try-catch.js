function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.ariaValueMax;
    const errorTag = - document.getElementById('error');

    try {
        // console.log(Dhaka);
        const age = parseInt(ageText);

        if (isNaN(age)) {
            throw "please enter a number";
        }
    }
    catch (err) {
        console.log('ERROR : ', err);
        // errorTag.innerHtml = 'something wrong';
        errorTag.innerHTML = 'ERROR : ' + err;
    }
    finally {
        console.log('All okay inside try-catch');
    }
    console.log(111111);
}