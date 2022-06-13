
//Class constructor del libro

class Book {
    constructor(name, autor){
        this.name = name;
        this.autor = autor;
    }
}

// Class constructor de el usuario y sus metodos

class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.books = [];
        this.pets = [];
    }
    addBook(name, autor){
        let bookToAdd = new Book(name, autor);
        this.books.push(bookToAdd);
    }
    addPet(petsToAdd){
        this.pets.push(petsToAdd)
    }
    petsCounter(){
        let nPets = this.pets.length;
        let mens = nPets > 1 ? `tiene: ${nPets} mascotas` : `tiene: ${nPets} mascota`;
        return console.log(mens);
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
    getBooks(){
        const booksList = this.books.map(book => book.name)
        console.log(`los libros del usuario son: ${booksList}`)
    }
}

//Creo un usuario

let user = new User("Pedro", "Sanchez");

//Llamo todos los metodos

user.addPet("pig")
user.addPet("sheep")
user.addBook("El Retrato de Dorian Gray", "Oscar Wilson");
user.addBook("La Blibloteca de Babel", "J.L Borges");
console.log(user.getFullName());
console.log(user.pets);
user.petsCounter();
console.log(user.books);
user.getBooks();