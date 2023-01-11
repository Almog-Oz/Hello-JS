let start = function(){
    console.log('Hello world!');
};

//start()

function exercise1Part1 (customerAge, customerPreference){
    if (customerAge < 18){

        return "You are too young";
    }
    else{
        if (customerPreference == 1){
        
            return "Wine";
        } else if (customerPreference == 2) {
    
            return "Beer";
        }
    }
}

//console.log(exercise1Part1(18, 1));

function exercise1Part2 (customerAge, customerPreference){
    try{
        if (customerAge < 18){

            return "You are too young";
        }
        else{
            if (customerPreference == 1){
            
                return "Wine";
            } else if (customerPreference == 2) {
        
                return "Beer";
            }
            throw new SyntaxError('Customer preference must be 1 or 2 and CustomerAge must be an integer.');
        }
    } catch (err) {

        return (err.name + ': ' + err.message);
    }
}
console.log(exercise1Part2(15, 4));

function exercise2 (array){
    if (array.length < 2)
        throw new TypeError ("The array must contain at least 2 numbers");

    let smallestPositiveNumbers = [];
    let shiftedNumber = array.shift();

    while (shiftedNumber != -1){
        if (shiftedNumber > 0){
            if (smallestPositiveNumbers.length < 2){
                smallestPositiveNumbers.push(shiftedNumber);
            }
            else{
                let biggestNumber = Math.max(smallestPositiveNumbers[0], smallestPositiveNumbers[1])

                if (shiftedNumber < biggestNumber){

                    if (biggestNumber == smallestPositiveNumbers[0]){
                        smallestPositiveNumbers[0] = shiftedNumber;
                    }
                    else{
                        smallestPositiveNumbers[1] = shiftedNumber;
                    }
                } 
            }
        }
        shiftedNumber = array.shift();
    }

    return smallestPositiveNumbers;
}

//let array = [3, -3, -8, 18, 2, 7, 8, -1];
//console.log("Tow smallest numbers: "exercise2(array));

function exercise3 (height, width){
    let tempArray = [];
    for (let i = 0; i < width; i++){
            tempArray.push('*');
    }
    for (let i = 0 ; i < height; i++){
        console.log(tempArray.join(""))
    }
}
//exercise3(4, 8);



function Dot(x, y){
    this.x = x;
    this.y = y;
}
function calculateSide (dot){
    let xValueSquerd = Math.pow(dot.x, 2);
    let yValueSquerd = Math.pow(dot.y, 2);

    return Math.pow(xValueSquerd + yValueSquerd, 0.5);
}
function calculateDistanceBetweenDots(dot1, dot2){
    let xDifferenceSquered = Math.pow(dot1.x - dot2.x, 2);
    let yDifferenceSquered = Math.pow(dot1.y - dot2.y, 2);
    
    return Math.pow(xDifferenceSquered + yDifferenceSquered, 0.5);
}
function calculateRightTriangleThirdSide (firstSide, secondSide){
    let firstSideSquerd = Math.pow(firstSide, 2);
    let secondSideSquerd = Math.pow(secondSide, 2);

    return Math.pow(firstSideSquerd + secondSideSquerd, 0.5);
}
function validateDots(dot1, dot2){
    if (dot1.x == dot2.x && dot1.y == dot2.y){

        return false;
    } else if (dot1.x == 0 && dot1.y == 0){

        return false;
    } else if (dot2.x == 0 && dot2.y == 0){

        return false;
    } else{

        return true;
    }
        
}
function exercise5 (dot1, dot2){
    let firstSide = calculateSide(dot1);
    let secondSide = calculateSide(dot2);

    if (validateDots(dot1, dot2)){
        if (calculateDistanceBetweenDots(dot1, dot2) == calculateRightTriangleThirdSide(firstSide, secondSide)){

            return (firstSide * secondSide) / 2
        }
    } 

    return -1;
}

//console.log("Triangle's area: " + exercise5(new Dot(2.6, 0), new Dot(0, -8.4)));
