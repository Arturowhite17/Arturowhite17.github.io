// d3.selectAll("p")
// .style("color", "brown");

const canvas = d3.select(".canvas");

//var dataArray = [4, 15, 34,123,34,0];

var dataArray = [
    {width:25, height: 4, fill: "pink"},
    {width:25, height: 14, fill: "purple"},
    {width:25, height: 44, fill: "orange"},
    {width:25, height: 124, fill: "green"},
    {width:25, height: 12, fill: "grey"},
    {width:25, height: 32, fill: "red"},

];

//add and svg element

const svg = canvas.append("svg")
                 .attr('width',600 )
                 .attr("height", 600);

const rect = svg.selectAll("rect");

//#1 one way of adding Json remotely
//d3.json('https://jsonplaceholder.typicode.com/todos/1', function(err,data){});

// //#2 way of adding json remotely
// d3.json('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data =>{
//         console.log(data);

//         //code here to actually draw elements on screen
        
// })

//#3 way of adding json via file (or csv, tsv, etc...)
d3.json("text.json").then(data =>{
        console.log(data);

        //code here to actually draw elements on screen
    rect.data(data)
    .enter()
    .append("rect")
    .attr("width", 24)
        .attr("height", function(d){
            return d.height*2; 
        })
        .attr("fill", d => d.fill)
        .attr("x", function(d, i){
            return i*25;})

        .attr("y", function(d, i){
            return 200-d.height*2;});
        
})

//code before the json data import above. This went into that promise .then code section:
                // rect.data(dataArray)
                // .enter()
                // .append("rect")
                // .attr("width", 24)
                //     .attr("height", function(d){
                //         return d.height*2; 
                //     })
                //     .attr("fill", d => d.fill)
                //     .attr("x", function(d, i){
                //         return i*25;})

                //     .attr("y", function(d, i){
                //         return 100-d.height*2;});

////2nd overlay bars (future needs)

// const rect2 = svg.selectAll("rect");

//                 rect.data(dataArray)
//                 .enter()
//                 .append("rect")
//                 .attr("width", 24)
//                     .attr("height", function(d){
//                         return d.height*2; 
//                     })
//                     .attr("fill", function(d){
//                         return d.fill; 
//                     })

//                     .attr("x", function(d, i){
//                         return i*25;})

//                     .attr("y", function(d, i){
//                         return 100-d.height*2;});



////fundimentals: 
////circle example
// svg.append("circle").attr("cx", "100")
//                 .attr("cy", "100")
//                 .attr("r", "50")
//                 .attr('fill', "blue");

////rectangle example
// svg.append("rect").attr("x", "150")
//                 .attr("y", "80")
//                 .attr("width", "10")
//                 .attr("height", "50")
//                 .attr('fill', "green")
//                 .attr("stroke-color","white" );

////line example
// svg.append("line").attr("x1", 129)
// .attr("x2", 45).attr("y1", 100).attr("y2", 46).attr("stroke", "grey");

//text example
// svg.append("text").text("Hello").attr("x", 110).attr("y", 10).attr("fill", "grey").attr("font-size", 12).attr("text-anchor", "start");
// svg.append("text").text("There!").attr("x", 110).attr("y", 30).attr("fill", "grey").attr("font-size", 12).attr("text-anchor", "middle");
// svg.append("text").text("Arturo!").attr("x", 101).attr("y", 50).attr("fill", "grey").attr("font-size", 12).attr("text-anchor", "end");