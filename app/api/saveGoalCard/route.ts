import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("request", request);
  try {
    const { username, goals, theme } = await request.json();

    // Validation
    if (!username || !goals || !theme) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("goal_cards")
      .insert([{ username, goals, theme, likes: 0 }])
      .select();

    if (error) {
      console.error("Error saving goal card:", error);
      return NextResponse.json({ error: "Failed to save goal card" }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
