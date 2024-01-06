//DAY 6
//TASK 01 - MOVIE OOPS TASK

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
//and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

let movie1 = new movie("Jailer","Sun Pictures", "PG-15");
console.log(movie1);

// OUTPUT:
// rating: "PG-15"
// studio: "Sun Pictures"
// title: "Jailer"

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

let movie2 = new movies("Leo","7 screen studios");
console.log(movie2);

// OUTPUT:
// rating: "PG"
// studio: "7 screen studios"
// title: "Leo"

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
// You may assume the input array is full of Movie instances. The returned array need not be full.

class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let movie3 = new Moviee("Thunivu", "Zee studios", "PG");
let movie4 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie5 = new Moviee("Kantara", "KRG Studios", "PG");
let movie6 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie7 = new Moviee("KGF", "hombalie flims", "PG");

let movieArr = [movie3, movie4, movie5, movie6, movie7];
let pgMovie = Moviee.getPG(movieArr);
console.log(pgMovie);

// OUTPUT:
// Moviee {title: 'Thunivu', studio: 'Zee studios', rating: 'PG'}
// Moviee {title: 'Kantara', studio: 'KRG Studios', rating: 'PG'}
// Moviee {title: 'KGF', studio: 'hombalie flims', rating: 'PG'}

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//the studio “Eon Productions”, and the rating “PG­13”.

class Moviess {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let movie8 = new Moviess("Casino Royale", "Eon Productions", "PG-13");

    console.log(movie8);

// OUTPUT:
// rating: "PG-13"
// studio: "Eon Productions"
// title: "Casino Royale"

