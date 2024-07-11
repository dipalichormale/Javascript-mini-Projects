const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)){
      results.innerHTML = ` please give a valid height ${height} `;
    } else if(weight==='' || weight<0 || isNaN(weight)){
      results.innerHTML = ` please give a valid weight ${weight} `;
    } else {
        const bmi = (weight / ((height*height)/1000)).toFixed(2);
        // to show the result
        results.innerHTML = `<span>${bmi}</span>`;   
        // if (weight<18.6) {
        //     results.innerHTML = `under weight `;
        // } else if (weight == (18.6-24.9)){
        //     results.innerHTML = `normal range `;
        // } else if(weight>24.9){
        //     results.innerHTML = ` overweight `;
        // }  
    }

});

