const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];
// Q10. Write a function that finds a movie by id and returns its title and
//genre in a formatted string

function getMovieDetails(id) {
  const fMovie = movies.find((movie) => movie.id === id);
  if (fMovie) {
    return `${fMovie.title} is a ${fMovie.genre} movie`;
  } else {
    return "Movie not found";
  }
}

console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

// Q11. Write a function that filters out movies released before a
// certain year and calculates the average rating of the remaining movies (Rating must be rounded)

function getAverageRatingAfterYear(year) {
  let res = movies.filter((movie) => movie.year < year);

  const y = res.reduce((acc, movie) => {
    return (acc + movie.ratings) / res.length;
  }, 0);
  if (y) return y;
  else return "no  movies after the specified year ";
}

// function getAverageRatingAfterYear(year) {
//   let res = movies
//     .filter((movie) => movie.year < year)
//     .reduce((acc, movie) => {
//       return (acc + movie.ratings) / res.length;
//     }, 0);
//   if (res) return res;
//   else return "no  movies after the specified year ";
// }
console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy, Mahanati, and Jersey)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

//Q12: Write a function that checks if all movies of a certain genre have ratings above a certain value
function allRatingsAboveForGenre(value, genre) {
  const filtered = movies.filter((movie) => movie.genre == genre);
  const new1 = filtered.every((movie) => movie.ratings.every((n) => n > value));
  return new1
    ? `yes, all ${genre} movies are above ${value} ratings`
    : `No, not all ${genre} movies are above ${value} ratings`;
}
console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings

//Q13: Write a function that returns a string with each movie's title and its ratings joined by commas

function getTitlesAndRatings() {
  const ratings5 = movies.map((movie) => {
    return `${movie.title}:${movie.ratings.join(",")}`;
  });

  return ratings5.join("|");
}
console.log(getTitlesAndRatings());

// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8

//Q14: Write a function that returns a single array containing all ratings of all movies

function getAllRatings() {
  return movies
    .map((movie) => movie.ratings)
    .reduce((acc, curr) => acc.concat(curr), []);
}
console.log(movies.map((mv) => mv.ratings.flat()));
console.log(getAllRatings());
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]

// Q15: Write a function that returns an array of titles of movies that
// have ratings above a certain threshold in any rating

function getTitlesWithHighRatings(ratings) {
  var gettitbyrating = movies.filter((movie) => {
    return movie.ratings.every((every1) => every1 > ratings);
  });
  let zzz = gettitbyrating.map((movie) => movie.title);

  return zzz;
}

console.log(getTitlesWithHighRatings(9)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"]

//Q16: Write a function that returns an array of movie titles sorted
//by their average ratings in descending order

function getTitlesSortedByAverageRating() {
  const gettitle = movies
    .sort((a, b) => b.ratings - a.ratings)
    .map((movie) => movie.title);
  return gettitle;
}
console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

//Q17: Write a function that finds the movie with the highest average rating and returns its title

function getMovieWithHighestAverageRating() {
  const sortedMovies = movies.sort((a, b) => {
    const aAvg =
      a.ratings.reduce((sum, rating) => sum + rating, 0) / a.ratings.length;
    const bAvg =
      b.ratings.reduce((sum, rating) => sum + rating, 0) / b.ratings.length;
    return bAvg - aAvg;
  });

  return sortedMovies[0].title;
}
console.log(getMovieWithHighestAverageRating());

//Q18: Write a function that returns an array of movie titles released after a certain year

function getTitlesAfterYear(year) {
  const b = movies.filter((movie) => movie.year > year);
  const a = b.map((movie) => movie.title);
  return a;
}

console.log(getTitlesAfterYear(2015)); // Output: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Output: ["Jersey"]

//Q19: Write a function that finds a movie by its title and returns a formatted string with its director and year

function getMovieInfoByTitle(title) {
  let a = movies.find((movie) => movie.title == title);
  if (a) return `${a.title} directed by ${a.director} in ${a.year}`;
  else {
    return "movie not found";
  }
}
console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

//Q20: Write a function that returns an array of titles of movies that
//have at least one rating below a certain threshold
function getTitlesWithLowRatings(ratings) {
  let gettit = movies.filter((movie) => {
    return movie.ratings.some((some1) => some1 < ratings);
  });
  let gettit2 = gettit.map((movie) => movie.title);

  return gettit2;
}
console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]

//Q21: Write a function that calculates the total number of ratings for movies of a specific genre

function getTotalRatingsByGenre(genre) {
  let a = movies
    .filter((movie) => movie.genre == genre)
    .reduce((acc, movie) => (acc = acc + movie.ratings.length), 0);
  return a;
}

console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); //Should print: 3

//Q22: Write a function that returns an array of movies where
//the average rating is above a certain value, including the average rating in the result

// const moviesWithAverageRating = movies.map(movie => {
//   const totalRating = movie.ratings.reduce((sum, rating) => sum + rating, 0);
//   const averageRating = totalRating / movie.ratings.length;
//   return { ...movie, averageRating };
// });

// // Filter the movies with an average rating above the minimum
// const highRatedMovies = moviesWithAverageRating.filter(movie => movie.averageRating >= minRating);

// // Format the result as requested
// return highRatedMovies.map(movie => `${movie.title} has an average rating of ${movie.averageRating.toFixed(2)}`);
// }

function getMoviesWithHighAverageRating(ratings) {
  let getmovies = movies.map((movie) => {
    const getmovie =
      movies.ratings.reduce((acc, movie) => acc + movie, 0) /
      movies.ratings.length;
    return getmovie;
  });
}
console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating of 8.67", "Jersey has an average rating of 8.67"]

//Q23: Write a function that returns an array of movie titles directed by a specific director,
// sorted by year in ascending order

function getTitlesByDirectorSortedByYear(director) {
  let c = movies
    .filter((movie) => movie.director == director)
    .sort((a, b) => a.year - b.year)
    .map((movie) => movie.title);
  return c;
}

console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"]

//Q24: Write a function that returns the average rating of movies released in a specific year

function getAverageRatingByYear(year) {
  let avg_total = movies.find((movie) => movie.year == year);
  let ratings1 = avg_total.ratings;
  let sum = ratings1.reduce((acc, curr) => acc + curr, 0);
  let average = sum / ratings1.length;
  return average;
}

//   if (avg_total) {
//     let bb = avg_total.ratings
//     let qqq =
//       bb.reduce(acc, movie) => (acc = acc + movie);

//     return bb;
//   } else {
//     ("  No movies released in the specified year");
//   }
// }
console.log(getAverageRatingByYear(2018)); // Should print: 9.00
console.log(getAverageRatingByYear(2015)); // Should print: "No movies released in the speci

//Q25: Write a function that returns an array of objects with
// movie titles and their highest ratings

function getMoviesWithHighestRatings() {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings),
  }));
}
console.log(getMoviesWithHighestRatings());
// Should print: [{ title: "Baahubali", highestRating: 10 },
// { title: "Arjun Reddy", highestRating: 9 },
// { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 },
//  { title: "Jersey", highestRating: 9 }]

//Q26: Write a function that returns the director with the most movies directed

// function getDirectorWithMostMovies() {
//   const directorCounts = movies.reduce((acc, movie) => {
//     acc[movie.director] = (acc[movie.director] || 0) + 1;
//     return acc;
//   }, {});

//   const maxDirector = Object.keys(directorCounts).reduce((max, director) =>
//     directorCounts[max] > directorCounts[director] ? max : director
//   );

//   return { director: maxDirector, count: directorCounts[maxDirector] };
// }
// console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

//Q27: Write a function that merges two arrays of movies into one using the spread operator
const moreMovies = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];

function mergeMovies(movies, moreMovies) {
  const merged = [...movies, ...moreMovies];
  return merged;
}

console.log(mergeMovies(movies, moreMovies));
// Should print: array with all 7 movies

//Q28: Write a function that accepts any number of movie objects and returns
// an array of their titles using the rest operator

function getTitles(...movies) {
  return movies.map((movie) => movie.title);
}
console.log(getTitles(...movies)); // Should print titles of all movies in the array
console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

//output wrong
//Q29: Write a function that merges two arrays of movies into one using the spread operator
//and provides a default value for the second array

// function mergeMovies(movies, moreMovies = []) {
//   const mer = [...movies, ...moreMovies];
//   return mer;
// }

// console.log(mergeMovies(movies, moreMovies)); // Should print the merged array of movies
// console.log(mergeMovies(movies)); // Should print the original array of movies

//Q30: Write a function that returns the last N movie titles, using slice and spread operator
// with a default value for N

function getLastNMovieTitles(N) {
  return [...movies.map((movie) => movie.title).slice(-N)];
}

console.log(getLastNMovieTitles(3)); // Should print the last 3 movie titles
console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles

//Q31: Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted
// string using the rest operator, nullish coalescing, and template literals Interesting

function getMovieTitlesByIds(...id) {
  let getid = id.map((id) => {
    let getmovie = movies.find((movie) => movie.id == id);
    return getmovie?.title ?? "unknown title";
  });
  return `selectedMovies:${getid}`;
}

console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali,

//Q32: Write a function that accepts any number of movies and returns a formatted string
// listing their titles and genres using the rest operator, nullish coalescing, and
//template literals Interesting

function listMovies(...movies) {
  let moviess = movies.map((movie) => {
    const title = movie?.title ?? "Unknown Title";
    const genre = movie?.genre ?? "Unknown Genre";
    return `${title} (${genre})`;
  });

  return moviess.join(", ");
}

console.log(listMovies(...movies));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
console.log(listMovies(movies[0], movies[1], movies[111]));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)

//Q33: Write a function that calculates the total number of ratings for each director Challenging
// Ex81 -
const getTotalRatingsForDirectors = () => {
  return movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
    return acc;
  }, {});
};

console.log(getTotalRatingsForDirectors());
// Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

//Q34: Write a function that returns an array of genres sorted by the total number
//of ratings received by movies in that genre Challenging

function getGenresSortedByTotalRatings() {
  const ratingsgiven = movies.map((movie) => movie.ratings);
}
console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings
//29,28-wrong op,33
