var vg_1 = "map.json"; 
var vg_2 = "ownershiptype.json"; 

vegaEmbed("#map", vg_1).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#radial_plot", vg_2).then(function(result) {
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);