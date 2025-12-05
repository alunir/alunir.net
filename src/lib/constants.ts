// Navigation
export const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Strategy", href: "#strategy" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
] as const;

// Contact
export const CONTACT_EMAIL = "info@alunir.net";
export const CURRENT_YEAR = 2025;

// Site metadata
export const SITE_CONFIG = {
  name: "alunir",
  title: "alunir | Proprietary Crypto Trading Family Office",
  description:
    "Proprietary crypto trading family office running 100% in-house capital with algorithmic trading.",
  url: "https://alunir.net",
} as const;

// Overview stats
export const OVERVIEW_STATS = [
  { value: "24/7", label: "Automated Trading" },
  { value: "Multi", label: "Exchange Support" },
  { value: "Real-time", label: "Risk Management" },
] as const;

// Trading strategies
export const STRATEGIES = [
  {
    icon: "⚡",
    title: "High-Frequency Execution",
    description:
      "Lightning-fast order execution with sub-millisecond latency across multiple exchanges.",
  },
  {
    icon: "🔮",
    title: "Predictive Analytics",
    description:
      "Machine learning models analyze market patterns to identify profitable opportunities.",
  },
  {
    icon: "🛡️",
    title: "Risk Mitigation",
    description:
      "Dynamic position sizing and stop-loss mechanisms protect capital during volatility.",
  },
  {
    icon: "📊",
    title: "Portfolio Optimization",
    description:
      "Systematic rebalancing ensures optimal asset allocation based on market conditions.",
  },
] as const;

// Features
export const FEATURES = [
  {
    title: "Institutional Grade",
    description: "Enterprise-level infrastructure with 99.9% uptime guarantee.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Transparent Reporting",
    description: "Real-time dashboards and detailed performance analytics.",
    gradient: "from-neon-purple to-neon-cyan",
  },
  {
    title: "Secure Custody",
    description: "Multi-signature wallets with cold storage for asset protection.",
    gradient: "from-neon-blue to-neon-purple",
  },
] as const;

// Animation
export const ANIMATION = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
  },
  inViewMargin: "-100px",
} as const;
