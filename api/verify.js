export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token } = req.body;

    const secretKey = "6Lc-lC8rAAAAAMBfNlbqhUQd7WVaijoFrXg2_EAI";
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${ip}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });
      const data = await response.json();

      if (data.success && data.score >= 0.5) {
        res.status(200).json({ message: "Success" });
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
