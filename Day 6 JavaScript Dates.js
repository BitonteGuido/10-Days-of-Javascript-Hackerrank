function getDayName(dateString) {
    let dayName;
    let dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName = dias[new Date(dateString).getDay()]
    
    return dayName;
}