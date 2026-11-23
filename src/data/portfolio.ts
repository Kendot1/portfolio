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
    summary: "A food price forecasting project focused on agricultural commodities and historical market data.",
    context: "Market-price history needs to be collected, prepared consistently, and connected to forecasts people can explore in an application.",
    approach: "A shared Python forecast engine brings together feature preparation, a PyTorch LSTM, LightGBM, and a validation-tuned ensemble. Forecasts are written to Supabase and read by a Next.js interface through an Edge API.",
    roleSummary: "Lead developer · thesis project",
    role: "Lead developer of the FOODCAST thesis project, building the interface, machine-learning workflows, and application data integration.",
    architecture: "Report ingestion and price history feed a Python feature and forecasting pipeline. The writer persists forecast runs in Supabase; an Edge API supplies product, history, and status data to the Next.js interface.",
    flow: ["Price history", "Python features & models", "Supabase forecasts", "Edge API", "Next.js interface"],
    engineering: "Lag and rolling features shift observations before calculation. A shared forecast path connects calibration, evaluation, and serving, reducing the chance that each stage computes a different forecast.",
    aiIntegration: "The LSTM uses learned attention and a multi-horizon forecast head. LightGBM provides a separate price-modeling path, combined by a validation-tuned ensemble with persistence-based shrinkage. Weekly and monthly writer outputs currently use persistence baselines, not ML forecasts.",
    technologyRationale: "PyTorch implements the recurrent network and attention head; LightGBM handles engineered tabular features. Supabase stores forecasts and exposes an Edge API. Next.js provides server-fetched initial views with client-side refresh through SWR.",
    results: "The source contains the feature pipeline, model implementations, forecast writer, API, and application interface. No model-accuracy, traffic, or production-reliability claims are made here.",
    nextSteps: "Align the forecast-horizon contract between the Python writer and Edge API, and verify historical publication timing before describing retrospective evaluation as point-in-time backtesting.",
    techStack: ["Python", "PyTorch", "LSTM", "LightGBM", "Next.js", "TypeScript", "Supabase"],
    accent: "#245BEE", status: "Thesis project",
    liveUrl: "https://foodcastt.vercel.app/", githubUrl: "https://github.com/Kendot1/THESIS",
  },
  {
    id: "supremo-barber", index: "02", title: "Supremo Barbers", category: "Full-stack product",
    summary: "A barbershop booking and management platform.",
    context: "Customers need to book and manage visits, barbers need a usable schedule, and administrators need oversight of appointments and payment proofs.",
    approach: "A React and Vite application separates customer, barber, and administrator workspaces. A typed API service calls a Hono Supabase Edge Function, with authentication, ownership checks, and booking rules on the server.",
    architecture: "Role-specific React workspaces share a typed API service. The Hono Edge API verifies Supabase access tokens, loads the user profile, and applies role and ownership checks before accessing PostgreSQL records.",
    flow: ["Role workspaces", "Typed API service", "Hono Edge API", "Supabase Auth & PostgreSQL"],
    engineering: "Booking creation derives customer identity on the server, reads pricing from the database, and checks overlapping appointments. Shared rule functions cover time parsing, notice periods, and appointment states, with focused tests for those rules.",
    technologyRationale: "React and Vite support the role-based client. A shared TypeScript rules module keeps browser and server appointment rules aligned; Hono organizes the Edge HTTP routes around Supabase Auth and PostgreSQL.",
    results: "The repository implements booking, scheduling, role workspaces, rescheduling checks, and payment-proof handling. Individual responsibilities and business outcomes are not sufficiently documented to claim here.",
    nextSteps: "Audit deployed database policies and add database-level concurrency protection. The current in-memory booking lock covers one Edge isolate, not every concurrent instance.",
    techStack: ["React", "TypeScript", "Vite", "Hono", "Supabase", "PostgreSQL"], accent: "#C35C3C", status: "Source available", liveUrl: null, githubUrl: "https://github.com/Kendot1/Supremo_Barbers",
  },
  {
    id: "veyra", index: "03", title: "VEYRA", category: "AI-assisted applicant tracking",
    summary: "An AI-assisted applicant tracking system.", context: "Project context and implementation details have not yet been confirmed.", approach: "Project details pending source verification.", techStack: [], accent: "#287452", status: "Details to verify", liveUrl: null, githubUrl: null,
  },
];

export const skillGroups = [
  { id: "interfaces", number: "01", title: "Frontend", note: "Interfaces and web applications", skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vite", "Tailwind CSS"], evidence: ["foodcast", "supremo-barber"] },
  { id: "backend", number: "02", title: "Backend and data", note: "APIs, storage and application logic", skills: ["Node.js", "Hono", "Supabase", "PostgreSQL"], evidence: ["foodcast", "supremo-barber"] },
  { id: "machine-learning", number: "03", title: "AI and machine learning", note: "Forecasting and data workflows", skills: ["Python", "PyTorch", "LightGBM", "pandas", "NumPy"], evidence: ["foodcast"] },
  { id: "engineering", number: "04", title: "Developer tools", note: "Tools and collaboration", skills: ["Git", "GitHub", "VS Code"], evidence: [] },
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
  { label: "LinkedIn", value: "kennethbitun", href: "https://www.linkedin.com/in/kennethbitun/" },
  { label: "Facebook", value: "kendotxz", href: "https://www.facebook.com/kendotxz" },
  { label: "Instagram", value: "kendotxz", href: "https://www.instagram.com/kendotxz/?hl=en" },
];
