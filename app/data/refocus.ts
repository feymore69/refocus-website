import type { Component } from 'vue'
import {
  Activity,
  AlarmClockCheck,
  AppWindow,
  ChartColumnIncreasing,
  Eye,
  Keyboard,
  MonitorCog,
  ShieldCheck,
} from 'lucide-vue-next'

export interface FeatureGroup {
  icon: Component
  title: string
  body: string
  points: string[]
}

export interface WorkflowStep {
  step: string
  title: string
  body: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface TrustCard {
  icon: Component
  title: string
  body: string
}

export const siteConfig = {
  name: 'Refocus',
  siteUrl: 'https://re-focus.me',
  seoTitle: 'Refocus | Free Desktop Screen Break Reminder Software',
  seoDescription:
    'Refocus is a free desktop screen break reminder with real schedule presets, local-only stats, Smart Pause timing, and adjustable break overlays.',
  socialImage: '/refocus-app.png',
  badge: 'Free desktop app',
  headline: 'Smart screen breaks that respect your flow',
  description:
    'Refocus is a free desktop screen break reminder that helps you protect your eyes, posture, and attention without breaking flow. Set a rhythm, keep working, and let breaks arrive with better timing.',
  primaryCta: {
    label: 'Download for desktop',
    href: 'https://github.com/feymore69/refocus/releases',
  },
  secondaryCta: {
    label: 'See the desktop flow',
    href: '#desktop',
  },
}

export const heroHighlights = [
  '20-20-20, Pomodoro Soft, Deep Work, and Marathon presets',
  'Idle-aware timing and typing-aware Smart Pause',
  'Modal or full-screen breaks with an optional enforced mode',
  'Local-only stats, history, tray controls, and hotkey support',
]

export const schedulePresets = [
  {
    label: '20-20-20',
    description: 'Every 20 minutes, look away for 20 seconds to reduce eye strain.',
  },
  {
    label: 'Pomodoro Soft',
    description: 'A soft Pomodoro rhythm with short visual resets between work sprints.',
  },
  {
    label: 'Deep Work',
    description: 'Longer focus blocks with structured recovery so flow stays sustainable.',
  },
  {
    label: 'Marathon',
    description: 'For extended sessions, with stronger breaks to protect eyes and posture.',
  },
]

export const productChips = [
  'Launch on startup',
  'Stay in tray',
  'Start break now',
  'Pause until tomorrow',
  'Working hours',
  'Weekly trend',
]

export const featureGroups: FeatureGroup[] = [
  {
    icon: AlarmClockCheck,
    title: 'Timing that stays out of the way',
    body: 'Refocus starts with a real schedule system instead of a single countdown and a guilt trip.',
    points: [
      'Choose a starting rhythm, then tune work interval, break duration, and snooze time.',
      'Set weekday working hours, including overnight schedules, so reminders only land during active time.',
      'Pause reminders for a while, resume the schedule, or trigger a break immediately when you need one.',
    ],
  },
  {
    icon: Keyboard,
    title: 'Smart Pause, but only where it is real',
    body: 'The current build focuses on local activity signals that are actually wired into the product today.',
    points: [
      'Optionally pause the timer while you are idle so only active desk time counts toward the next break.',
      'If a reminder becomes due while you are actively typing, Refocus can briefly defer it until the burst settles.',
      'This build does not promise invasive monitoring or broad app surveillance to feel "smart."',
    ],
  },
  {
    icon: AppWindow,
    title: 'Break overlays with adjustable boundaries',
    body: 'You can keep breaks calm, or make them harder to dodge when you know you need the help.',
    points: [
      'Use a modal popup or a full-screen takeover depending on how visible you want the interruption to be.',
      'Let breaks auto-start when time is up, or keep manual control and start them from the popup.',
      'Enforced break mode adds focus lock, hold-to-skip protection, and connected-display guard windows.',
    ],
  },
  {
    icon: ChartColumnIncreasing,
    title: 'Local proof that the habit is working',
    body: 'Refocus tracks the signals you need to stay honest without shipping your workday to a server.',
    points: [
      'See focused time, adherence, taken versus skipped breaks, longest streak, and a weekly trend at a glance.',
      'Review a local timeline of completed, skipped, and snoozed events with timestamps and reminder context.',
      'History is kept on-device and trimmed to the latest 200 entries in the current build.',
    ],
  },
  {
    icon: MonitorCog,
    title: 'Desktop behavior that feels native',
    body: 'The app already behaves like a desktop tool instead of a browser timer stuffed into a window.',
    points: [
      'Refocus supports tray-first behavior, launch on startup, notifications, and a global hotkey for manual breaks.',
      'Reminder sounds are built in, and media pause and resume is available as a best-effort Windows feature.',
      'Settings, schedules, and history persist locally so the app comes back the way you left it.',
    ],
  },
]

export const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: 'Pick a starting rhythm',
    body: 'Start with 20-20-20, Pomodoro Soft, Deep Work, or Marathon, then fine-tune break length, snooze time, and working hours.',
  },
  {
    step: '02',
    title: 'Keep your flow',
    body: 'Refocus counts down quietly in the background, can live in the tray, and can delay a due reminder until active typing settles.',
  },
  {
    step: '03',
    title: 'Take the break with the right level of friction',
    body: 'Stay gentle with a modal reminder, or turn on stricter overlay behavior when you want fewer loopholes.',
  },
]

export const trustCards: TrustCard[] = [
  {
    icon: ShieldCheck,
    title: 'Local-first by default',
    body: 'The current build stores settings, schedules, timestamps, and break history on-device. No analytics, ads, or cloud sync are included.',
  },
  {
    icon: Eye,
    title: 'Written from the real product',
    body: "This site is based on the desktop app's actual schedule presets, overlay behavior, history model, tray actions, and settings copy.",
  },
  {
    icon: Activity,
    title: 'Honest about scope',
    body: 'Advanced Smart Pause fields exist in the data model, but the live behavior today centers on local activity, idle timing, and typing-aware deferral.',
  },
]

export const faqItems: FaqItem[] = [
  {
    question: 'What does Smart Pause actually do right now?',
    answer:
      'In the current build, Smart Pause uses local activity timestamps to pause timing while you are idle and to briefly defer a due reminder while you are actively typing.',
  },
  {
    question: 'How strict can Refocus be?',
    answer:
      'You can keep breaks as a normal popup or switch to a stronger flow with auto-start, full-screen overlay, focus lock, hold-to-skip protection, and guard windows on connected displays.',
  },
  {
    question: 'Where does my data go?',
    answer:
      'Settings, schedules, and break history are stored locally on the device. The current build does not ship analytics, ads, or cloud sync.',
  },
  {
    question: 'Is everything in settings already fully wired?',
    answer:
      'No. A few future-facing fields exist in the settings model, and short-break controls exist internally, but this website only markets the behaviors that are visibly implemented today.',
  },
]

export const socialProofLine =
  'Built from the current Refocus desktop app: live countdowns, working hours, local analytics, tray controls, strict overlays, and real schedule presets.'

export const seoKeywords = [
  'desktop screen break reminder',
  'screen break reminder',
  'desktop break reminder',
  'eye strain app',
  'focus break timer',
  'screen time breaks',
  'productivity break reminders',
  'posture reminders',
  'local-first desktop app',
]

export const featureTruthLine =
  'No invented AI claims. No made-up integrations. Just the real product, translated into a calm desktop landing page.'

export const footerLinks = [
  { label: 'Desktop app repo', href: 'https://github.com/feymore69/refocus' },
  { label: 'Website repo', href: 'https://github.com/feymore69/refocus-website' },
  { label: 'Desktop releases', href: 'https://github.com/feymore69/refocus/releases' },
]

export const headerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'FAQ', href: '#faq' },
]

export const callout = {
  eyebrow: 'Desktop-first, calm by design',
  title: 'Protect your eyes, posture, and focus without turning work into a punishment loop.',
  body:
    'Refocus already ships real countdowns, real overlays, and real history. The launch link below points straight to the desktop release feed so people can install the app directly.',
}
