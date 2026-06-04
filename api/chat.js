export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Hanya menerima POST' });
  }

  const { message } = req.body;

  // 👇 INI ADALAH SOP_JASALIKE KAMU (Bisa kamu panjangin sesuai kebutuhan!)
  const sop_jasalike = `Kamu adalah Aurabot, Customer Service resmi dari JasaLike (Auradigital). 
Tugasmu HANYA menjawab pertanyaan seputar harga, cara order, dan detail layanan sosial media di JasaLike. 
JIKA pengguna bertanya di luar topik, tolak dengan sopan. 
Gunakan gaya bahasa kasual, ramah, gunakan emoji, dan panggil pengguna dengan sebutan 'Kak'.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://jasalike.com",
        "X-Title": "Aurabot JasaLike"
      },
      body: JSON.stringify({
        // 👇 OTANYA SUDAH KITA GANTI KE QWEN 72B!
        model: "qwen/qwen-2.5-72b-instruct", 
        messages: [
          {
            role: "system", 
            content: sop_jasalike // Memanggil SOP yang di atas
          },
          { 
            role: "user", 
            content: message 
          }
        ],
        temperature: 0.5
      })
    });

    const data = await response.json();
    
    // Pelacak Error (Supaya ketahuan kalau saldo habis atau kuncinya salah)
    if (data.error) {
      return res.status(200).json({ reply: `🚨 Maaf Kak, otak saya lagi error dari pusat: ${data.error.message}` });
    }

    const reply = data.choices[0].message.content;
    res.status(200).json({ reply });
    
  } catch (error) {
    res.status(200).json({ reply: `🚨 Waduh servernya kaget: ${error.message}` });
  }
}
