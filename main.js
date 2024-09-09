// 2. Заданий масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//     1. Знайти сумму и кількість додатніх елементів. =)
//     2. Знайти мінімальний елемент масива і його індекс. =)
//     3. Знайти максимальный елемент масива і його індекс. =)
//     4. Визначити кількість від'ємних елементів. =)
//     5. Знайти кількість непарних додатніх елементів. =)
//     6. Знайти кількість парних додатніх елементів. =)
//     7. Знайти суму парних додатніх елементів. =)
//     8. Знайти суму непарних додатніх елементів. =)
//     9. Знайти добуток додатніх елементів. =)
//     10. Знайти найбільший серед елементів масива, решту обнулити. =)



const numbersArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(`Array: ${numbersArray}`);

//     1. Знайти сумму и кількість додатніх елементів. =)
let positiveSum = 0, positiveElements = 0; 
for(let i = 0; i < numbersArray.length; i++){
    if(numbersArray[i] > 0){
        positiveSum += numbersArray[i];
        positiveElements++;
    }
}
console.log(`1. The sum of positive numbers is ${positiveSum} and amount of positive elements is ${positiveElements}`);

//     2. Знайти мінімальний елемент масива і його індекс.
function findMinElement(){    
    let minElement = 0, minElementIndex = 0;                  
    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] < minElement && numbersArray[i] < numbersArray[minElementIndex]){
            minElement = numbersArray[i];
            minElementIndex = i;
        }
    }
    console.log(`2. Minimum element of the array is ${minElement} and its index is ${minElementIndex}`);
}
findMinElement();

//     3. Знайти максимальный елемент масива і його індекс.
function findMaxElement(){
    maxElement = 0, maxElementIndex = 0;
    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] > maxElement && numbersArray[i]>numbersArray[maxElementIndex]){
            maxElement = numbersArray[i];
            maxElementIndex = i;
        }
    }
    console.log(`3. Maximum element of the array is ${maxElement} and its index is ${maxElementIndex}`);
}
findMaxElement();

//     4. Визначити кількість від'ємних елементів.
function findAmountOfNegatives(){
    let negativeAmount = 0;
    for(let i = 0; i<numbersArray.length; i++){
        if(numbersArray[i] < 0){
            negativeAmount++;
        }
    }
    console.log(`4. The amount of negative elememts in the array is: ${negativeAmount}`);
}
findAmountOfNegatives();

//     5. Знайти кількість непарних додатніх елементів.
//     8. Знайти суму непарних додатніх елементів.
function findOddNums(){
    let oddAmount = 0, oddSum = 0;
    for(let i = 0; i<numbersArray.length; i++){
        if(numbersArray[i] % 2 !== 0 && numbersArray[i] > 0){
            oddAmount++;
            oddSum += numbersArray[i];
        }
    }
    console.log(`5. The amount of positive odd nums is: ${oddAmount}`);
    console.log(`6. The sum of positive odd nums is: ${oddSum}`);
}
findOddNums();

//     6. Знайти кількість парних додатніх елементів.
//     7. Знайти суму парних додатніх елементів.
function findEvenNumsAndSum(){
    let evenNums = 0, evenSum = 0;
    for (let i = 0; i<numbersArray.length; i++){
        if(numbersArray[i] %2 == 0 && numbersArray[i] > 0){
            evenNums++;
            evenSum += numbersArray[i];
        }
    }
    console.log(`7. The amount of positive even nums is: ${evenNums}`);
    console.log(`8. The sum of positive even elements is: ${evenSum}`);
}
findEvenNumsAndSum();

//     9. Знайти добуток додатніх елементів.
function positiveProduct(){
    let positiveProduct = 1;
    for (let i = 0; i<numbersArray.length; i++){
        if(numbersArray[i] > 0){
            positiveProduct *= numbersArray[i];
        }
    }
    console.log(`9. The product of positive elements is ${positiveProduct}`);
}
positiveProduct();

//     10. Знайти найбільший серед елементів масива, решту обнулити.
function findMaxAndSetToZero(){
    let maxElement = 0, maxElementIndex = 0;
    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] > maxElement){
            maxElement = numbersArray[i];
            maxElementIndex = i;
        }
    }
    for(let i = 0; i < numbersArray.length; i++){
        if (i != maxElementIndex){
            numbersArray[i] = 0;
        }
    }
    console.log(`10. Max element of the array is: ${maxElement}.
    Array: ${numbersArray}`);
}
findMaxAndSetToZero();