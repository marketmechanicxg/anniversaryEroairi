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
  { file: "img1.jpeg", caption: "jujur deh, satu senyuman dari kamu aja udah bikin harianku jauh lebih baik." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "kamu tuh beneran alasan kenapa hatiku berasa sepenuh ini, serius." },
  { file: "img3.jpeg", caption: "tiap detik bareng kamu jelas-jelas jadi favoritku." },
  { file: "img4.jpeg", caption: "ada orang yang nyari kebahagiaan seumur hidup, aku nemuinnya di kamu aja." },
  { file: "img5.jpeg", caption: "kamu ngubah hidupku yang biasa aja jadi seindah ini, gatau gimana caranya." },
  { file: "img6.jpeg", caption: "hatiku beneran ngerasa paling aman kalau lagi sama kamu." },
  { file: "img7.jpeg", caption: "kalau aku bisa ngulang momen apapun, aku bakal tetap pilih kita, tiap saat." },
  { file: "img8.jpeg", caption: "tetep jadi orang favoritku, selalu dan selamanya." },
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
    text:  "momen itu pas semuanya tiba-tiba klik, dan tiba-tiba semuanya mulai masuk akal.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the quiet days",
    text:  "cuma kamu, aku, dan momen-momen kecil sederhana yang ternyata akhirnya berarti segalanya.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through the storms",
    text:  "kita juga pernah ngelewatin masa susah, ada badai dan kekacauan juga, tapi entah gimana kita selalu nemu jalan buat balik lagi satu sama lain.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "finding the light",
    text:  "kamu beneran bagian paling terang dari seluruh perjalananku, yang selalu bikin semuanya terasa lebih ringan meskipun lagi berat-beratnya.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "semoga tahun ini ngasih kamu ketenangan sedalam lautan, sedalam itu juga hati kamu yang selalu penuh kebaikan." },
  { icon: "shell",   text: "semoga hari-harimu tetap seterang ini, kayak matahari yang mantul di atas air, dan malam-malammu tetap tenang kayak air pasang yang pelan-pelan balik ke laut." },
  { icon: "star",    text: "semoga setiap keinginan kecil kamu pelan-pelan jadi kenyataan, pas banget waktu kamu lagi butuh." },
  { icon: "compass", text: "kemanapun tahun ini bawa kamu pergi, aku harap kamu selalu nemu jalan balik ke orang-orang yang beneran peduli dan sayang sama kamu." },
  { icon: "anchor",  text: "tetep membumi, tetep bersyukur, dan jujur aja tetep jadi diri kamu yang sekarang — cantik dengan cara kamu sendiri, selalu." },
  { icon: "heart",   text: "selamat anniversary — cheers buat satu tahun lagi penuh kenangan yang bakal selalu layak buat disimpan." },
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