/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSummary = function () {
  return `${this.title} (${this.year}) - ${this.genre}`;
};

Book.prototype.isClassic = function () {
  Book.prototype.isClassic = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year > 50;
  };
};

Book.prototype.updateYear = function (newYear) {
  this.year = newYear;
  return `Publication year updated to ${newYear}`;
};

Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
  return `Genre updated to ${newGenre}`;
};

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
