#! /usr/bin/env node

import inquirer from 'inquirer';


let myBalance = 10000;
let myPin = 1234;

let answer = await inquirer.prompt([
    {
        message: 'enter your pin number.',
        type: 'number',
        name: 'pin'
    }
])
if (answer.pin === myPin) {
    console.log('Correct pin code.!!!')
    let operationAnswer = await inquirer.prompt([{
        name: 'operation',
        message: 'please select option',
        type: 'list',
        choices: ['Withdraw', 'Check Balance', 'Fast Cash']
    }]);
    if (operationAnswer.operation === 'Withdraw') {
        let amountAns = await inquirer.prompt([{
            name: 'amount',
            message: 'enter your amount',
            type: 'number'
        }])
        let withdrawAmount = amountAns.amount;
        if (withdrawAmount > myBalance) {
            console.log('Insufficient balance for withdrawal.');
        } else {
            myBalance -= withdrawAmount;
            console.log('Your remaining balance is: ' + myBalance);
        }
    }
    else if (operationAnswer.operation === 'Check Balance') {
        console.log('your balance is : ' + myBalance)
    }
    else if (operationAnswer.operation === 'Fast Cash') {
        let fastCashAmounts = [500, 1000, 3000, 5000, 10000];
        let fastCashAnswer = await inquirer.prompt([
            {
                name: 'amount',
                message: 'Select a Fast Cash amount',
                type: 'list',
                choices: fastCashAmounts
            }
        ]);
        let selectedAmount = fastCashAnswer.amount;
        if (selectedAmount <= myBalance) {
            myBalance -= selectedAmount;
            console.log('You have withdrawn ' + selectedAmount + ' as Fast Cash. Your remaining balance is: ' + myBalance);
        } else {
            console.log('Insufficient balance for Fast Cash.');
        }
    } else {
        console.log('Incorrect pin code.!!!')
    }
}