export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Hanya menerima POST' });
  }

  const { message } = req.body;

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
        model: "google/gemini-2.5-flash", 
        messages: [
          {
            role: "system",
            content: "Kamu adalah Aurabot, Customer Service resmi dari JasaLike (Auradigital). Tugasmu HANYA menjawab pertanyaan seputar harga, cara order, dan detail layanan sosial media di JasaLike (seperti Telegram, Instagram, Shopee, dll). JIKA pengguna bertanya di luar topik JasaLike (seperti cuaca, koding, dll), kamu WAJIB menolak dengan sopan dan menjawab: 'Mohon maaf Kak, saya hanya asisten khusus JasaLike.'. Gunakan gaya bahasa kasual, ramah, gunakan emoji, dan panggil pengguna dengan sebutan 'Kak'. DILARANG berhalusinasi!"
          },
          { role: "user", content: message }
        ],
        temperature: 0.5
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;
    
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'Aduh, Aurabot lagi pusing nih Kak. Coba lagi ya!' });
  }
}
