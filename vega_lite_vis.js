var vg_1 = "map.json"; 
var vg_2 = "ownershiptype.json"; 
var vg_3 = "Country_store.json";
var vg_4 = "gender.json";
var vg_5 = "Age.json";
var vg_6 = "status.json";
var vg_7 = "Annualincome.json";
var vg_8 = "Ratings.json";
var vg_9 = "Promotionmethod.json"

vegaEmbed("#map", vg_1).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#radial_plot", vg_2).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#bar_chart_labels", vg_3).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#gender", vg_4).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#age", vg_5).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#status", vg_6).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#income", vg_7).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#ratings", vg_8).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#promotionalmethod", vg_9).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

window.onload =function(){
    var currentShow = 'age'
    document.querySelectorAll('.option').forEach(function(a){
        a.addEventListener('click',function(b){
            if(b.currentTarget.innerText === currentShow){
                return
            }
            if(b.currentTarget.innerText === 'gender'){
                document.querySelector("#description").innerText = '1'
                document.querySelector("#gender").classList.remove('hide')
                document.querySelector("#"+currentShow).classList.add('hide')
                currentShow = 'gender'
            }
            if(b.currentTarget.innerText === 'age'){
                document.querySelector("#description").innerText = '2'
                document.querySelector("#age").classList.remove('hide')
                document.querySelector("#"+currentShow).classList.add('hide')
                currentShow = 'age'

            }
            if(b.currentTarget.innerText === 'income'){
                document.querySelector("#description").innerText = '3'
                document.querySelector("#income").classList.remove('hide')
                document.querySelector("#"+currentShow).classList.add('hide')
                currentShow = 'income'
            }
            if(b.currentTarget.innerText === 'status'){
                document.querySelector("#description").innerText = '4'
                document.querySelector("#status").classList.remove('hide')
                document.querySelector("#"+currentShow).classList.add('hide')
                currentShow = 'status'
            }
        })
    })
}
