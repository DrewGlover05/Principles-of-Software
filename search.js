function search(term) {
  if (!term || term.trim() === "") {
    return "Empty search term";
  }
  const lowerTerm = term.toLowerCase();
  return `Searching for ${lowerTerm}`;
}

module.exports = search;

// Example runs
console.log(search("Hello"));       // Searching for hello
console.log(search("uRl"));         // Searching for url
console.log(search(""));            // Empty search term
console.log(search());              // Empty search term
