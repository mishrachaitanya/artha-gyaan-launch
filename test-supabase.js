import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log("Invoking create-order...");
  // Need to get a workshop ID first
  const { data: workshops } = await supabase.from("workshops").select("id").limit(1);
  if (!workshops || workshops.length === 0) {
    console.error("No workshops found to test with.");
    return;
  }
  
  const workshop_id = workshops[0].id;
  console.log("Using workshop_id:", workshop_id);

  const response = await fetch("https://ocwfsztoxbawhmeegfye.supabase.co/functions/v1/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${supabaseKey}`
    },
    body: JSON.stringify({
      workshop_id,
      parent_name: "Test Parent",
      parent_email: "test@example.com",
      parent_phone: "1234567890",
      student_name: "Test Student",
      student_age: 15,
    })
  });
  console.log("Status:", response.status);
  console.log("Response text:", await response.text());
}

test();
