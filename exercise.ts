// let title = "titanic";
//
// let newTitle: string = "titanic 2, Test";
// let age: number = 10;
// let bool: boolean = true //false
//
// let array: string[] = ["dffr", "fdd"]
//
// type User = {
//     id: number,
//     first_name: string,
//     last_name: string,
//     is_active?: boolean
// }
//
// let user: User = {
//     id: 1,
//     first_name: "Hristiana",
//     last_name: "Kuncheva",
//     is_active: true
// }

type Movie = {
    id: number,
    title: string,
    genre: MOVIE_GENRE,
    director: string,
    duration: number
}

enum MOVIE_GENRE {
    ACTION = "action",
    COMEDY = "comedy",
    HORROR = "horror"
}

let spidermanFarFromHome: Movie = {
    id: 1,
    title: "Spiderman Far From Home",
    director: "Sergei Alekov",
    duration: 160,
    genre: MOVIE_GENRE.ACTION
}

let spidermanHomeComing: Movie = {
    id: 1,
    title: "Spiderman HomeComing",
    director: "Sergei Alekov",
    duration: 160,
    genre: MOVIE_GENRE.ACTION
}

let array = [spidermanFarFromHome, spidermanHomeComing]
const result = array.filter(movie => movie.genre === MOVIE_GENRE.ACTION)
console.log(result)

enum CAR_TYPE {
    COMBI = "combi",
    CABRIOLET = "cabriolet",
    SEDAN = "sedan"
}

class Car {
    protected type: CAR_TYPE;

    constructor() {
        this.type = CAR_TYPE.SEDAN
    }
    setType(type: CAR_TYPE): void {
        this.type = type
    }

    getType(): CAR_TYPE{
        return this.type
    }
}
const car = new Car();
car.setType(CAR_TYPE.CABRIOLET)
console.log(car)
