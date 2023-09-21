import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://trvoqmrjcaozcqsewyvv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydm9xbXJqY2FvemNxc2V3eXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMTA4ODMsImV4cCI6MjAwODc4Njg4M30.zaQO51Htu88LuhqX8rIbse19WNdccUKoSFLBOBhF1u4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
