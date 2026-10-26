"use client";

import { useState } from "react";
import Link from "next/link";

// Synthetic observations, not Foodcast market data. The arithmetic mirrors the
// grouped shift(1).rolling(window, min_periods=1).mean() feature operation.
const sample = [100, 102, 100, 106, 104, 108, 107, 110];

export default function ForecastSandbox() {
  const [observations, setObservations] = useState(sample);
  const [target, setTarget] = useState(4);
  const [window, setWindow] = useState(3);
  const [draft, setDraft] = useState(String(sample[4]));
  const valid = draft.trim() !== "" && Number.isFinite(Number(draft)) && Number(draft) >= 0 && Number(draft) <= 1000;
  const start = Math.max(0, target - window);
  const past = observations.slice(start, target);
  const mean = past.length ? past.reduce((total, value) => total + value, 0) / past.length : null;
  const previous = target > 0 ? observations[target - 1] : null;

  function changeTarget(index: number) {
    setTarget(index);
    setDraft(String(observations[index]));
  }

  function editObservation(value: string) {
    setDraft(value);
    const parsed = Number(value);
    if (value.trim() !== "" && Number.isFinite(parsed) && parsed >= 0 && parsed <= 1000) {
      setObservations((current) => current.map((observation, index) => index === target ? parsed : observation));
    }
  }

  function reset() {
    setObservations(sample);
    setTarget(4);
    setWindow(3);
    setDraft(String(sample[4]));
  }

  return (
    <section id="foodcast-lab" className="forecast-lab" aria-labelledby="forecast-lab-title">
      <div className="lab-intro">
        <h3 id="forecast-lab-title">Foodcast feature lab</h3>
        <p>A local simulation of shifted lag and rolling features. Synthetic price-index observations for one sample series; not a trained model or a forecast. Nothing is sent or saved.</p>
        <p>Try changing the target observation. Its own features stay the same because only earlier observations enter the calculation. Then choose the next day to see that edit become history.</p>
      </div>
      <div className="lab-controls">
        <label htmlFor="lab-day">Target day
          <select id="lab-day" aria-label="Target day" value={target} onChange={(event) => changeTarget(Number(event.target.value))}>
            {sample.map((_, index) => <option key={index} value={index}>Day {index + 1}</option>)}
          </select>
        </label>
        <label htmlFor="lab-window">Rolling window
          <select id="lab-window" aria-label="Rolling window" value={window} onChange={(event) => setWindow(Number(event.target.value))}>
            {[2, 3, 5].map((size) => <option key={size} value={size}>{size} observations</option>)}
          </select>
        </label>
        <label htmlFor="lab-observation">Target observation
          <input id="lab-observation" type="number" min="0" max="1000" step="any" value={draft}
            onChange={(event) => editObservation(event.target.value)} aria-invalid={!valid}
            aria-describedby="lab-input-help" />
        </label>
        <button type="button" onClick={reset}>Reset sample</button>
      </div>
      <p id="lab-input-help" className="lab-note">{valid ? "Edit the sample index from 0 to 1000. Use arrow keys in the day and window controls." : "Enter a number from 0 to 1000. The table keeps the last valid observation until corrected."}</p>
      <div className="lab-readout" aria-live="polite" aria-atomic="true">
        <dl>
          <div><dt>Previous observation (lag 1)</dt><dd aria-label="Previous observation result">{previous === null ? "Unavailable" : previous.toFixed(2)}</dd></div>
          <div><dt>Shifted rolling mean</dt><dd aria-label="Shifted rolling mean result">{mean === null ? "Unavailable" : mean.toFixed(2)}</dd></div>
        </dl>
        <p>{past.length ? `Day ${target + 1}: mean(${past.join(", ")}) = ${mean!.toFixed(2)}. Uses ${past.length} of ${window} possible earlier observations; excludes day ${target + 1}.` : "Day 1 has no earlier observations. Lag and rolling mean are unavailable, not zero."}</p>
      </div>
      <table>
        <caption>Synthetic sample · which observations enter this window?</caption>
        <thead><tr><th scope="col">Day</th><th scope="col">Index</th><th scope="col">Used in mean?</th></tr></thead>
        <tbody>{observations.map((value, index) => (
          <tr key={index} data-used={index >= start && index < target} data-target={index === target}>
            <th scope="row">{index + 1}</th><td>{value.toFixed(2)}</td>
            <td>{index === target ? "No · target" : index >= start && index < target ? "Yes · past" : index > target ? "No · future" : "No · outside window"}</td>
          </tr>
        ))}</tbody>
      </table>
      <p className="lab-note">This demonstrates a feature-building rule, not the complete pipeline or a guarantee of point-in-time evaluation. The real workflow groups separate product series before shifting. Here, each day has one observation; an early window uses available history (minimum one observation).</p>
      <Link href="/work/foodcast">Read the Foodcast engineering notes</Link>
      <style jsx>{`
        .forecast-lab { color: var(--ink); border-top: 1px solid var(--line); padding: 24px 0 30px; font-size: 14px; line-height: 1.6; }
        .lab-intro { max-width: 70ch; }
        h3 { margin: 0 0 10px; font-family: var(--display); font-size: 25px; font-weight: 500; }
        p { margin: 10px 0; }
        .lab-intro p, .lab-note { color: var(--muted); }
        .lab-controls { display: flex; flex-wrap: wrap; align-items: end; gap: 16px; margin-top: 22px; }
        label { display: grid; gap: 6px; flex: 1 1 155px; }
        select, input, button { min-height: 44px; width: 100%; padding: 8px 10px; background: var(--card); color: var(--ink); border: 1px solid var(--line); font: inherit; border-radius: 3px; }
        input { min-width: 0; }
        select, button { cursor: pointer; }
        button { width: auto; }
        :is(select, input, button):focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
        .lab-note { font-size: 12px; }
        .lab-readout { margin: 20px 0; padding: 16px; background: var(--paper-deep); border-left: 3px solid var(--blue); }
        dl { display: flex; flex-wrap: wrap; gap: 16px 40px; margin: 0; }
        dt { font-size: 12px; }
        dd { margin: 3px 0 0; font-family: var(--mono); font-size: 23px; }
        .lab-readout p { font-size: 13px; overflow-wrap: anywhere; }
        table { width: 100%; border-collapse: collapse; font-size: 13px; }
        caption { text-align: left; color: var(--muted); padding-bottom: 10px; }
        th, td { text-align: left; padding: 9px 6px; border-bottom: 1px solid var(--line); }
        tr[data-used="true"] { background: var(--paper-deep); }
        tr[data-target="true"] { font-weight: 700; }
      `}</style>
    </section>
  );
}
