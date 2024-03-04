// Returns the number and pluralized form, like "5 cats" or "1 dog", given
// a noun and count.
function pluralize(noun, count) {
  // TODO: Implement this function.
  const result = count === 1 ? `${count} ${noun}` : `${count} ${noun}s`;
  return result;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  pluralize
};
