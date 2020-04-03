//function expression to select elements
const selectelElement = (s) => Ducument.querySelector(s);
//open the menu on click
selectElement(s: '.open').addEventlistener('click',() =>{
    selectElement(s:'.nab-list').classlist.add('active');

});
//close the menu on click
selectElement(s: '.close').addEventlistener('click',() =>{
    selectElement(s:'.nab-list').classlist.remove(tokens:'active');

});
