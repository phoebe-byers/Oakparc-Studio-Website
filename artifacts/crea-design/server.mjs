import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "dist", "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico":  "image/x-icon",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".json": "application/json",
};

function serve(res, filePath, statusCode = 200) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || "application/octet-stream";
  const isAsset = filePath.includes(`${path.sep}assets${path.sep}`);

  res.writeHead(statusCode, {
    "Content-Type": mime,
    "Cache-Control": isAsset
      ? "public, max-age=31536000, immutable"
      : "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];
  let filePath = path.join(PUBLIC_DIR, urlPath);

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      serve(res, filePath);
    } else {
      const indexPath = path.join(PUBLIC_DIR, "index.html");
      serve(res, indexPath);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Oakparc Studio serving on port ${PORT}`);
});
