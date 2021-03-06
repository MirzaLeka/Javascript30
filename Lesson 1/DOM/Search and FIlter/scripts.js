
// function myFunction() {
//     var x = document.getElementById("mySelect").value;
//     document.getElementById("demo").innerHTML = "You selected: " + x;
//     fullSearch.category = x;
// }


const items = [
    { price: 40, date: 1000, text: 'Golf 4', category: 'cars' },
    { price: 50, date: 2000, text: 'Army men', category: 'toys' },
    { price: 60, date: 3000, text: 'Barbie doll', category: 'toys' },
    { price: 70, date: 4000, text: 'Pokeball', category: 'toys' },
    { price: 80, date: 5000, text: 'watch', category: 'furniture' },
    { price: 90, date: 6000, text: 'Golf 3', category: 'cars' },
    { price: 10, date: 7000, text: 'Gameboy', category: 'toys' },
    { price: 20, date: 8000, text: 'Chair', category: 'furniture' },
    { price: 30, date: 9000, text: 'Sony TV', category: 'tech' },
    { price: 40, date: 1000, text: 'Elit TV', category: 'tech' },
    { price: 50, date: 2000, text: 'Hyundai ix35', category: 'cars' },
    { price: 60, date: 3000, text: 'Ford Focus', category: 'cars' },
    { price: 70, date: 4000, text: 'Table', category: 'furniture' },
    { price: 80, date: 5000, text: 'Bed', category: 'furniture' }
];


/*
Number.prototype.toKelvin = function() {
  return (this + 273.15); // this keyword refers to tempCelsius (25)
}
*/

Array.prototype.sortBy = function(field) {
  return function(a, b) {
      return a[field] - b[field];
    // if (a[field] > b[field]) {
    //     return -1;
    // } else if (a[field] < b[field]) {
    //     return 1;
    // }
    // return 0;
  };
}


function randomSort() {

    console.log(items);

    // items.sortBy(items.price);

   items.sort(function(x, y) {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    
    console.log(items);
}

!function() {

    const row = document.querySelector('.row');
    let sum = '';

    items.forEach(item => {
      sum+=  `<div class="col-sm-4">
            <div class="items">
              <h5>${item.text}</h5>
              <p>${item.category}</p>
            </div>
        </div>`
    });

    row.innerHTML = sum;
    
}();


function compare(a,b) {
    return a.price - b.price;
}


function handleSubmit(event) {
    event.preventDefault();
    
    const category = document.getElementById("mySelect");
    const pickedCategory = category.options[category.selectedIndex].value;

    const sort = document.getElementById("sort");
    const sortOption = sort.options[sort.selectedIndex].value;

    console.log(sortOption);

    const searchValue = event.target.search.value;

    // sort by price, date, text(asc/desc)?

    const filteredSearch = items.filter( item => item.text.toLowerCase().includes(searchValue.toLowerCase()) );
    const filterCategory = filteredSearch.filter(search => pickedCategory === 'all categories'? filteredSearch : search.category === pickedCategory );
    // const filterSort = filterCategory.filter(() => sortOption === 'asc' ? filterCategory.sort(compare) : filterCategory.sort(compare).reverse() );

    const filterSort = filterCategory.sort(compare(sortOption));
    
    // console.log(filteredSearch);
    // console.log(filterCategory);
    console.log(filterSort);

    const row = document.querySelector('.row');


}

// for string type
var array = ['White 023', 'White', 'White flower', 'Teatr'];

array.sort(function(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

// Teatr White White 023 White flower
// document.write(array);


///////////

// function sortBy(field) {
//     return function(a, b) {
//         if (a[field] > b[field]) {
//             return -1;
//         } else if (a[field] < b[field]) {
//             return 1;
//         }
//         return 0;
//     };
// }


// https://stackoverflow.com/questions/39877156/how-to-extend-string-prototype-and-use-it-next-in-typescript