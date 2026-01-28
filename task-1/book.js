function isBookApplicable(searchString) {
  const bookTitle ="The fundamentals of JavaScript";

  if (!searchString) 
    return false;

  const normalSearch = searchString.trim().toLowerCase();
  const normalTitle = bookTitle.toLowerCase();

  return normalTitle.includes(normalSearch);
}

console.log(isBookApplicable("javascript"));
console.log(isBookApplicable("javascript "));
console.log(isBookApplicable("python"));
console.log(isBookApplicable("JavaScript"));
console.log(isBookApplicable("JAVASCRIPT"));
