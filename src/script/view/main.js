import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/drink-list.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const drinkListElement = document.querySelector('drink-list');

  const onButtonSearchClicked = async () => {
    DataSource.searchDrink(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult)
  };

  const renderResult = results => {
    drinkListElement.drinks = results;
  };

  const fallbackResult = message => {
    drinkListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

};

export default main;