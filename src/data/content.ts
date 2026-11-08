export type Project = {
  slug: string; title: string; category: string; year: string; description: string;
  details: string; stack: string[]; image: string; status: string;
};

export const projects: Project[] = [
  {
    slug: "intelligent-assistant", title: "Intelligent Assistant", category: "LLM APPLICATION", year: "2026",
    description: "Asisten berbasis AI untuk membantu pencarian dan peringkasan informasi.",
    details: "Contoh studi kasus aplikasi AI yang menggabungkan model bahasa, prompt design, dan antarmuka yang sederhana. Ganti deskripsi ini dengan masalah, proses, kontribusi, dan hasil proyek aslimu.",
    stack: ["Python", "LLM", "Prompt Engineering", "API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=85", status: "CONTOH KONTEN"
  },
  {
    slug: "computer-vision-lab", title: "Computer Vision Lab", category: "COMPUTER VISION", year: "2026",
    description: "Eksperimen klasifikasi gambar dan pengenalan pola menggunakan machine learning.",
    details: "Ruang untuk menjelaskan dataset, preprocessing, pendekatan model, evaluasi, dan pembelajaran yang kamu dapatkan. Cantumkan metrik hanya jika benar-benar sudah diuji.",
    stack: ["Python", "OpenCV", "PyTorch", "NumPy"],
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200&q=85", status: "CONTOH KONTEN"
  },
  {
    slug: "data-insight", title: "Data Insight", category: "DATA SCIENCE", year: "2025",
    description: "Eksplorasi data untuk menemukan pola dan mengubahnya menjadi insight.",
    details: "Ceritakan sumber data, pertanyaan yang ingin dijawab, proses eksplorasi, visualisasi, serta kesimpulan yang bisa dipertanggungjawabkan.",
    stack: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85", status: "CONTOH KONTEN"
  },
  {
    slug: "automation-toolkit", title: "Automation Toolkit", category: "SOFTWARE / AUTOMATION", year: "2025",
    description: "Kumpulan alat kecil untuk menyederhanakan tugas digital yang berulang.",
    details: "Jelaskan alur kerja sebelum dan sesudah otomatisasi, fitur utama, batasan, serta bagian yang kamu kerjakan sendiri atau bersama tim.",
    stack: ["Python", "REST API", "Git"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85", status: "CONTOH KONTEN"
  }
];

export type Certificate = {
  slug: string; title: string; issuer: string; date: string; description: string; image: string;
};

export const certificates: Certificate[] = [
  { slug: "ai-foundations", title: "AI Foundations", issuer: "Nama penyelenggara", date: "2026", description: "Ganti dengan topik pembelajaran, kompetensi, dan keterampilan yang benar-benar tercantum pada sertifikat.", image: "" },
  { slug: "python-programming", title: "Python Programming", issuer: "Nama penyelenggara", date: "2026", description: "Tambahkan ringkasan materi dan alasan sertifikat ini relevan dengan perjalananmu di bidang AI.", image: "" },
  { slug: "machine-learning", title: "Machine Learning Basics", issuer: "Nama penyelenggara", date: "2025", description: "Tuliskan hal penting yang dipelajari dan proyek atau latihan yang pernah kamu kerjakan.", image: "" }
];