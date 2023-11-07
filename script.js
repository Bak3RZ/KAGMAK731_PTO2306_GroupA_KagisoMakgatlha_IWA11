// Selected <dl> element with data-key="order1"
const order1 = document.querySelector('[data-key="order1"]');
// Got the individual within <dl> using querySelector
const biscuitsCount = order1.querySelector('.biscuits .count');
const donutsCount = order1.querySelector('.donuts .count');
const pancakesCount = order1.querySelector('.pancakes .count');
const statusElement = order1.querySelector('.status dd');

const order2 = document.querySelector('[data-key="order2"]');
const biscuitsCount2 = order2.querySelector('.biscuits .count');
const donutsCount2 = order2.querySelector('.donuts .count');
const pancakesCount2 = order2.querySelector('.pancakes .count');
const statusElement2 = order2.querySelector('.status dd');

const order3 = document.querySelector('[data-key="order3"]');
const biscuitsCount3 = order3.querySelector('.biscuits .count');
const donutsCount3 = order3.querySelector('.donuts .count');
const pancakesCount3 = order3.querySelector('.pancakes .count');
const statusElement3 = order3.querySelector('.status dd');

// Retrieve the data attributes and update the inner text

biscuitsCount.innerText = order1.getAttribute('data-biscuits');
donutsCount.innerText = order1.getAttribute('data-donuts');
pancakesCount.innerText = order1.getAttribute('data-pancakes');
statusElement.innerText = order1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

biscuitsCount2.innerText = order2.getAttribute('data-biscuits');
donutsCount2.innerText = order2.getAttribute('data-donuts');
pancakesCount2.innerText = order2.getAttribute('data-pancakes');
statusElement2.innerText = order2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

biscuitsCount3.innerText = order3.getAttribute('data-biscuits');
donutsCount3.innerText = order3.getAttribute('data-donuts');
pancakesCount3.innerText = order3.getAttribute('data-pancakes');
statusElement3.innerText = order3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';