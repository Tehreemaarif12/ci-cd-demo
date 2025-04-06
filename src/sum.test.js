// sum.test.js
describe('Sum Function', () => {
    test('adds 2 + 3 to equal 5', () => {
      // Manually set up the DOM elements if you need to test DOM manipulation
      document.body.innerHTML = `
        <input type="number" id="num1" value="2">
        <input type="number" id="num2" value="3">
        <button id="calcButton">Calculate Sum</button>
        <p id="result">Result will appear here</p>
      `;
  
      // Call your function from index.js
      require('./index'); // Assuming the function in index.js will run immediately
  
      // Simulate the button click
      document.getElementById('calcButton').click();
  
      // Check if the result is correct
      expect(document.getElementById('result').textContent).toBe('The sum is: 5');
    });
  });
  