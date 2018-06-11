let fns = require('./../utils/functions')

test('0 input returns object with all zeros', () =>{
    //arrange/act:
    let result = fns.handleTimeDifference(0);
    console.log(result)
    expect(result).toEqual({
        seconds: "00",
        minutes: "00",
        hours: 0
    });
})

test('no input returns error', () =>{
    //arrange/act:
    let result = fns.handleTimeDifference();
    console.log(result)
    expect(result).toEqual("Error! Input must be a number");
})

test('non-numeric input returns error', () =>{
    //arrange/act:
    let result = fns.handleTimeDifference("Not a number!");
    console.log(result)
    expect(result).toEqual("Error! Input must be a number");
})

test('input of 130 returns expected value', () =>{
    //arrange/act:
    let result = fns.handleTimeDifference(130);
    console.log(result)
    expect(result).toEqual({"hours": 0, "minutes": "02", "seconds": 10});
})

test('input of 2000 returns expected value', () =>{
    //arrange/act:
    let result = fns.handleTimeDifference(2000);
    console.log(result)
    expect(result).toEqual({"hours": 0, "minutes": 33, "seconds": 20});
})