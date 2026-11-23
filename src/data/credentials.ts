const certificateBase = "https://kennethbitun.vercel.app/certifications";

export const experience = [
  {
    role: "AI Intern", period: "November 2026–present", organization: "FlyRank AI",
    description: "AI internship focused on General AI Fluency.", responsibilities: [], technologies: [],
  },
  {
    role: "Lead Developer", period: "March 15–present", organization: "FOODCAST · Thesis project",
    description: "Designed and built FOODCAST, a full-stack food-price forecasting platform, from end to end.",
    responsibilities: ["Developed the web interface for exploring food-price forecasts.", "Built the machine-learning forecasting workflows.", "Integrated application data storage with the platform."],
    technologies: ["Python", "PyTorch", "Next.js", "TypeScript", "Supabase", "LSTM", "LightGBM"],
  },
];

export const education = {
  school: "Our Lady of Fatima University", period: "2023–2027 (Expected)", program: "Computer Science Student",
  honors: [{ title: "Consistent Dean’s Lister", period: "1st–3rd year" }],
  competitions: [
    { title: "CodeChum Season 1 — Grand Finalist, 4th Place", period: "November 2024", description: "Reached the grand finals and finished fourth in CodeChum Season 1." },
    { title: "CodeChum Season 2 — Semifinalist", period: "November 2025", description: "Advanced to the semifinals in CodeChum Season 2." },
    { title: "CodeFest Database — Champion", period: "March 2026", description: "Won the championship in the CodeFest Database competition." },
  ],
};

export const certifications = [
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "April 15, 2026", description: "Completed through Our Lady of Fatima University.", slug: "Introduction-to-Cybersecurity" },
  { title: "Networking Basics", issuer: "Cisco Networking Academy", date: "December 12, 2025", description: "Completed through Our Lady of Fatima University.", slug: "Networking-Basics" },
  { title: "Networking Devices and Initial Configuration", issuer: "Cisco Networking Academy", date: "October 30, 2025", description: "Completed through Our Lady of Fatima University.", slug: "Networking-Devices-and-Initial-Configuration" },
  { title: "Network Addressing and Basic Troubleshooting", issuer: "Cisco Networking Academy", date: "September 19, 2025", description: "Completed through Our Lady of Fatima University.", slug: "Network-Addressing-and-Basic-Troubleshooting" },
  { title: "CodeChum National Programming Challenge 2024", issuer: "CodeChum", date: "November 27, 2024", description: "Certificate for 4th place in Group Stage 3.", slug: "CodeChum-National-Programming-Challenge-2024" },
].map((entry) => ({ ...entry, pdfUrl: `${certificateBase}/${entry.slug}.pdf`, previewUrl: `${certificateBase}/${entry.slug}-preview.png` }));
