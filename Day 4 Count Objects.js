function getCount(objects) {
    var count = 0;
    for (var i in objects) {
        if (objects[i].x == objects[i].y) {
            count++;
        }
    }
    return count;
    
}