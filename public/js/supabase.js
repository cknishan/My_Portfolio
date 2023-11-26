// Require dotenv and load the .env file
// require('dotenv').config();

import dotenv from "dotenv"
dotenv.config()
// Now you can use the values from the .env file


// const { createClient } = require('@supabase/supabase-js');
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;


// const { SUPABASE_URL, SUPABASE_KEY } = import.meta.env
// const supabaseUrl = SUPABASE_URL;
// const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
// module.exports = supabase
export default supabase
