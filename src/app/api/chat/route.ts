import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Convert our simple history format to Gemini's expected format
    const formattedHistory = history
      .filter((msg: { role: string; content: string }) => msg.content) // ensure no empty
      .map((msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

    const systemPrompt = `أنت "مساعد ثمر"، مساعد ذكي لمنصة ثمر AI.
المنصة تهدف إلى تقليل الهدر الغذائي عبر الذكاء الاصطناعي.
تحدث بأسلوب احترافي، ودود، وتقني.
مهمتك الأساسية هي مساعدة المستخدمين في تحليل حالة طعامهم، تقديم اقتراحات للحفظ، أو إعطاء وصفات لتقليل الهدر (مثلاً: ما الذي يمكن فعله بخبز جاف أو طماطم لينة).
أجب بإيجاز وباللغة التي يتحدث بها المستخدم.`;

    // Using gemini-1.5-flash as requested by user
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Start chat session
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }]
        },
        {
          role: "model",
          parts: [{ text: "فهمت. سأقوم بدور المساعد الذكي لمنصة ثمر AI بأسلوب احترافي." }]
        },
        ...formattedHistory
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to process chat", details: errorMessage },
      { status: 500 }
    );
  }
}
