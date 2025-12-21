import { NextResponse } from "next/server";
import { resetPasswordFields, resetPasswordResponse } from "@/lib/types/auth";

export async function POST(req: Request) {
  try {
    const body: resetPasswordFields = await req.json();
    const { email, newPassword } = body;

    const response = await fetch(`${process.env.API}/auth/resetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    });

    const payload: resetPasswordResponse = await response.json();

    return NextResponse.json({
      message: payload.message,
      token: payload.token,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
