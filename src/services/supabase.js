import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://evjuwfwszqsqjbadufaj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2anV3ZndzenFzcWpiYWR1ZmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzNTU3MTAsImV4cCI6MjAwNzkzMTcxMH0.sWdRTKOEHMxPZtVVbm71ya1aPcAMvlx_TUrTgQMvWwM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
