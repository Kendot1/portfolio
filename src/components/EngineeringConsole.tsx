"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import ForecastSandbox from "./ForecastSandbox";

type ConsoleResult = {
  message: string;
  links?: { label: string; href: string }[];
};

const commands: Record<string, ConsoleResult> = {
  help: {
    message: "Local deterministic guide, not an AI model or a shell. Commands: help, projects, stack, about, contact, trace foodcast, trace barber, demo foodcast. Select a command below or type one and press Enter.",
  },
  projects: {
    message: "Two projects have detailed, source-backed engineering notes.",
    links: [
      { label: "Foodcast · forecasting system", href: "/work/foodcast" },
      { label: "Supremo Barber · booking system", href: "/work/supremo-barber" },
    ],
  },
  "trace foodcast": {
    message: "Price history feeds Python feature preparation, a PyTorch LSTM and LightGBM ensemble. Forecasts are persisted to Supabase and read by a Next.js interface through an Edge API.",
    links: [{ label: "Read the Foodcast case study", href: "/work/foodcast" }],
  },
  "trace barber": {
    message: "Role-based React workspaces call a typed API service. A Hono Edge API verifies identity and applies booking and ownership rules before accessing Supabase data.",
    links: [{ label: "Read the Supremo Barber case study", href: "/work/supremo-barber" }],
  },
  stack: {
    message: "Foodcast connects Next.js and TypeScript to Python feature preparation, PyTorch, LightGBM, and Supabase. Supremo Barber connects React and TypeScript workspaces to a Hono Edge API and Supabase PostgreSQL. These are project-backed technologies, not proficiency ratings.",
    links: [{ label: "Explore the stack and project evidence", href: "/#stack" }],
  },
  about: {
    message: "Kenneth Bitun builds across application interfaces, backend data flows, and machine-learning workflows. The Foodcast contribution recorded in repository history includes LSTM and LightGBM implementation; it is not a claim of sole authorship.",
    links: [{ label: "About Kenneth", href: "/#about" }],
  },
  "demo foodcast": {
    message: "Try the Foodcast feature lab below. Change a synthetic observation, choose a target day and rolling window, and inspect which earlier values are used. Local arithmetic only: no trained model, live prices, or predictions.",
    links: [{ label: "Open the feature lab", href: "#foodcast-lab" }],
  },
  contact: {
    message: "The verified public contact route is GitHub. Email and other profiles are not published until their destinations are confirmed.",
    links: [{ label: "Open GitHub", href: "https://github.com/Kendot1" }],
  },
};

const suggestions = ["projects", "stack", "about", "contact", "trace foodcast", "trace barber", "demo foodcast"];

export default function EngineeringConsole() {
  const [command, setCommand] = useState("");
  const [result, setResult] = useState<ConsoleResult>(commands.help);
  const [pending, setPending] = useState<{ value: string } | null>(null);

  useEffect(() => {
    if (!pending) return;
    // Two paint frames expose the real local resolution state, not simulated
    // network latency or model reasoning. No artificial typing delay.
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        const normalized = pending.value.trim().toLowerCase().replace(/\s+/g, " ");
        setResult(Object.hasOwn(commands, normalized) ? commands[normalized] : {
          message: `“${normalized || "(empty)"}” is not in this index. Type help to see the available commands.`,
        });
        setPending(null);
      });
    });
    return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
  }, [pending]);

  function runCommand(value: string) {
    setCommand(value);
    setPending({ value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(command);
  }

  return (
    <section id="explore" className="section-shell console-section" aria-labelledby="console-title">
      <div className="page-shell engineering-console">
        <div className="console-intro">
          <p className="console-kicker">A small, documented project index</p>
          <h3 id="console-title">Follow a system path</h3>
          <p>Trace how data and application rules move through two projects. The same paths are explained in the case studies.</p>
        </div>
        <div className="console-window">
          <div className="console-heading"><span className="console-indicator" data-running={!!pending} aria-hidden="true" />Portfolio guide <span role="status">{pending ? "Running locally" : "Ready"}</span></div>
          <form className="console-form" onSubmit={handleSubmit}>
            <label htmlFor="console-command">Command</label>
            <div className="console-entry">
              <span aria-hidden="true">›</span>
              <input
                id="console-command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                autoComplete="off"
                maxLength={50}
                placeholder="Type a command, e.g. trace foodcast"
              />
              <button type="submit">Run</button>
            </div>
          </form>
          <div className="console-suggestions" aria-label="Suggested commands">
            {suggestions.map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => runCommand(suggestion)}>{suggestion}</button>
            ))}
            <button type="button" onClick={() => runCommand("help")}>help</button>
          </div>
          <div className="console-output" aria-live="polite" aria-atomic="true" aria-busy={!!pending}>
            <p>{result.message}</p>
            {result.links && <div className="console-result-links">{result.links.map((link) => (
              link.href.startsWith("http")
                ? <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                : <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}</div>}
          </div>
        </div>
      </div>
      <div className="page-shell"><ForecastSandbox /></div>
      <style jsx>{`
        .console-suggestions button, .console-entry button { min-height: 44px; font-size: 12px; }
        .console-entry input { font-size: 14px; caret-color: var(--blue); }
        .console-output > p { font-size: 14px; }
        .console-result-links a { font-size: 13px; padding-block: 8px; }
        .console-form label, .console-kicker, .console-heading { font-size: 12px; }
        .console-intro > p:last-child { font-size: 14px; }
        .console-suggestions button:focus-visible, .console-entry button:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
        .console-indicator[data-running="true"] { border-radius: 0; transform: rotate(45deg); }
      `}</style>
    </section>
  );
}
