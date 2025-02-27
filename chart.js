// Assign the specification to a local variable vlSpec.
const vlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"config": {"view": {"stroke": ""}},
"width": 400,
"height": 400,
"data": {
"values": [
{"id": 1, "sex": "male"},
{"id": 2, "sex": "male"},
{"id": 3, "sex": "male"},
{"id": 4, "sex": "male"},
{"id": 5, "sex": "male"},
{"id": 6, "sex": "male"},
{"id": 7, "sex": "male"},
{"id": 8, "sex": "male"},
{"id": 9, "sex": "male"},
{"id": 10, "sex": "male"},
{"id": 11, "sex": "male"},
{"id": 12, "sex": "male"},
{"id": 13, "sex": "male"},
{"id": 14, "sex": "male"},
{"id": 15, "sex": "male"},
{"id": 16, "sex": "male"},
{"id": 17, "sex": "male"},
{"id": 18, "sex": "male"},
{"id": 19, "sex": "male"},
{"id": 20, "sex": "male"},
{"id": 21, "sex": "male"},
{"id": 22, "sex": "male"},
{"id": 23, "sex": "male"},
{"id": 24, "sex": "male"},
{"id": 25, "sex": "male"},
{"id": 26, "sex": "male"},
{"id": 27, "sex": "male"},
{"id": 28, "sex": "male"},
{"id": 29, "sex": "male"},
{"id": 30, "sex": "male"},
{"id": 31, "sex": "male"},
{"id": 32, "sex": "male"},
{"id": 33, "sex": "male"},
{"id": 34, "sex": "male"},
{"id": 35, "sex": "male"},
{"id": 36, "sex": "male"},
{"id": 37, "sex": "male"},
{"id": 38, "sex": "male"},
{"id": 39, "sex": "male"},
{"id": 40, "sex": "male"},
{"id": 41, "sex": "male"},
{"id": 42, "sex": "male"},
{"id": 43, "sex": "male"},
{"id": 44, "sex": "male"},
{"id": 45, "sex": "male"},
{"id": 46, "sex": "male"},
{"id": 47, "sex": "male"},
{"id": 48, "sex": "male"},
{"id": 49, "sex": "male"},
{"id": 50, "sex": "male"},
{"id": 51, "sex": "male"},
{"id": 52, "sex": "male"},
{"id": 53, "sex": "male"},
{"id": 54, "sex": "male"},
{"id": 55, "sex": "male"},
{"id": 56, "sex": "male"},
{"id": 57, "sex": "male"},
{"id": 58, "sex": "male"},
{"id": 59, "sex": "male"},
{"id": 60, "sex": "male"},
{"id": 61, "sex": "male"},
{"id": 62, "sex": "male"},
{"id": 63, "sex": "male"},
{"id": 64, "sex": "male"},
{"id": 65, "sex": "male"},
{"id": 66, "sex": "male"},
{"id": 67, "sex": "male"},
{"id": 68, "sex": "male"},
{"id": 69, "sex": "male"},
{"id": 70, "sex": "male"},
{"id": 71, "sex": "male"},
{"id": 72, "sex": "male"},
{"id": 73, "sex": "male"},
{"id": 74, "sex": "male"},
{"id": 75, "sex": "female"},
{"id": 76, "sex": "female"},
{"id": 77, "sex": "female"},
{"id": 78, "sex": "female"},
{"id": 79, "sex": "female"},
{"id": 80, "sex": "female"},
{"id": 81, "sex": "female"},
{"id": 82, "sex": "female"},
{"id": 83, "sex": "female"},
{"id": 84, "sex": "female"},
{"id": 85, "sex": "female"},
{"id": 86, "sex": "female"},
{"id": 87, "sex": "female"},
{"id": 88, "sex": "female"},
{"id": 89, "sex": "female"},
{"id": 90, "sex": "female"},
{"id": 91, "sex": "female"},
{"id": 92, "sex": "female"},
{"id": 93, "sex": "female"},
{"id": 94, "sex": "female"},
{"id": 95, "sex": "female"},
{"id": 96, "sex": "female"},
{"id": 97, "sex": "female"},
{"id": 98, "sex": "female"},
{"id": 99, "sex": "female"},
{"id": 100, "sex": "female"}
]
},
"transform": [
{"calculate": "ceil (datum.id/10)", "as": "col"},
{"calculate": "datum.id - datum.col*10", "as": "row"}
],
"mark": {"type": "point", "filled": true},
"encoding": {
"x": {"field": "col", "type": "ordinal", "axis": null},
"y": {"field": "row", "type": "ordinal", "axis": null},
"shape": {
"value": "M1.7 -1.7h-0.8c0.3 -0.2 0.6 -0.5 0.6 -0.9c0 -0.6 -0.4 -1 -1 -1c-0.6 0 -1 0.4 -1 1c0 0.4 0.2 0.7 0.6 0.9h-0.8c-0.4 0 -0.7 0.3 -0.7 0.6v1.9c0 0.3 0.3 0.6 0.6 0.6h0.2c0 0 0 0.1 0 0.1v1.9c0 0.3 0.2 0.6 0.3 0.6h1.3c0.2 0 0.3 -0.3 0.3 -0.6v-1.8c0 0 0 -0.1 0 -0.1h0.2c0.3 0 0.6 -0.3 0.6 -0.6v-2c0.2 -0.3 -0.1 -0.6 -0.4 -0.6z"
},
"color": {"field": "sex", "type": "nominal",
"scale": {
"domain": ["male", "female"], 
"range": ["#1E90FF", "#FF69B4"]
}

},
"size": {"value": 90}
},
"params": [{"name": "highlight", "select": "interval"}]
};
// Embed the visualization in the container with id `vis`
vegaEmbed("#vis", vlSpec, { actions: false });