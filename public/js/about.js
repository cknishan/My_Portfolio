// "use strict";

// Import supabase module
// const supabase = require('./supabase.js');
import supabase from "./supabase.js";

// const about = document.querySelector('.about-me')

// Define an async function and use await inside it
const fetchData = async () => {
    try {
        const { data, error } = await supabase
            .from('about')
            .select('text');

        if (error) {
            console.error('Error fetching data:', error.message);
        } else {
            console.log('Fetched data:', data);
            // data.forEach(element => {
            //     about.innerHTML = `<p>${element}</p>`
            // })
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

// Call the async function
fetchData();

