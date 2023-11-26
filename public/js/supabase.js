// Require dotenv and load the .env file
require('dotenv').config();

// Now you can use the values from the .env file
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase
// export default supabase
