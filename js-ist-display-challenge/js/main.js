var cities = [
    "Denver",
    "Boulder",
    "Black Hawk",
    "Aurora"
  ];
  
  let list = document.querySelector('ul.list-cities');
  
  for (var i = 0; i < cities.length; i++) {
    let cityList = cities[i];
    let newLi = document.createElement("li");
    newLi.textContent = cities[i];
    list.appendChild(newLi);
  }