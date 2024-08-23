const categories = document.querySelectorAll('ul#categories > .item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  console.log('Category:', title);

  const sum = category.querySelectorAll('ul li').length;
  console.log('Elements:', sum);
});
