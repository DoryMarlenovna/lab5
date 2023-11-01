class Polygon{
    constructor(side){
    this.side=side;
    }
    perimeter(triangle=0){
        for(let i=0;i<this.side.length;i++ ){
            triangle+=this.side[i];
        }
       return triangle;
    }
}