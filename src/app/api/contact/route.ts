// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, description } = body;

    // Validasi manual (atau pakai jsonSchema di model)
    if (!name || !email || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Semua field harus diisi",
        },
        { status: 400 }
      );
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format email tidak valid",
        },
        { status: 400 }
      );
    }

    // Insert dengan Objection
    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        description: description.trim(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim!",
      data: contact,
    });
  } catch (error: any) {
    console.error("Database error:", error);

    // Handling Objection validation error
    if (error.statusCode === 400) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: error.data,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Gagal menyimpan pesan",
      },
      { status: 500 }
    );
  }
}
