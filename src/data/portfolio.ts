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
    id: "foodcast", index: "01", title: "Foodcast", category: "Forecasting",
    summary: "A web app for exploring historical and forecast food prices in Metro Manila markets.",
    context: "Can recent market prices help estimate the next retail price for a commodity? FOODCAST uses price histories from the Philippine Department of Agriculture’s Bantay Presyo bulletins for NCR markets.",
    approach: "A shared Python forecast engine brings together feature preparation, a PyTorch LSTM, LightGBM, and a validation-tuned ensemble. Forecasts are written to Supabase and read by a Next.js interface through an Edge API.",
    roleSummary: "Lead developer · thesis project",
    role: "I led development of the web interface, forecasting workflows and data integration for my thesis.",
    architecture: "Report ingestion and price history feed a Python feature and forecasting pipeline. The writer persists forecast runs in Supabase; an Edge API supplies product, history, and status data to the Next.js interface.",
    flow: ["Price history", "Python features & models", "Supabase forecasts", "Edge API", "Next.js interface"],
    engineering: "Shift lag and rolling features before calculating them so the target price is not included in its own inputs. A shared forecast path keeps feature calculations consistent across calibration, evaluation, and serving.",
    aiIntegration: "The LSTM uses learned attention and a multi-horizon forecast head. LightGBM provides a separate price-modeling path, combined by a validation-tuned ensemble with persistence-based shrinkage. Weekly and monthly writer outputs currently use persistence baselines, not ML forecasts.",
    technologyRationale: "PyTorch implements the recurrent network and attention head; LightGBM handles engineered tabular features. Supabase stores forecasts and exposes an Edge API. Next.js provides server-fetched initial views with client-side refresh through SWR.",
    results: "The project demonstrates how recorded prices and model output can be served together in an application. It does not establish point-in-time forecast accuracy: historical publication timing and the writer/API horizon contract still need verification.",
    nextSteps: "Align the forecast-horizon contract between the Python writer and Edge API, and verify historical publication timing before describing retrospective evaluation as point-in-time backtesting.",
    techStack: ["Python", "PyTorch", "LSTM", "LightGBM", "Next.js", "TypeScript", "Supabase"],
    accent: "#245BEE", status: "Thesis project",
    liveUrl: "https://foodcastt.vercel.app/", githubUrl: "https://github.com/Kendot1/THESIS",
  },
  {
    id: "supremo-barber", index: "02", title: "Supremo Barbers", category: "Full-stack product",
    summary: "Online booking for customers, with scheduling for barbers and appointment oversight for staff.",
    role: "I contributed to the typed API client and shared appointment rules.",
    context: "Customers choose a service, barber and time, then manage the visit from their account. Barbers see their schedules, while administrators review appointments and payment proofs in a separate workspace.",
    approach: "A React and Vite application separates customer, barber, and administrator workspaces. A typed API service calls a Hono Supabase Edge Function, with authentication, ownership checks, and booking rules on the server.",
    architecture: "Role-specific React workspaces share a typed API service. The Hono Edge API verifies Supabase access tokens, loads the user profile, and applies role and ownership checks before accessing PostgreSQL records.",
    flow: ["Role workspaces", "Typed API service", "Hono Edge API", "Supabase Auth & PostgreSQL"],
    engineering: "Booking creation derives customer identity on the server, reads pricing from the database, and checks overlapping appointments. Shared rule functions cover time parsing, notice periods, and appointment states, with focused tests for those rules.",
    technologyRationale: "React and Vite support the role-based client. A shared TypeScript rules module keeps browser and server appointment rules aligned; Hono organizes the Edge HTTP routes around Supabase Auth and PostgreSQL.",
    results: "The repository implements booking, scheduling, role workspaces, rescheduling checks, and payment-proof handling. Those workflows are documented in source; this case study does not claim measured booking or revenue gains.",
    nextSteps: "Audit deployed database policies and add database-level concurrency protection. The current in-memory booking lock covers one Edge isolate, not every concurrent instance.",
    techStack: ["React", "TypeScript", "Vite", "Hono", "Supabase", "PostgreSQL"], accent: "#C35C3C", status: "Booking platform", liveUrl: "https://supremobarber.vercel.app/", githubUrl: "https://github.com/Kendot1/Supremo_Barbers",
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

export const emailAddress = "kennethbitun344@gmail.com";
export const resumeUrl = "https://kennethbitun.vercel.app/resume.pdf";

export const additionalProjects = [
  { title: "Daddy Bons Kitchen", summary: "Food ordering with scheduled reservations." },
  { title: "Lucent", summary: "A trading journal with analytics." },
];

export const contactLinks = [
  { label: "GitHub", value: "Kendot1", href: "https://github.com/Kendot1" },
  { label: "LinkedIn", value: "kennethbitun", href: "https://www.linkedin.com/in/kennethbitun/" },
  { label: "Facebook", value: "kendotxz", href: "https://www.facebook.com/kendotxz" },
  { label: "Instagram", value: "kendotxz", href: "https://www.instagram.com/kendotxz/?hl=en" },
];
