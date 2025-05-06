export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { "g-token": token } = req.body;
  $secretKey = "6Lc-lC8rAAAAAMBfNlbqhUQd7WVaijoFrXg2_EAI";

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  const data = await response.json();

  if (data.success && data.score >= 0.5) {
    res.status(200).json(data);
  } else {
    res.status(401).json(data);
  }
}
