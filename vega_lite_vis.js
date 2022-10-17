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
    var currentShow = 'gender'
    document.querySelector("#description").innerHTML = 'Both Female and Male intends to spend roughly RM0-RM20 on each transaction, which implies <span class="highlight">no relationship</span> exists between gender and spending amount.'

    document.querySelectorAll('.option').forEach(function(a){
        a.addEventListener('click',function(b){
            if(b.currentTarget.innerText === currentShow){
                return
            }
            if(b.currentTarget.innerText === 'gender'){
                document.querySelector("#description").innerHTML = 'Both Female and Male intends to spend roughly RM0-RM20 on each transaction, which implies <span class="highlight">no relationship</span> exists between gender and spending amount.'
                document.querySelector("#gender").classList.remove('hide')
                document.querySelector("button[data-value=gender]").classList.add('active');
                document.querySelector("#"+currentShow).classList.add('hide')
                document.querySelector(`button[data-value=${currentShow}]`).classList.remove('active');
                currentShow = 'gender'
            }
            if(b.currentTarget.innerText === 'age'){
                document.querySelector("#description").innerHTML = 'Younger customers (below 30) usually spend RM0-RM20, while others spend RM20-RM40. It shows that <span class="highlight">older customers</span> tend to spend more in Starbucks.'
                document.querySelector("#age").classList.remove('hide')
                document.querySelector("button[data-value=age]").classList.add('active');
                document.querySelector(`button[data-value=${currentShow}]`).classList.remove('active');

                document.querySelector("#"+currentShow).classList.add('hide')
                currentShow = 'age'

            }
            if(b.currentTarget.innerText === 'income'){
                document.querySelector("#description").innerHTML = '<span class="highlight">Higher income</span> customers spend more when visiting Starbucks shown in the bar chart.'
                document.querySelector("#income").classList.remove('hide')
                document.querySelector("button[data-value=income]").classList.add('active');
                document.querySelector(`button[data-value=${currentShow}]`).classList.remove('active');

                document.querySelector("#"+currentShow).classList.add('hide')
                currentShow = 'income'
            }
            if(b.currentTarget.innerText === 'status'){
                document.querySelector("#description").innerHTML = 'Customers who are employed mostly spend RM20-RM40, while customers who are self-employed and students spend less amount. The data for analyzing housewife is not enough in this situation. It shows that <span class="highlight">having a stable job</span> tend to spend more in Starbucks.'
                document.querySelector("#status").classList.remove('hide')
                document.querySelector("button[data-value=status]").classList.add('active');
                document.querySelector(`button[data-value=${currentShow}]`).classList.remove('active');

                document.querySelector("#"+currentShow).classList.add('hide')
                currentShow = 'status'
            }
        })
    })
}
