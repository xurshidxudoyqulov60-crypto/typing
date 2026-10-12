# 🚀 Antigravity Type — Zero-G Tez Yozish & Kosmik Poyga (TypeRacer + Wi-Fi Multiplayer)

Monkeytype uslubidagi **Dark Space** va **Glassmorphism** dizayni, **Antigravitatsiya (vaznsizlik)** fizikasi, hamda **Kosmik Mashinalar Poygasi (TypeRacer)** va **Lokal Wi-Fi Multiplayer** tizimi bilan jihozlangan interaktiv veb-platforma.

---

## 🏎️ YANGI: Kosmik Mashinalar Poygasi (Space Cyber Race)
- **Kim tez yozsa, mashinasi oldinga chiqadi!** 
  - Harf va so'zlarni qanchalik tez va to'g'ri yozsangiz, kiber-hovercar avtomobilingiz reaktiv olov purkab trassa bo'ylab shiddat bilan oldinga intiladi!
  - Sekin yozgan yoki xato qilgan o'yinchilarning mashinasi tezlikni yo'qotadi va ortda qoladi.
- **Jonli 3D/SVG Hovercarlar**:
  - 4 ta neon trassa va o'ziga xos rangdagi kosmik mashinalar:
    - 🏎️ **Siz**: Neon Moviy (Cyan Voyager)
    - 🛸 **2-O'yinchi / Bot**: Neon Binafsha (Purple Nebula)
    - ⚡ **3-O'yinchi / Bot**: Neon Zumrad (Emerald Comet)
    - 🔥 **4-O'yinchi / Bot**: Neon Olovrang (Solar Flare)
  - Haqiqiy reaktiv plazma olovi (tezlik 80+ WPM'dan oshganda alangalanadi).
  - Jonli WPM va o'rin indikatori (`#1`, `#2`, `#3`, `#4`).
- **3... 2... 1... START Svetofori**:
  - Haqiqiy poyga start signali va dvigatel tovushi bilan boshlanadi.
- **Shohsupa (Podium Standings)**:
  - Finish chizig'ini birinchi kesib o'tgan g'olib oltin kubok 🏆 va birinchilik tojini qo'lga kiritadi!
  - Har bir ishtirokchining aniq vaqti va WPM tezligi ko'rsatiladi.

---

## 📶 Bitta Wi-Fi Tarmog'ida Birgalikda O'ynash (Wi-Fi Multiplayer)

Bir xil Wi-Fi tarmog'iga (yoki bir xil lokal tarmoqqa) ulangan istalgan kompyuter, noutbuk yoki smartfonlar orqali birgalikda poygalashish mumkin!

### 1-usul: To'g'ridan-to'g'ri Brauzerda (Server o'rnatmasdan — WebRTC P2P)
1. **1-kompyuter (Host)**:
   - Yuqori paneldagi `🏎 Poyga` rejimini tanlaydi.
   - `📶 Wi-Fi Multiplayer` tugmasini bosadi va **Xona Yaratish (Host)** bo'limidagi kodni oladi (masalan: `POYGA-77`).
2. **2-kompyuter / Telefon (Mehmon)**:
   - Shu Wi-Fi'ga ulangan holda ilovani ochadi.
   - `📶 Wi-Fi Multiplayer` -> **Xonaga Qo'shilish (Join)** bo'limiga o'sha kodni (`POYGA-77`) kiritib, **Ulanish** tugmasini bosadi!
3. **Poygani boshlash**:
   - Host `Poygani Boshlash! 🚀` tugmasini bosishi bilan barcha kompyuterlarda bir vaqtda 3 soniyalik svetofor hisobi boshlanadi va poyga start oladi!
   - Bir-biringizning mashinalaringizni real vaqtda harakatlanishini ko'rib turasiz.

*(Agar bir xil kompyuterda 2 ta tab ochib sinab ko'rmoqchi bo'lsangiz, `BroadcastChannel` orqali bir zumda bir-birini ko'radi!)*

### 2-usul: Lokal Wi-Fi Server orqali (Ixtiyoriy Node.js)
Agar barcha do'stlaringiz sizning kompyuteringizdagi o'yinga to'g'ridan-to'g'ri o'z brauzeridan kirishini xohlasangiz:
```bash
node server.js
```
Terminalda sizning lokal Wi-Fi IP manzilingiz chiqadi:
`http://192.168.1.X:3000`
Wi-Fi'ga ulangan barcha do'stlar telefon yoki noutbukida ushbu manzilni terib, to'g'ridan-to'g'ri o'yinga ulanishlari mumkin!

---

## 🤖 Aqlli Botlar bilan Mashq Rejimi
Agar hozir yoningizda do'stlaringiz bo'lmasa:
- `🤖 Botlar bilan poyga` tugmasini bosing!
- Tizim avtomatik ravishda turli mahorat darajasidagi 3 ta botni (`Falcon Bot` 55 WPM, `Cyber Nova` 75 WPM, `Orbital Phantom` 92 WPM) trassaga chiqaradi.
- Ular bilan xuddi haqiqiy o'yinchilar kabi raqobatlashishingiz mumkin!

---

## 🌌 Boshqa Asosiy Xususiyatlar
- **Dark Space & Glassmorphism**: Chuqur kosmos foni, shaffof shisha panellar va JetBrains Mono shrifti.
- **Antigravitatsiya Fizikasi**: Yozilgan harflar vaznsizlik kuchi bilan havoga ko'tariladi, to'g'ri harflar moviy, xatolar qizil kursiv bo'lib ajraladi.
- **Mexanik Klaviatura Sintezatori**: Web Audio API orqali Thock, Clicky va Kosmik lazer tovushlari.
- **Tezlik Grafigi**: Har bir soniyadagi tezlik dinamikasi va xatolar interaktiv Canvas grafigida aks etadi.
- **Boshqaruv**: `Tab + Enter` orqali yangi poygani boshlash.

---

## 🚀 Ishga Tushirish
Shunchaki `index.html` faylini brauzerda oching va poygani boshlang!
