function solve (input) {

    let r = Number(input[0]); 

    let circleArea = Math.PI * r * r; 
    let circlePerimeter = 2 * Math.PI * r

    console.log(circleArea.toFixed(2));
    console.log(circlePerimeter.toFixed(2));



}

solve ([3])