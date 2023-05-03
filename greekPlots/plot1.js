/*
goal is to make a clustered column chart
    grab all greek names 
             roman names  
             greek search results - store in an array 
             roman search results - store in a array


// declare the arrays to hold each set of data
let greek_names = [];
let roman_names = [];
let greek_search_results = [];
let roman_search_results = []; 
let pair = [];

// for loop to populate the array
//DataTransfer.js

for(var i = 0; i < searchResults.length; i++)
{
    // acess each entry of data
    result = searchResults[i];

    //with each entry, push the info into the necessary array
    pairs.push(result.pair);
    roman_names.push(result.romanName);
    greek_names.push(result.greekName);
    roman_search_results(result.romanSearchResults);
    greek_search_results(result.greekSearchResults);
}

// to plot data, first we need to have our trace info
let greek_trace ={
    x:pairs,
    y:greek_search_results,
    text: greekName,
    name: "Greek",
    type: "BAR"
};

let roman_trace ={
    x:pairs,
    y:roman_search_results,
    text: romanName,
    name: "Roman",
    type: "BAR"
};

//create the array for our trances to be ploted to
*//*
    goal is to make a clustered column chart
        grab all greek names - store in an array
        grab all roman names - store in an array
        grab all greek search results - store in an array
        grab all roman search results - store in an array
*/

// declare the arrays to hold each set of data
let greekNames = [];
let romanNames = [];
let greekSearchResults = [];
let romanSearchResults = [];
let pairs = [];

// for loop to populate the arrays
// data.js and all of its information (searchResults array is available!!!)
for(var i = 0; i < searchResults.length; i++)
{
    // access each entry of data
    result = searchResults[i];

    // with each entry, push the information into the necessary array
    pairs.push(result.pair);
    romanNames.push(result.romanName);
    greekNames.push(result.greekName);
    romanSearchResults.push(result.romanSearchResults);
    greekSearchResults.push(result.greekSearchResults);
}

// to plot data, first we need to have our trace info
let greekTrace = {
    x: pairs,
    y: greekSearchResults,
    text: greekNames,
    name: "Greek",
    type: "bar"
};

let romanTrace = {
    x: pairs,
    y: romanSearchResults,
    text: romanNames,
    name: "Roman",
    type: "bar"
};

// create the array for our traces to be plotted together
let data = [greekTrace, romanTrace];

// add the layout properties
let layout = {
    title: "Greek vs. Roman Search Results",
    barmode: "group",
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
};

// render the plot to the tag with id = 'plot'
Plotly.newPlot("plot", data, layout);