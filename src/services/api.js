const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

export const optimizeSEO = async ({ title, description }) => {
  await delay(500);

  const keywords = Array.from(
    new Set(
      (title + " " + description)
        .toLowerCase()
        .split(/\s+/)
        .filter((word) => word.length > 4)
        .map((word) => word.replace(/[.,!?]/g, ""))
    )
  ).slice(0, 6);

  return {
    seoScore: {
      title: Math.min(100, Math.max(60, Math.round((title.length / 80) * 100))),
      tags: Math.min(100, Math.max(60, keywords.length * 14)),
      description: Math.min(100, Math.max(60, Math.round((description.length / 250) * 100))),
    },
    optimizedTitle: title.length < 70 ? `${title} | High-Converting Gig` : title,
    optimizedDescription: description.endsWith(".") ? description : `${description}.`
      + "\n\nThis gig is optimized for clarity, skill focus, and search visibility.",
    suggestedTags: keywords.map((tag) => ({ tag, valid: true })),
  };
};

export const generateProposal = async ({ jobPost, tone = "Professional", skill = "Freelance", platform = "Fiverr" }) => {
  await delay(500);

  const proposal = `Hello! I am an experienced ${skill} specialist ready to help you with this project. Based on your ${platform} requirements, I will deliver a polished, client-focused proposal that highlights your strengths. I can complete the work on time with attention to detail, strong communication, and high-quality results.`;

  const keyPoints = [
    `Expertise in ${skill}`,
    `Professional ${platform} delivery`,
    `Client-first communication`,
  ];

  if (tone) {
    keyPoints.unshift(`Tone: ${tone}`);
  }

  return { proposal, keyPoints };
};

export const analyzeProfile = async ({ profile }) => {
  await delay(500);

  const score = Math.min(100, Math.max(50, 60 + Math.floor(profile.length / 15)));

  return {
    score,
    strengths: [
      "Clear skill focus",
      "Strong client orientation",
      "Relevant project examples",
    ],
    weaknesses: [
      "Add more measurable results",
      "Use clearer service outcomes",
      "Showcase recent achievements",
    ],
    suggestions: [
      "Highlight your top niche skills.",
      "Include specific results from past projects.",
      "Use a clear call to action for buyers.",
    ],
  };
};

export const saveHistory = async () => {
  await delay(300);
  return { success: true };
};

export const getHistory = async () => {
  await delay(300);
  return [];
};

export const deleteHistory = async () => {
  await delay(200);
  return { success: true };
};

export const getUsage = async () => {
  await delay(200);
  return { daily_count: 0, date: new Date().toISOString().split("T")[0] };
};

export const login = async () => {
  await delay(300);
  return { success: true };
};

export const signup = async () => {
  await delay(300);
  return { success: true };
};

export const getSubscriptions = async () => {
  await delay(300);
  return [];
};

export const subscribePlan = async () => {
  await delay(300);
  return { success: true };
};

export const cancelSubscription = async () => {
  await delay(300);
  return { success: true };
};
