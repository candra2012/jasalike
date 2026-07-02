// src/data/relatedServices.js
// Data pusat untuk komponen RelatedServices.astro
// Tambahkan satu object jika ada layanan baru.

export const relatedServices = [
  {
    category: "instagram",
    title: "Instagram",
    icon: "lucide:instagram",
    colorClass: "text-pink-600",
    bgClass: "bg-pink-600/10",
    borderClass: "border-pink-500/30",
    services: [
      {
        link: "/like-instagram/",
        name: "Like Instagram",
        icon: "lucide:instagram",
        description: "Dorongan interaksi untuk Reels dan Feed agar lebih cepat ditemukan algoritma.",
        anchors: ["Jasa Like Instagram", "Tambah Like Instagram", "Optimasi Like Instagram", "Layanan Like Instagram"]
      },
      {
        link: "/like-komentar-instagram/",
        name: "Like Komentar Instagram",
        icon: "lucide:message-circle",
        description: "Naikkan posisi komentar Anda ke urutan teratas di postingan viral.",
        anchors: ["Jasa Like Komentar IG", "Tambah Like Komentar Instagram", "Optimasi Komentar IG", "Layanan Like Komentar Instagram"]
      },
      {
        link: "/jasa-tambah-follower/",
        name: "Tambah Follower Instagram",
        icon: "lucide:user-plus",
        description: "Tingkatkan kredibilitas profil dengan follower aktif dan terukur.",
        anchors: ["Jasa Followers Instagram", "Tambah Followers Instagram", "Optimasi Followers Instagram", "Layanan Followers Instagram"]
      },
      {
        link: "/jasa-komen-instagram/",
        name: "Komentar Instagram",
        icon: "lucide:message-square",
        description: "Ramaikan kolom komentar dengan komentar relevan dan natural.",
        anchors: ["Jasa Komentar Instagram", "Tambah Komentar IG", "Optimasi Komentar Instagram", "Layanan Komentar IG"]
      },
      {
        link: "/jasa-tambah-view/",
        name: "View Reels / Story Instagram",
        icon: "lucide:play",
        description: "Dongkrak jumlah tayangan Reels dan Story untuk sinyal algoritma yang lebih kuat.",
        anchors: ["Jasa View Instagram", "Tambah View Reels IG", "Optimasi View Instagram", "Layanan View IG"]
      },
      {
        link: "/jasa-share-instagram/",
        name: "Share Instagram",
        icon: "lucide:share-2",
        description: "Perluas jangkauan postingan Instagram secara strategis dan aman.",
        anchors: ["Jasa Share Instagram", "Tambah Share IG", "Optimasi Share Instagram", "Layanan Share IG"]
      },
      {
        link: "/jasa-save-instagram/",
        name: "Save Instagram",
        icon: "lucide:bookmark",
        description: "Tingkatkan retensi konten melalui aktivitas save yang berkualitas.",
        anchors: ["Jasa Save Instagram", "Tambah Save IG", "Optimasi Save Instagram", "Layanan Save IG"]
      },
      {
        link: "/jasa-vote-ig-private/",
        name: "Vote Polling IG Private",
        icon: "lucide:bar-chart-2",
        description: "Menangkan kontes polling di akun Instagram private dengan cepat dan rahasia.",
        anchors: ["Jasa Vote IG Private", "Tambah Vote Instagram", "Optimasi Vote IG", "Layanan Vote Instagram"]
      }
    ]
  },
  {
    category: "tiktok",
    title: "TikTok",
    icon: "lucide:music-2",
    colorClass: "text-slate-900",
    bgClass: "bg-slate-900/10",
    borderClass: "border-slate-700/50",
    services: [
      {
        link: "/like-tiktok/",
        name: "Like TikTok",
        icon: "lucide:music-2",
        description: "Dorong video Anda lebih cepat masuk FYP dan menarik perhatian audiens.",
        anchors: ["Jasa Like TikTok", "Tambah Like TikTok", "Optimasi Like TikTok", "Layanan Like TikTok"]
      },
      {
        link: "/like-komentar-tiktok/",
        name: "Like Komentar TikTok",
        icon: "lucide:message-square-text",
        description: "Bantu komentar Anda tampil menonjol di video viral TikTok.",
        anchors: ["Jasa Like Komentar TikTok", "Tambah Like Komentar TikTok", "Optimasi Komentar TikTok", "Layanan Like Komentar TikTok"]
      },
      {
        link: "/jasa-tambah-follower-tiktok/",
        name: "Follower TikTok",
        icon: "lucide:user-plus",
        description: "Tambah pengikut aktif untuk memperkuat otoritas akun TikTok Anda.",
        anchors: ["Jasa Follower TikTok", "Tambah Follower TikTok", "Optimasi Follower TikTok", "Layanan Follower TikTok"]
      },
      {
        link: "/jasa-tambah-view-tiktok/",
        name: "View TikTok",
        icon: "lucide:play",
        description: "Tingkatkan jumlah tayangan video agar lebih mudah direkomendasikan.",
        anchors: ["Jasa View TikTok", "Tambah View TikTok", "Optimasi View TikTok", "Layanan View TikTok"]
      },
      {
        link: "/jasa-tambah-komentar-tiktok/",
        name: "Komentar TikTok",
        icon: "lucide:message-square",
        description: "Isi kolom komentar dengan komentar relevan dan engaging.",
        anchors: ["Jasa Komentar TikTok", "Tambah Komentar TikTok", "Optimasi Komentar TikTok", "Layanan Komentar TikTok"]
      },
      {
        link: "/jasa-share-video-tiktok/",
        name: "Share TikTok",
        icon: "lucide:share-2",
        description: "Perluas distribusi video ke komunitas yang lebih luas.",
        anchors: ["Jasa Share TikTok", "Tambah Share TikTok", "Optimasi Share TikTok", "Layanan Share TikTok"]
      },
      {
        link: "/jasa-save-video-tiktok/",
        name: "Save TikTok",
        icon: "lucide:bookmark",
        description: "Tingkatkan retensi dan nilai konten melalui fitur koleksi.",
        anchors: ["Jasa Save TikTok", "Tambah Save TikTok", "Optimasi Save TikTok", "Layanan Save TikTok"]
      },
      {
        link: "/jasa-repost-tiktok/",
        name: "Repost TikTok",
        icon: "lucide:repeat",
        description: "Distribusikan ulang video untuk menembus audiens baru.",
        anchors: ["Jasa Repost TikTok", "Tambah Repost TikTok", "Optimasi Repost TikTok", "Layanan Repost TikTok"]
      },
      {
        link: "/jasa-report-akun-tiktok/",
        name: "Report Akun TikTok",
        icon: "lucide:shield-alert",
        description: "Laporkan akun bermasalah yang melanggar kebijakan platform.",
        anchors: ["Jasa Report TikTok", "Laporkan Akun TikTok", "Optimasi Report TikTok", "Layanan Report Akun TikTok"]
      },
      {
        link: "/jasa-livestreaming-tiktok/",
        name: "Livestreaming TikTok",
        icon: "lucide:radio",
        description: "Tambah penonton live untuk membuat siaran lebih ramai dan berkonversi.",
        anchors: ["Jasa Live TikTok", "Tambah Penonton Live TikTok", "Optimasi Live TikTok", "Layanan Livestreaming TikTok"]
      }
    ]
  },
  {
    category: "youtube",
    title: "YouTube",
    icon: "lucide:youtube",
    colorClass: "text-red-600",
    bgClass: "bg-red-600/10",
    borderClass: "border-red-500/30",
    services: [
      {
        link: "/like-youtube/",
        name: "Like YouTube",
        icon: "lucide:youtube",
        description: "Tingkatkan metrik interaksi dan ranking video di pencarian.",
        anchors: ["Jasa Like YouTube", "Tambah Like YouTube", "Optimasi Like YouTube", "Layanan Like YouTube"]
      },
      {
        link: "/like-komentar-youtube/",
        name: "Like Komentar YouTube",
        icon: "lucide:message-square-text",
        description: "Dongkrak komentar Anda ke posisi teratas di diskusi video.",
        anchors: ["Jasa Like Komentar YouTube", "Tambah Like Komentar YT", "Optimasi Komentar YouTube", "Layanan Like Komentar YT"]
      },
      {
        link: "/jasa-subscribe-youtube/",
        name: "Subscriber YouTube",
        icon: "lucide:user-plus",
        description: "Bantu channel mencapai syarat monetisasi lebih cepat.",
        anchors: ["Jasa Subscriber YouTube", "Tambah Subscriber YouTube", "Optimasi Subscriber YT", "Layanan Subscriber YouTube"]
      },
      {
        link: "/jasa-save-video-youtube/",
        name: "Save YouTube",
        icon: "lucide:bookmark",
        description: "Tingkatkan sinyal retensi konten video Anda.",
        anchors: ["Jasa Save YouTube", "Tambah Save YouTube", "Optimasi Save YT", "Layanan Save YouTube"]
      },
      {
        link: "/jual-jasa-view-youtube/",
        name: "View YouTube",
        icon: "lucide:play",
        description: "Dongkrak jumlah tayangan video untuk visibilitas yang lebih tinggi.",
        anchors: ["Jasa View YouTube", "Tambah View YouTube", "Optimasi View YT", "Layanan View YouTube"]
      },
      {
        link: "/jasa-komen-youtube-aktif/",
        name: "Komentar YouTube",
        icon: "lucide:message-square",
        description: "Ramaikan diskusi di kolom komentar dengan komentar aktif.",
        anchors: ["Jasa Komentar YouTube", "Tambah Komentar YT", "Optimasi Komentar YouTube", "Layanan Komentar YT"]
      },
      {
        link: "/jasa-live-youtube/",
        name: "Live Stream YouTube",
        icon: "lucide:radio",
        description: "Tambah jumlah penonton live streaming secara aman.",
        anchors: ["Jasa Live YouTube", "Tambah Penonton Live YT", "Optimasi Live YouTube", "Layanan Live Stream YouTube"]
      },
      {
        link: "/jasa-report-youtube/",
        name: "Report YouTube",
        icon: "lucide:shield-alert",
        description: "Laporkan konten bermasalah yang melanggar kebijakan platform.",
        anchors: ["Jasa Report YouTube", "Laporkan Video YouTube", "Optimasi Report YT", "Layanan Report YouTube"]
      }
    ]
  },
  {
    category: "facebook",
    title: "Facebook",
    icon: "lucide:facebook",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-600/10",
    borderClass: "border-blue-500/30",
    services: [
      {
        link: "/like-facebook/",
        name: "Like Facebook",
        icon: "lucide:facebook",
        description: "Optimasi like untuk postingan, Fanpage, dan Reels.",
        anchors: ["Jasa Like Facebook", "Tambah Like Facebook", "Optimasi Like Facebook", "Layanan Like Facebook"]
      },
      {
        link: "/like-komentar-facebook/",
        name: "Like Komentar Facebook",
        icon: "lucide:message-circle",
        description: "Dominasi filter 'Paling Relevan' di Fanpage dan Grup.",
        anchors: ["Jasa Like Komentar FB", "Tambah Like Komentar Facebook", "Optimasi Komentar FB", "Layanan Like Komentar Facebook"]
      },
      {
        link: "/jasa-tambah-follower-facebook/",
        name: "Follower & Fanpage Facebook",
        icon: "lucide:user-plus",
        description: "Tambah pengikut halaman dan profil Facebook secara natural.",
        anchors: ["Jasa Follower Facebook", "Tambah Follower FB", "Optimasi Follower Facebook", "Layanan Follower FB"]
      },
      {
        link: "/jasa-tambah-komentar-facebook/",
        name: "Komentar Facebook",
        icon: "lucide:message-circle",
        description: "Ramaikan postingan dengan komentar relevan dan aktif.",
        anchors: ["Jasa Komentar Facebook", "Tambah Komentar FB", "Optimasi Komentar Facebook", "Layanan Komentar FB"]
      },
      {
        link: "/jasa-share-facebook/",
        name: "Share Facebook",
        icon: "lucide:share",
        description: "Tingkatkan visibilitas konten melalui pembagian postingan.",
        anchors: ["Jasa Share Facebook", "Tambah Share FB", "Optimasi Share Facebook", "Layanan Share FB"]
      },
      {
        link: "/jasa-tambah-view-facebook/",
        name: "View Video & Reels Facebook",
        icon: "lucide:play",
        description: "Dongkrak jumlah tayangan video dan Reels Facebook.",
        anchors: ["Jasa View Facebook", "Tambah View FB", "Optimasi View Facebook", "Layanan View FB"]
      },
      {
        link: "/jasa-live-facebook/",
        name: "Live Facebook",
        icon: "lucide:radio",
        description: "Tambah penonton live agar siaran terlihat lebih ramai.",
        anchors: ["Jasa Live Facebook", "Tambah Penonton Live FB", "Optimasi Live Facebook", "Layanan Live FB"]
      },
      {
        link: "/jasa-polling-facebook/",
        name: "Vote Kontes Facebook",
        icon: "lucide:bar-chart-2",
        description: "Menangkan kontes polling atau voting di Facebook.",
        anchors: ["Jasa Vote Facebook", "Tambah Vote FB", "Optimasi Polling Facebook", "Layanan Vote Kontes FB"]
      }
    ]
  },
  {
    category: "telegram",
    title: "Telegram",
    icon: "fa-brands:telegram",
    colorClass: "text-sky-500",
    bgClass: "bg-sky-500/10",
    borderClass: "border-sky-500/30",
    services: [
      {
        link: "/jasa-tambah-member-telegram/",
        name: "Member Channel & Grup Telegram",
        icon: "lucide:users",
        description: "Tambah anggota channel atau grup Telegram secara terukur.",
        anchors: ["Jasa Member Telegram", "Tambah Member Telegram", "Optimasi Member Telegram", "Layanan Member Telegram"]
      },
      {
        link: "/jasa-invite-member-telegram/",
        name: "Invite Bot Telegram",
        icon: "lucide:user-plus",
        description: "Undang pengguna ke bot atau grup Telegram Anda.",
        anchors: ["Jasa Invite Telegram", "Tambah Invite Telegram", "Optimasi Invite Telegram", "Layanan Invite Telegram"]
      },
      {
        link: "/jasa-view-telegram/",
        name: "View Postingan Telegram",
        icon: "lucide:eye",
        description: "Tingkatkan jumlah tayangan postingan channel Telegram.",
        anchors: ["Jasa View Telegram", "Tambah View Telegram", "Optimasi View Telegram", "Layanan View Telegram"]
      },
      {
        link: "/jasa-reaction-telegram/",
        name: "Reaction Telegram",
        icon: "lucide:smile",
        description: "Tambah reaksi emoji pada postingan channel Telegram.",
        anchors: ["Jasa Reaction Telegram", "Tambah Reaction Telegram", "Optimasi Reaction Telegram", "Layanan Reaction Telegram"]
      },
      {
        link: "/jasa-komentar-telegram/",
        name: "Komentar Telegram",
        icon: "lucide:message-circle",
        description: "Ramaikan diskusi di grup atau channel Telegram.",
        anchors: ["Jasa Komentar Telegram", "Tambah Komentar Telegram", "Optimasi Komentar Telegram", "Layanan Komentar Telegram"]
      },
      {
        link: "/jasa-polling-telegram/",
        name: "Vote Polling Telegram",
        icon: "lucide:bar-chart-2",
        description: "Menangkan kontes polling atau vote di Telegram.",
        anchors: ["Jasa Vote Telegram", "Tambah Vote Telegram", "Optimasi Vote Telegram", "Layanan Vote Telegram"]
      }
    ]
  },
  {
    category: "shopee",
    title: "Shopee",
    icon: "lucide:shopping-bag",
    colorClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
    borderClass: "border-orange-500/30",
    services: [
      {
        link: "/jasa-tambah-follower-shopee/",
        name: "Follower Toko Shopee",
        icon: "lucide:store",
        description: "Tingkatkan kepercayaan pembeli dengan jumlah pengikut toko.",
        anchors: ["Jasa Follower Shopee", "Tambah Follower Shopee", "Optimasi Follower Shopee", "Layanan Follower Shopee"]
      },
      {
        link: "/jasa-fake-order-shopee/",
        name: "Produk Terjual Shopee",
        icon: "lucide:package-check",
        description: "Bangun riwayat penjualan yang meyakinkan bagi calon pembeli.",
        anchors: ["Jasa Fake Order Shopee", "Tambah Penjualan Shopee", "Optimasi Produk Terjual Shopee", "Layanan Fake Order Shopee"]
      },
      {
        link: "/jasa-live-shopee/",
        name: "Live Shopee",
        icon: "lucide:radio",
        description: "Tambah penonton live untuk meningkatkan konversi penjualan.",
        anchors: ["Jasa Live Shopee", "Tambah Penonton Live Shopee", "Optimasi Live Shopee", "Layanan Live Shopee"]
      },
      {
        link: "/jasa-komen-live-shopee/",
        name: "Komen Live Shopee",
        icon: "lucide:message-circle",
        description: "Ramaikan obrolan live dengan komentar aktif dan relevan.",
        anchors: ["Jasa Komentar Live Shopee", "Tambah Komen Live Shopee", "Optimasi Komen Live Shopee", "Layanan Komen Live Shopee"]
      },
      {
        link: "/jasa-view-video-shopee/",
        name: "View Video Shopee",
        icon: "lucide:play",
        description: "Dongkrak jumlah tayangan video produk Anda.",
        anchors: ["Jasa View Shopee", "Tambah View Video Shopee", "Optimasi View Shopee", "Layanan View Shopee"]
      },
      {
        link: "/jasa-tambah-komen-shopee/",
        name: "Komen Video Shopee",
        icon: "lucide:message-square",
        description: "Tingkatkan interaksi di kolom komentar video produk.",
        anchors: ["Jasa Komentar Shopee", "Tambah Komen Shopee", "Optimasi Komentar Shopee", "Layanan Komentar Shopee"]
      },
      {
        link: "/jasa-report-toko-shopee/",
        name: "Report Toko Shopee",
        icon: "lucide:shield-alert",
        description: "Laporkan toko peniru atau penipu yang merugikan brand Anda.",
        anchors: ["Jasa Report Shopee", "Laporkan Toko Shopee", "Optimasi Report Shopee", "Layanan Report Toko Shopee"]
      },
      {
        link: "/jasa-vote-produk-shopee/",
        name: "Vote Produk Shopee",
        icon: "lucide:bar-chart-2",
        description: "Menangkan polling atau vote terkait produk di Shopee.",
        anchors: ["Jasa Vote Shopee", "Tambah Vote Produk Shopee", "Optimasi Vote Shopee", "Layanan Vote Produk Shopee"]
      }
    ]
  },
  {
    category: "marketplace",
    title: "Marketplace",
    icon: "lucide:shopping-bag",
    colorClass: "text-amber-500",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500/30",
    services: [
      {
        link: "/like-marketplace/",
        name: "Like Produk Marketplace",
        icon: "lucide:shopping-bag",
        description: "Dongkrak algoritma pencarian di Shopee, TikTok Shop, dan marketplace lain.",
        anchors: ["Jasa Like Marketplace", "Tambah Like Marketplace", "Optimasi Like Produk Marketplace", "Layanan Like Marketplace"]
      },
      {
        link: "/like-ulasan-marketplace/",
        name: "Like Ulasan Marketplace",
        icon: "lucide:star",
        description: "Angkat ulasan positif ke posisi teratas dan tutupi komplain.",
        anchors: ["Jasa Like Ulasan Marketplace", "Tambah Like Ulasan", "Optimasi Ulasan Marketplace", "Layanan Like Ulasan"]
      },
      {
        link: "/like-komentar-marketplace/",
        name: "Like Komentar Ulasan",
        icon: "lucide:message-square",
        description: "Naikkan review positif ke Top Review dengan dukungan like.",
        anchors: ["Jasa Like Komentar Marketplace", "Tambah Like Komentar Ulasan", "Optimasi Komentar Marketplace", "Layanan Like Komentar Ulasan"]
      }
    ]
  },
  {
    category: "twitter",
    title: "Twitter",
    icon: "lucide:twitter",
    colorClass: "text-sky-500",
    bgClass: "bg-sky-500/10",
    borderClass: "border-sky-400/30",
    services: [
      {
        link: "/like-twitter/",
        name: "Like Twitter / X",
        icon: "lucide:twitter",
        description: "Ramaikan interaksi Tweet agar lebih mudah trending.",
        anchors: ["Jasa Like Twitter", "Tambah Like Twitter", "Optimasi Like Twitter", "Layanan Like Twitter"]
      },
      {
        link: "/like-komentar-twitter/",
        name: "Like Komentar X",
        icon: "lucide:message-square",
        description: "Dongkrak balasan Anda menjadi Top Reply di cuitan populer.",
        anchors: ["Jasa Like Komentar Twitter", "Tambah Like Komentar X", "Optimasi Komentar Twitter", "Layanan Like Komentar X"]
      },
      {
        link: "/jasa-komen-twitter/",
        name: "Komentar Twitter",
        icon: "lucide:message-square",
        description: "Isi kolom komentar dengan reply relevan dan engaging.",
        anchors: ["Jasa Komentar Twitter", "Tambah Komentar X", "Optimasi Komentar Twitter", "Layanan Komentar X"]
      },
      {
        link: "/jasa-tambah-follower-twitter/",
        name: "Follower Twitter",
        icon: "lucide:user-plus",
        description: "Tambah pengikut aktif untuk memperkuat otoritas akun X Anda.",
        anchors: ["Jasa Follower Twitter", "Tambah Follower X", "Optimasi Follower Twitter", "Layanan Follower X"]
      }
    ]
  },
  {
    category: "threads",
    title: "Threads",
    icon: "lucide:at-sign",
    colorClass: "text-neutral-900",
    bgClass: "bg-neutral-900/10",
    borderClass: "border-gray-300/30",
    services: [
      {
        link: "/like-threads/",
        name: "Like Threads",
        icon: "lucide:at-sign",
        description: "Dongkrak popularitas dan engagement postingan Anda.",
        anchors: ["Jasa Like Threads", "Tambah Like Threads", "Optimasi Like Threads", "Layanan Like Threads"]
      },
      {
        link: "/like-komentar-threads/",
        name: "Like Komentar Threads",
        icon: "lucide:message-circle",
        description: "Dominasi arus percakapan di ekosistem Meta.",
        anchors: ["Jasa Like Komentar Threads", "Tambah Like Komentar Threads", "Optimasi Komentar Threads", "Layanan Like Komentar Threads"]
      }
    ]
  },
  {
    category: "pinterest",
    title: "Pinterest",
    icon: "fa-brands:pinterest",
    colorClass: "text-red-600",
    bgClass: "bg-red-600/10",
    borderClass: "border-red-500/30",
    services: [
      {
        link: "/like-pinterest/",
        name: "Like Pinterest",
        icon: "fa-brands:pinterest",
        description: "Tingkatkan engagement dan impresi secara visual.",
        anchors: ["Jasa Like Pinterest", "Tambah Like Pinterest", "Optimasi Like Pinterest", "Layanan Like Pinterest"]
      },
      {
        link: "/like-komentar-pinterest/",
        name: "Like Komentar Pinterest",
        icon: "lucide:message-square",
        description: "Cara aman tingkatkan interaksi pin Anda.",
        anchors: ["Jasa Like Komentar Pinterest", "Tambah Like Komentar Pinterest", "Optimasi Komentar Pinterest", "Layanan Like Komentar Pinterest"]
      }
    ]
  },
  {
    category: "linkedin",
    title: "LinkedIn",
    icon: "lucide:linkedin",
    colorClass: "text-blue-700",
    bgClass: "bg-blue-700/10",
    borderClass: "border-blue-400/30",
    services: [
      {
        link: "/like-linkedin/",
        name: "Like LinkedIn",
        icon: "lucide:linkedin",
        description: "Bangun otoritas B2B dan tarik perhatian HRD secara profesional.",
        anchors: ["Jasa Like LinkedIn", "Tambah Like LinkedIn", "Optimasi Like LinkedIn", "Layanan Like LinkedIn"]
      },
      {
        link: "/like-komentar-linkedin/",
        name: "Like Komentar LinkedIn",
        icon: "lucide:message-square-text",
        description: "Dominasi diskusi B2B dan perkuat otoritas profil.",
        anchors: ["Jasa Like Komentar LinkedIn", "Tambah Like Komentar LinkedIn", "Optimasi Komentar LinkedIn", "Layanan Like Komentar LinkedIn"]
      }
    ]
  }
];

// Judul dinamis berdasarkan kategori
export const categoryHeadings = {
  instagram: ["Layanan Instagram Lainnya", "Jelajahi Layanan Instagram", "Solusi Instagram", "Masih Seputar Instagram", "Lengkapi Strategi Instagram"],
  tiktok: ["Layanan TikTok Lainnya", "Jelajahi Layanan TikTok", "Solusi TikTok", "Masih Seputar TikTok", "Lengkapi Strategi TikTok"],
  youtube: ["Layanan YouTube Lainnya", "Jelajahi Layanan YouTube", "Solusi YouTube", "Masih Seputar YouTube", "Lengkapi Strategi YouTube"],
  facebook: ["Layanan Facebook Lainnya", "Jelajahi Layanan Facebook", "Solusi Facebook", "Masih Seputar Facebook", "Lengkapi Strategi Facebook"],
  telegram: ["Layanan Telegram Lainnya", "Jelajahi Layanan Telegram", "Solusi Telegram", "Masih Seputar Telegram", "Lengkapi Strategi Telegram"],
  shopee: ["Layanan Shopee Lainnya", "Jelajahi Layanan Shopee", "Solusi Shopee", "Masih Seputar Shopee", "Lengkapi Strategi Shopee"],
  marketplace: ["Layanan Marketplace Lainnya", "Jelajahi Layanan Marketplace", "Solusi Marketplace", "Masih Seputar Marketplace", "Lengkapi Strategi Marketplace"],
  twitter: ["Layanan Twitter Lainnya", "Jelajahi Layanan Twitter", "Solusi Twitter", "Masih Seputar Twitter", "Lengkapi Strategi Twitter"],
  threads: ["Layanan Threads Lainnya", "Jelajahi Layanan Threads", "Solusi Threads", "Masih Seputar Threads", "Lengkapi Strategi Threads"],
  pinterest: ["Layanan Pinterest Lainnya", "Jelajahi Layanan Pinterest", "Solusi Pinterest", "Masih Seputar Pinterest", "Lengkapi Strategi Pinterest"],
  linkedin: ["Layanan LinkedIn Lainnya", "Jelajahi Layanan LinkedIn", "Solusi LinkedIn", "Masih Seputar LinkedIn", "Lengkapi Strategi LinkedIn"]
};
