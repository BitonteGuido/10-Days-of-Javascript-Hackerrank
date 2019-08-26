function main() {

    var r = parseFloat(readLine());
    const PI = Math.PI;
    var area = PI * r * r;
    console.log(area);
    var perimetro = 2 * PI * r;
    console.log(perimetro);
    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}