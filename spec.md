# Portfolio Website Specification

> A comprehensive specification document for building a modern, industry-standard portfolio website showcasing projects, achievements, experience, and personal information.

---

## 1. Introduction

### Hero / About Section

- **Primary Message:** Quick introduction about yourself
- **Current Role:** SDE-1 at Akrivia HCM
- **Expertise:** MEAN Stack (MongoDB, Express.js, Angular, Node.js)
- **Tone:** Professional yet approachable; convey passion for building impactful software

**Content Guidelines:**
- Lead with your current role and value proposition
- Mention tech stack expertise to establish credibility
- Keep the introduction concise (2–4 sentences) for quick scanning
- Consider a tagline that reflects your focus (e.g., full-stack development, HR tech, web applications)

---

## 2. Timeline of Work and Education History

Display professional experience and education in **chronological order** (most recent first). Use a clear timeline/visual layout.

### Professional Experience

| Period | Role | Company | Description |
|--------|------|---------|-------------|
| Dec'24 – Present | **SDE-1** | **Akrivia HCM** | Contributing to the development and enhancement of HR Management Software |
| Sep'24 – Present | **Full Stack Developer** | **QOptars** (IIT Hyderabad Incubation Center) | Developing a website for accessing drone data using the MERN Stack |
| Sep'23 – Present | **App Developer Intern** | **Novizit** | Frontend development for mobile application & website using React Native and Tailwind CSS |
| Jul'23 – Dec'23 | **Full Stack Web Developer Intern** | **Tech Table** | Developed web applications using the MERN Stack and collaborated on client projects |

### Education

| Period | Institution | Details |
|--------|--------------|---------|
| 2021 – 2025 | Maharaj Vijayram Gajapathi Raj College Of Engineering, India | B.Tech in Computer Science Engineering \| CGPA: 9.22/10 (expected) |
| 2019 – 2021 | Sri Chaitanya Junior College, India | BIE (Class XII) \| Aggregate: 99% |
| 2006 – 2019 | Dr. Besant School, India | SSC (Class X) \| CGPA: 10/10 |

**Design Notes:**
- Use a vertical timeline with dates and clear hierarchy
- Differentiate work vs. education (e.g., icons, color accents)
- Ensure mobile responsiveness for timeline layout

---

## 3. Projects

Showcase key projects with consistent structure: title, period, technologies, description, achievements, and link.

### Project 1: MVGR Voices

- **Period:** Jan'24 – Mar'24
- **Technologies:** React, Tailwind CSS, Express.js, Node.js, MongoDB, Firebase, Chatbot, Docker
- **Description:** A platform for students to express ideas through podcasts and blogs.
- **Achievements:**
  - Over 2,000 users in 10 days
  - Reduced loading time by 50%
  - Implemented chatbot and real-time notifications
  - Theme-switching functionality
- **Link:** [https://mvgrvoices.onrender.com/](https://mvgrvoices.onrender.com/)

### Project Placeholders

- Reserve space for 2–4 additional projects with the same structure
- Optional: “Coming soon” or “In progress” badges for future projects

**Design Notes:**
- Use project cards with hover effects
- Include technology badges/tags for quick scanning
- Make CTA buttons obvious (e.g., “View Project”, “Live Demo”, “GitHub”)

---

## 4. Tech Stack

Display technologies in grouped categories for clarity:

| Category | Technologies |
|----------|--------------|
| Languages | C, C++, Java, HTML, CSS, JavaScript (JS), TypeScript (TS) |
| Frontend | React, Angular, Tailwind CSS |
| Backend | Node.js, Express.js |
| Databases | MongoDB, MySQL |
| Tools & Concepts | Kafka, System Design |

**Presentation Options:**
- Icon + label for each technology
- Grouped sections (Languages, Frontend, Backend, Databases, Tools)
- Skill bars or proficiency indicators (optional)

---

## 5. Contact Information

- **GitHub** – Link with icon
- **LinkedIn** – Link with icon
- **Instagram** – Link with icon

**Design Notes:**
- Place in footer and/or floating contact bar
- Use recognizable brand icons (e.g., from Lucide, Heroicons, or SVG)
- Ensure links open in a new tab (`target="_blank"`) with `rel="noopener noreferrer"`

---

## 6. Design and Development Guidelines

### Industry Standards

- **Accessibility (WCAG 2.1):** Sufficient color contrast, focus states, semantic HTML, ARIA where needed
- **Responsive Design:** Mobile-first; breakpoints for mobile, tablet, desktop
- **Performance:** Lazy loading images, minimal bundle size, Core Web Vitals
- **SEO:** Meta tags, structured data, semantic headings, clear URLs

### Visual Design

- **Whitespace:** Adequate spacing for readability
- **Dark/Light Mode:** Optional theme toggle for user preference

#### Color Palette

| Role | Light Mode | Dark Mode | Hex |
|------|------------|-----------|-----|
| **Background** | Off-white | Near black | `#FAFAFA` / `#0F0F0F` |
| **Surface** | White | Dark gray | `#FFFFFF` / `#1A1A1A` |
| **Primary** | Indigo | Indigo | `#4F46E5` |
| **Primary hover** | Darker indigo | Lighter indigo | `#4338CA` / `#6366F1` |
| **Secondary** | Slate gray | Light gray | `#64748B` / `#94A3B8` |
| **Accent** | Amber | Amber | `#F59E0B` |
| **Text** | Slate 900 | Slate 100 | `#0F172A` / `#F1F5F9` |
| **Muted text** | Slate 500 | Slate 400 | `#64748B` / `#94A3B8` |
| **Border** | Slate 200 | Slate 700 | `#E2E8F0` / `#334155` |

**Usage:**
- **Primary** — Buttons, links, active states, key highlights
- **Accent** — CTAs, badges, success states, hover highlights
- **Secondary** — Supporting text, icons, labels

#### Typography

| Element | Font | Weight | Notes |
|---------|------|--------|-------|
| **Headings** | Plus Jakarta Sans | 600–700 | Clean, modern sans-serif; good for titles |
| **Body** | Inter | 400 | Highly readable, neutral; excellent for paragraphs |
| **Mono / Code** | JetBrains Mono | 400 | Technical snippets, tech stack badges |

**Font sizes (recommended):**
- Hero: 2.5rem – 3rem (40–48px)
- H1: 2rem (32px)
- H2: 1.5rem (24px)
- H3: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Animations

- Subtle scroll-triggered animations (e.g., fade-in, slide-up)
- Hover effects on interactive elements
- Smooth transitions between sections
- Avoid overly long or distracting motion

### Best Practices

- Clear visual hierarchy
- Consistent spacing system (4px or 8px base)
- Reusable component structure
- Loading and error states where applicable

---

## 7. Technical Specifications

### Layer Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19, TypeScript, Tailwind CSS |
| **Backend** | Hono, TypeScript |
| **Build** | Vite |
| **Runtime** | Bun |

### Project Structure (Suggested)

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Introduction.tsx
│   │   ├── Timeline.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx
│   │   └── Contact.tsx
│   ├── layouts/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
│   └── types/
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### Dependencies (Core)

- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **Hono** (if backend/API needed)
- **Bun** (runtime)

---

## 8. Content Summary

| Section | Key Content |
|---------|-------------|
| Introduction | SDE-1 @ Akrivia HCM, MEAN stack |
| Timeline | 4 roles + 3 education entries |
| Projects | MVGR Voices + placeholders |
| Tech Stack | 15+ technologies across 5 categories |
| Contact | GitHub, LinkedIn, Instagram |

---

*This spec is intended as a living document. Update as projects, roles, and requirements evolve.*
