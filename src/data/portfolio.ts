export interface FeaturedProject {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  approach: string;
  techStack: string[];
  accent: string;
  status: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  role?: string;
  roleSummary?: string;
  architecture?: string;
  flow?: string[];
  engineering?: string;
  aiIntegration?: string;
  technologyRationale?: string;
  results?: string;
  nextSteps?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "foodcast", index: "01", title: "Foodcast", category: "AI / machine learning",
    summary: "A food price forecasting project built around machine learning and historical market data.",
    context: "Market-price history needs to be collected, prepared consistently, and connected to forecasts people can explore in an application.",
    approach: "A shared Python forecast engine brings together feature preparation, a PyTorch LSTM, LightGBM, and a validation-tuned ensemble. Forecasts are written to Supabase and read by a Next.js interface through an Edge API.",
    roleSummary: "LSTM and LightGBM implementation",
    role: "Contributed to the LSTM and LightGBM implementation. Repository history records changes under my Kendot1 handle; this does not imply sole authorship of the project.",
    architecture: "Report ingestion and price history feed a Python feature and forecasting pipeline. The writer persists forecast runs in Supabase; an Edge API supplies product, history, and status data to the Next.js interface.",
    flow: ["Price history", "Python features & models", "Supabase forecasts", "Edge API", "Next.js interface"],
    engineering: "Lag and rolling features shift observations before calculation. A shared forecast path connects calibration, evaluation, and serving, reducing the chance that each stage computes a different forecast.",
    aiIntegration: "The LSTM uses learned attention and a multi-horizon forecast head. LightGBM provides a separate price-modeling path, combined by a validation-tuned ensemble with persistence-based shrinkage. Weekly and monthly writer outputs currently use persistence baselines, not ML forecasts.",
    technologyRationale: "PyTorch implements the recurrent network and attention head; LightGBM handles engineered tabular features. Supabase stores forecasts and exposes an Edge API. Next.js provides server-fetched initial views with client-side refresh through SWR.",
    results: "The source contains the feature pipeline, model implementations, forecast writer, API, and application interface. No model-accuracy, traffic, or production-reliability claims are made here.",
    nextSteps: "Align the forecast-horizon contract between the Python writer and Edge API, and verify historical publication timing before describing retrospective evaluation as point-in-time backtesting.",
    techStack: ["Python", "PyTorch", "LSTM", "LightGBM", "Next.js", "TypeScript", "Supabase"],
    accent: "#245BEE", status: "Thesis project · 2025–present",
    liveUrl: "https://foodcastt.vercel.app/", githubUrl: null,
  },
  {
    id: "supremo-barber", index: "02", title: "Supremo Barber", category: "Full-stack product",
    summary: "An appointment booking and management system for customers, barbers, and administrators.",
    context: "Customers need to book and manage visits, barbers need a usable schedule, and administrators need oversight of appointments and payment proofs.",
    approach: "A React and Vite application separates customer, barber, and administrator workspaces. A typed API service calls a Hono Supabase Edge Function, with authentication, ownership checks, and booking rules on the server.",
    architecture: "Role-specific React workspaces share a typed API service. The Hono Edge API verifies Supabase access tokens, loads the user profile, and applies role and ownership checks before accessing PostgreSQL records.",
    flow: ["Role workspaces", "Typed API service", "Hono Edge API", "Supabase Auth & PostgreSQL"],
    engineering: "Booking creation derives customer identity on the server, reads pricing from the database, and checks overlapping appointments. Shared rule functions cover time parsing, notice periods, and appointment states, with focused tests for those rules.",
    technologyRationale: "React and Vite support the role-based client. A shared TypeScript rules module keeps browser and server appointment rules aligned; Hono organizes the Edge HTTP routes around Supabase Auth and PostgreSQL.",
    results: "The repository implements booking, scheduling, role workspaces, rescheduling checks, and payment-proof handling. Individual responsibilities and business outcomes are not sufficiently documented to claim here.",
    nextSteps: "Audit deployed database policies and add database-level concurrency protection. The current in-memory booking lock covers one Edge isolate, not every concurrent instance.",
    techStack: ["React", "TypeScript", "Vite", "Hono", "Supabase", "PostgreSQL"], accent: "#C35C3C", status: null, liveUrl: null, githubUrl: null,
  },
  {
    id: "daddy-bons-kitchen", index: "03", title: "Daddy Bons Kitchen", category: "Service experience",
    summary: "A food ordering and scheduled reservation platform.",
    context: "The project notes describe one customer experience for placing food orders and scheduling reservations.",
    approach: "Implementation details, technology choices, individual contribution, and outcomes are not documented in the current notes.",
    techStack: [], accent: "#8B6A19", status: null, liveUrl: null, githubUrl: null,
  },
  {
    id: "lucent", index: "04", title: "Lucent", category: "Data / workflow",
    summary: "A trading journal concept focused on organizing trades, market context, and review.",
    context: "Available notes describe trade organization, market context, and analytics as the product focus.",
    approach: "Architecture, technology choices, individual contribution, and outcomes are not documented in the current notes.",
    techStack: [], accent: "#5A55A5", status: null, liveUrl: null, githubUrl: null,
  },
];

export const skillGroups = [
  { id: "interfaces", number: "01", title: "Interfaces and product UI", note: "Structure, interaction, and responsive behavior", skills: ["React", "Next.js", "TypeScript", "Responsive interfaces", "Interaction design", "Accessibility"], evidence: ["foodcast"] },
  { id: "backend", number: "02", title: "Backend and data", note: "Application logic and connected data", skills: ["Supabase", "PostgreSQL", "REST APIs", "Data modeling", "Server-side development"], evidence: ["foodcast", "supremo-barber"] },
  { id: "machine-learning", number: "03", title: "AI and machine learning", note: "Forecasting workflows and model integration", skills: ["Python", "LSTM", "LightGBM", "Time-series forecasting", "Model evaluation"], evidence: ["foodcast"] },
  { id: "engineering", number: "04", title: "Engineering practice", note: "The work around a reliable product", skills: ["Git and GitHub", "Testing", "Debugging", "Documentation", "Performance", "System design"], evidence: [] },
];

export const processSteps = [
  { id: "understand", number: "01", title: "Understand", description: "Clarify the people, problem, and constraints before choosing a solution." },
  { id: "design", number: "02", title: "Design", description: "Map the experience and make the important decisions visible early." },
  { id: "architect", number: "03", title: "Architect", description: "Shape the data, interfaces, and boundaries that connect each part." },
  { id: "build", number: "04", title: "Build", description: "Develop the product in small pieces that can be reviewed and improved." },
  { id: "test", number: "05", title: "Test", description: "Check expected flows, edge cases, accessibility, and failure states." },
  { id: "deploy", number: "06", title: "Deploy", description: "Prepare configuration and release only when the project is ready." },
  { id: "improve", number: "07", title: "Improve", description: "Use feedback and observed behavior to decide what should change next." },
];

export const contactLinks = [
  { label: "GitHub", value: "Kendot1", href: "https://github.com/Kendot1" },
];
