function getGrade(score) {
    let grade;
    if (score <= 5 && score > 0) {
        grade = 'F'
    }
    else if (score <= 10 && score > 5) {
        grade = 'E';
    }
    else if (score > 10 && score <= 15) {
        grade = 'D';
    }
    else if (score > 15 && score <= 20) {
        grade = 'C';
    }
    else if (score > 20 && score <= 25) {
        grade = 'B';
    }
    else if (score > 25 && score <= 30) {
        grade = 'A';
    }   
    return grade;
}