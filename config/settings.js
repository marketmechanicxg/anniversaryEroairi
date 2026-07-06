/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN ANNIVERSARY — SEMUA PENGATURAN DI SINI       ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "0123";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Khairiah Nissa";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Give Me Your Forever",             // ← GANTI JUDUL LAGU
    artist: "Zack Tabudlo",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: " " },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: " " },
  { file: "img3.jpeg", caption: " " },
  { file: "img4.jpeg", caption: " " },
  { file: "img5.jpeg", caption: " " },
  { file: "img6.jpeg", caption: " " },
  { file: "img7.jpeg", caption: " " },
  { file: "img8.jpeg", caption: " " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"Selamat anniversary yang ke-2 tahun, sayang❤️",
"Kalau melihat perjalanan kita, mungkin hubungan ini tidak selalu mudah. Kita pernah berpisah, pernah saling menjauh, pernah merasa lelah, dan beberapa kali harus memulai semuanya dari awal. Tapi di antara semua itu, ada satu hal yang selalu membuatku kagum: pada akhirnya kita selalu menemukan jalan untuk kembali bersama.",
"LDR mengajarkan kita bahwa cinta bukan hanya tentang selalu berada di samping satu sama lain, tetapi tentang tetap memilih satu sama lain meskipun terpisah jarak dan waktu. Terima kasih karena sudah bertahan, sudah mengerti kekuranganku, dan tetap percaya pada hubungan ini ketika keadaan tidak selalu baik-baik saja.",
"Dua tahun mungkin bukan waktu yang singkat. Di dalamnya ada banyak tawa, air mata, rindu, pertengkaran, dan pelajaran yang membuat kita tumbuh bersama. Aku bersyukur karena di antara miliaran orang di dunia ini, aku masih bisa memanggil airi 'sayang' dan menjadi bagian dari hidup airi. ",
"Semoga hubungan kita ke depan lebih kuat, lebih dewasa, dan lebih bahagia. Aku ingin kita terus saling memperjuangkan, bukan karena hubungan kita sempurna, tetapi karena airi adalah seseorang yang selalu ingin aku pilih setiap hari.",
"Aku sayang airi💕🌹Terima kasih sudah menjadi rumah yang selalu membuatku ingin pulang, meskipun jarak masih memisahkan kita.",
"Happy 2nd Anniversary, pacar cantikku Airi. ❤️✨",

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "where it all started",
    text:  "semuanya dimulai dari pertemuan yang nggak pernah kita sangka, sampai akhirnya cerita kita pelan-pelan menemukan jalannya sendiri.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "our little moments",
    text:  "hari-hari sederhana yang kita lewatin bareng ternyata berubah jadi kenangan yang paling sering kita rindukan.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through everything",
    text:  "kita pernah ketawa, pernah nangis, pernah capek, bahkan hampir nyerah. tapi di setiap cerita itu, kita selalu milih buat bertahan dan tumbuh bareng.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "still choosing us",
    text:  "setelah semua yang udah kita lewatin, ternyata pilihan terbaik kita tetap sama: saling memilih, saling pulang, dan terus melangkah bersama.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "semoga tahun ini ngasih kita ketenangan sedalam lautan, dan semoga hati kita tetap saling jadi tempat pulang." },
  { icon: "shell",   text: "semoga hari-hari kita tetap seterang matahari di atas laut, dan setiap malam selalu dipenuhi rasa nyaman karena masih saling memiliki." },
  { icon: "star",    text: "semoga semua mimpi yang kita susun bareng pelan-pelan jadi kenyataan, satu per satu, di waktu yang paling tepat." },
  { icon: "compass", text: "ke mana pun hidup membawa kita, semoga langkah kita selalu menemukan jalan untuk kembali saling memilih." },
  { icon: "anchor",  text: "semoga cinta kita tetap kuat, tetap sederhana, dan tetap jadi tempat paling aman untuk saling bersandar, apa pun yang terjadi." },
  { icon: "heart",   text: "happy anniversary, untuk semua tawa, pelukan, perjuangan, dan setiap hari yang sudah kita lewati bersama. here's to many more beautiful years with us. 🤍" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6283132582463";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "haii aku baru aja buka botolnya, makasih banyak udah bikin hariku jauh lebih baik! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);