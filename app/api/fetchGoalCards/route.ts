import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    console.log("username", username);

    const { data, error } = await supabase.from("goal_cards").select("*");

    if (error) {
      console.error("Error fetching goal cards:", error);
      return NextResponse.json({ error: "Failed to fetch goal cards" }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
