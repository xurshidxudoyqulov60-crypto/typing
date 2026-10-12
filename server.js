/**
 * Antigravity Type - Lokal Wi-Fi / LAN Server (Ixtiyoriy Node.js skripti)
 * 
 * Ishga tushirish uchun:
 *   1. Node.js o'rnatilgan bo'lsa: node server.js
 *   2. Terminalda sizning Wi-Fi IP manzilingiz chiqadi: masalan, http://192.168.1.15:3000
 *   3. Bir xil Wi-Fi'ga ulangan barcha noutbuk, telefon va kompyuterlar brauzerida shu manzilni ochadi!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;

// Mahalliy Wi-Fi IP manzilini aniqlash
function getLocalWifiIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            // IPv4 va ichki bo'lmagan (non-internal) manzilni olish
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'localhost';
}

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('404 Fayl topilmadi');
            } else {
                res.writeHead(500);
                res.end('Server xatosi: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    const localIP = getLocalWifiIP();
    console.log('========================================================');
    console.log('🚀 ANTIGRAVITY TYPE - LOKAL WI-FI SERVER ISHGA TUSHDI!');
    console.log('========================================================');
    console.log(`💻 Ushbu kompyuterda:   http://localhost:${PORT}`);
    console.log(`📶 Bitta Wi-Fi'dagilar: http://${localIP}:${PORT}`);
    console.log('--------------------------------------------------------');
    console.log("Do'stlaringizga yuqoridagi Wi-Fi IP manzilini yuboring!");
    console.log('========================================================');
});
