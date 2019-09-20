function sumItems(array) {
  return array.reduce((sum, el) => {
    if (Array.isArray(el)) {
      return sum + sumItems(el);
    } else {
      return sum + el;
    }
  }, 0);
}

module.exports = sumItems;
