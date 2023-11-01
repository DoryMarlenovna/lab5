function reverseString(s) {
    try {
        s = s.split("").reverse().join("");;
    } catch(g) {
        console.log(g.message);
    } finally {
        console.log(s);
    }
    
}