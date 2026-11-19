# Portfolio Agent Instructions

Place these instructions at the root of the actual portfolio repository as `AGENTS.md`. Keep them separate from any unrelated workspace-level `AGENTS.md` files.

## Mission

Redesign and implement my existing personal portfolio in the active portfolio repository. Make it feel unmistakably personal, easy to understand, and worth exploring. The finished site should show what I build across full-stack software and AI engineering, give visitors credible proof, and make it easy to connect.

This is an implementation brief, not a request to stop at a proposal, design document, or mockup. Inspect the actual portfolio first, then improve it in place while preserving useful content and working behavior.

## What the visitor should understand

Within a few seconds, a visitor should be able to answer:

1. Who is this engineer?
2. What kinds of useful systems can they build?
3. Which real projects prove it, and what technologies were used?
4. What education and certifications are verified?
5. How can I explore, play, comment, or get in touch?

The professional focus is end-to-end software engineering: frontend, backend and APIs, data and databases, AI and machine learning, system design, and deployment where supported by real work. Present a connected engineering practice, not a list of buzzwords or a claim to expertise in everything.

## Work from verified identity and project evidence

Before changing the design, inspect the active repository, its existing portfolio, applicable `AGENTS.md` files, README, project data, and available personal materials. Verify technologies and claims against real projects and code where possible. Check that links work before publishing them.

- Preserve accurate personal writing and useful existing features; improve them instead of replacing them for convenience.
- Treat the portfolio draft pasted with this request as rejected content, not a source of truth. Do not reuse its wording or assume its identity claims, project names, roles, dates, technology lists, education, certifications, GitHub history, contact routes, or metrics are correct. Verify public details independently from the actual portfolio, project repositories, GitHub profile, and personal materials. A project named in that draft may appear only if independently confirmed.
- Never invent my name, biography, education, employers, clients, project role, results, metrics, certifications, production use, or social links.
- Do not treat a dependency in `package.json` as proof that I used or mastered that technology.
- Make the status of work clear: prototype, research, in progress, deployed, or otherwise supported by evidence.
- If an important fact is missing, leave it out of public copy and ask one concise, consolidated set of questions for only the details that materially affect the result. Continue with the parts that can be completed accurately.
- Keep any incomplete content in an obvious, non-public data placeholder rather than publishing bracketed filler or fictional copy.

## Art direction

Create a visual identity from the real person, projects, and engineering interests found in the repository. Before coding, inspect the old portfolio and name the specific choices that make it feel generic, unclear, or unlike me; identify useful content or behavior worth keeping. Start with a short design thesis grounded in verified material, then make deliberate choices for color, type, spacing, composition, project imagery, and interaction. The site should feel authored, not assembled from a portfolio starter kit.

Find one memorable identity anchor in the evidence: a project artifact, a way I explain engineering, a recurring visual idea in my work, or a personal detail I have actually shared. Turn it into one restrained visual signature and one useful interactive moment. Do not invent a personal story or force a metaphor that the work does not support. Compose the page around the content that matters instead of filling a standard portfolio template with different labels.

The desired balance is minimal and focused, with enough personality to be memorable. Use confident typography, clear hierarchy, generous but purposeful whitespace, and a restrained palette. A technical or terminal-inspired detail can be part of the identity, but it must support the content rather than take over the whole page.

Treat the current Bryl Lim portfolio at https://bryllim.com/ as the lead design reference. Inspect the live page at desktop and mobile sizes before implementation. Follow its recognizable browsing rhythm: compact grouped navigation, a brief identity-first introduction with professional links, clearly separated sections with a light numbered cadence, a prominent project showcase, concise experience/stack context where verified, playful utility interactions, and contact that stays easy to reach. Match the reference's clarity, compactness, and editorial pacing closely enough that the design direction is apparent at a glance.

Translate that structure into my own identity and content. Do not copy Bryl's name, writing, exact page composition, branding, assets, metrics, keyboard shortcuts, chat, typing test, or other distinctive interaction. Keep only the high-level visual and UX principles; create original project visuals, copy, console behavior, and personal details. Do not add reference sections that have no evidence in my actual work.

## Design skill workflow

Use the GitHub skill [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) as the primary UX and design-system aid. It supports Codex and provides searchable design guidance for styles, color, typography, UX, accessibility, and framework-specific implementation. If it is not available to the active agent, add it to this portfolio repository only with `npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max`, then read its `SKILL.md` before using its helper scripts. Do not install it globally.

Use Anthropic's `frontend-design` skill too when the active agent already provides it. Use UI/UX Pro Max to inform hierarchy, interaction, and a coherent design system; use frontend-design for subject-specific visual choices and a critical pass against generic AI patterns. The user's explicit reference and the verified portfolio content outrank generic skill recommendations. Do not copy a preset style just because a search returns it. Keep the agent's work moving from the requirements in this file if a skill cannot be loaded.

Before building, run the skill's design-system/search workflow using the actual discovered stack and a query such as “minimal personal full-stack and AI engineer portfolio, editorial, reference-led, interactive terminal, responsive.” Review the returned palette, type, layout, motion, UX, and stack suggestions against Bryl's live site and my verified identity. Keep only decisions that reinforce both; reject recommendations that produce a stock dashboard, generic SaaS landing page, or familiar AI-generated template.

Avoid generated-looking defaults: generic gradient hero art, a grid of identical rounded cards, glowing AI brains, decorative circuit boards, piles of technology logos, arbitrary skill percentages, repeated all-caps labels, endless scroll-reveal effects, and terminal text used only as decoration. Do not select a palette, typeface, stock illustration, or layout just because it is common in developer portfolios. Avoid making every section the same width and shape. Every visual element needs a job, and the first screen must communicate my identity before it shows off effects.

## Site structure and content

Use the simplest navigation that makes the content easy to find. The site should cover:

- **Home:** a human, direct introduction and an accurate statement of what I build. Give visitors clear ways to explore my work and expertise.
- **Projects:** give this the strongest content focus. Curate real projects and explain each project's problem, verified contribution, important engineering decisions, actual stack, status, and demonstrated outcomes. Link to a live demo or public source only when it exists. Use actual product imagery or clearly labeled architecture diagrams; do not use fake screenshots or generic concept illustrations as project evidence.
- **Technology stack:** show the languages, frameworks, tools, and infrastructure I have demonstrably used. Group them by engineering role and connect them to supporting projects. Separate verified hands-on use from technologies I am currently learning; do not imply mastery from a dependency list.
- **Education:** include verified schools, programs, degrees, and dates only when supported by personal materials or official sources.
- **Certifications:** include only credentials that can be verified, with an official verification link when available. Do not invent certificates or imply an unverified credential is current.
- **GitHub history:** link the verified GitHub profile and surface meaningful public repositories or contribution history when available. Use real data from the correct account, state the time period for any counts, and make repository links useful. Never fabricate contribution totals, activity, rankings, or project popularity. If live activity cannot be loaded reliably, show curated public repositories or a simple link to GitHub instead.
- **Expertise:** keep this concise and evidence-led. Organize capabilities by engineering responsibility, connect them to projects, and distinguish demonstrated skills from areas I am learning. Avoid repeating the full stack list here.
- **About:** keep it brief and personal, using verified details only. Omit generic biography filler if available facts do not support it.
- **Contact:** make email and verified professional links easy to find. Do not show a fake or nonfunctional form.

Use detailed case-study pages when they add real explanatory value. Explain architecture with a small diagram only when it clarifies a real system. Favor fewer, specific examples over a large collection of shallow cards.

Prioritize the content in this order: projects and their engineering evidence; stack; education and certifications; GitHub history; then supporting biography and contact. Keep the page scannable and close to Bryl's section rhythm without adding unsupported sections just to match his site.

## Interaction: useful, playful, and real

The portfolio should invite exploration and give visitors at least one memorable interaction tied to my actual work. Keep the experience understandable even if the visitor ignores every interactive feature.

- Make the engineering console a signature part of the portfolio, discoverable from the compact navigation and visible early in the experience. It should help visitors explore projects, understand an engineering decision, try a safe demo, or contact me. Provide a small documented command set, example prompts, clickable controls, and keyboard input. Example commands may include `help`, `projects`, `stack`, `about`, `contact`, and a project-specific demo command; derive the final set from verified content.
- Give the console an AI-inspired feel through purposeful command parsing, a precise cursor, concise streamed output, a clear ready/running state, and a restrained signal or trace animation tied to the visual signature. Keep responses fast and honest. Do not fake network calls, model reasoning, live telemetry, or system access. If there is no real AI service, implement a local, deterministic portfolio guide that searches or selects from verified content and label it accurately; do not claim that it is an LLM.
- Include at least one playable project demo, small sandbox, or interactive walkthrough when it can be grounded in real work. Keep the action obvious, explain inputs and outputs, make it responsive, and label synthetic/sample data. If a real project cannot be safely embedded, build a clearly labeled local simulation of a verified workflow. Never expose credentials or connect a toy interaction to a live system in a way that can mutate data.
- Make the playful element feel like mine: use real project behavior, a verified workflow, or a small clearly labeled simulation as its subject. A bounded console, command palette, mini tool, or guided project walkthrough are options, not requirements to copy another site's feature. Keep the core portfolio easy to browse without playing.
- Provide a genuine way for visitors to leave a comment or guestbook entry if the current app has, or can safely use, an appropriate persistent service. Inspect the existing stack and use its established backend when suitable. Validate and limit submissions, mitigate spam, provide success/error states, and state what information is collected. Do not publish a decorative form, imply that comments are shared when they are stored only in the visitor's browser, or add an unreviewed public write path. If a safe shared-storage option needs credentials, service setup, or approval that is unavailable, finish the rest of the site and report the exact remaining setup needed for comments.
- Keep contact links obvious even when the console or guestbook is unavailable.
- Make interactions work with mouse, touch, and keyboard. Give controls visible focus and clear feedback.

## Motion

Use motion with a clear purpose: orientation, feedback, a meaningful transition, or a single memorable reveal. Let it reinforce the site's visual signature or show a real state change; do not add motion just to signal "AI" or "tech." Make the console's command/result transition feel tactile and considered, and give the playable interaction clear feedback. Favor one carefully choreographed moment and a few interactions over animating every heading and card. Motion must not delay reading or navigation, hijack scrolling, create excessive parallax, or hide content.

Respect `prefers-reduced-motion`; provide a reduced or static experience that remains complete. Keep animations lightweight and avoid adding a large library for effects that can be handled simply with the existing stack.

## Implementation constraints

- Work in the actual portfolio repository. First identify the correct repository root; do not mistake an unrelated workspace or another app for the portfolio.
- Follow its existing framework, routing, coding conventions, and applicable repository instructions. Preserve working routes, integrations, and content flows unless a change is necessary for this redesign.
- Keep content data separate from presentation where that fits the existing architecture. Use reusable components and shared design tokens without over-abstracting a small site.
- Do not add a database, authentication, CMS, admin panel, AI API, or major dependency unless it is necessary for a requested, working feature and fits the existing project.
- Protect secrets and personal data. Never put credentials in client code or commit environment secrets. Do not make external production changes, publish/deploy, or modify a live database without the required authorization.
- Follow all existing repository safety, experiment, and data-access rules. A portfolio task does not grant permission to run model training, access restricted data, change production systems, or publish unapproved evaluation results.
- Add page metadata and social-preview metadata using verified information. Keep media, fonts, JavaScript, and third-party requests lean.

## Accessibility and responsive quality

Build mobile-first and verify phone, tablet, and desktop layouts. Use semantic HTML, a logical heading structure, sufficient contrast, readable line lengths, descriptive links, accessible labels, keyboard navigation, clear focus states, touch-friendly targets, useful image alternatives, and screen-reader-compatible status messages. Do not rely on color, icons, hover, animation, or the console as the only way to understand or use the site. Prevent horizontal overflow.

## Working method

1. Locate the actual portfolio repository before editing. Read its applicable instructions, content, routes, integrations, and checks. Do not mistake an unrelated app or this prompt's location for the portfolio. Reuse prior work and do not rewrite working infrastructure without a clear reason.
2. Discard the rejected draft as a factual or copy source. Inspect the current portfolio at desktop and mobile sizes and verify projects, stack, education, certifications, and GitHub account against available first-party evidence. Record a concise diagnosis of what feels generic or fails to communicate my identity, and what useful content or behavior should remain.
3. Choose a concise visual thesis rooted in verified identity and project material. Set the core palette, type scale, spacing, composition rules, and one understated engineering motif. Check the choices against common AI-generated portfolio patterns and revise anything that looks interchangeable.
4. Implement the complete visitor path: clear introduction, evidence through projects, capabilities, about, a useful way to explore or play, a real comment option or its exact setup dependency, and contact.
5. Review the experience at common responsive sizes and check the actual links, navigation, keyboard flow, form or guestbook states, and reduced-motion behavior.
6. Run the checks already documented by the repository that are relevant to the changes. Report exact commands and results; fix regressions caused by the work. Do not claim performance or accessibility scores unless measured.
7. Do a final content and visual pass. Remove anything that does not help a visitor understand me, see evidence, explore, or connect.

## Definition of done

- The site has a distinct visual identity based on my real work and does not look like a generic AI-generated portfolio.
- Visitors can quickly understand who I am, my full-stack and AI engineering focus, and what evidence supports it.
- Projects lead the story, followed by a verified stack, education, certifications, and useful GitHub history where available.
- Project descriptions accurately show my role, engineering decisions, and verified outcomes.
- Navigation and professional links work across screen sizes.
- The terminal-inspired interaction and playable demo, when included, are useful, accessible, and connected to real portfolio content.
- Comments are genuinely shared and safely handled, or the exact persistent-service setup needed to complete them is reported without presenting a fake feature.
- Motion is purposeful and the site remains fully usable with reduced motion.
- The code follows the existing project structure and its relevant checks have been run and reported accurately.

## Final report

Summarize what changed, the main design and interaction choices, the checks run with their results, and any remaining user action needed for verified personal details, comment-service setup, or external links. Be explicit about anything that could not be verified or completed. Do not claim a deployment, metric, feature, or integration that did not happen.
