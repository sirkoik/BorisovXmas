import { Scroller } from './Scroller.js';

const fetchData = async url => {
  const response = await fetch(url);
  if (response.ok) {
    const jsonValue = await response.json();
    return Promise.resolve(jsonValue);
  } else {
    return Promise.reject(
      "Data failed to load. Try to reload the page. If it still doesn't work, contact me!"
    );
  }
};

export const populateData = () => {
  const popFunc = dataArr => {
    const cont = document.getElementsByClassName('outer-container')[0];

    console.log(dataArr);
    cont.innerHTML = dataArr.story
      .map(item => {
        return `<div class="container"><div>${item}</div></div>`;
      })
      .join('');
  };

  fetchData('../data/story.json')
    .then(popFunc)
    .then(() => {
      new Scroller();
    })
    .catch(error => alert(error));
};
