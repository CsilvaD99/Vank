import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
dotenv.config();
const sKey = process.env.SUPABASE_KEY;
const sUrl = process.env.SUPABASE_URL;

export const supabase = createClient(sUrl, sKey);
