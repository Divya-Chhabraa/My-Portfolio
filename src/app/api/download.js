import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.resolve("./public", "DivyaChhabra.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=DivyaChhabra.pdf");
  res.send(fileBuffer);
}
