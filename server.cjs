var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var MOCK_COURSES = [
  {
    id: "course_video_editing",
    title: "Video Editing Mastery with Premiere Pro",
    subtitle: "Master timeline workflows, motion graphics, audio mixing & cinematic color grading.",
    description: "Complete end-to-end video editing masterclass designed for creators, freelancers, and agency editors.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    progress: 68,
    totalModules: 12,
    completedModules: 8,
    totalLessons: 48,
    completedLessons: 32,
    lastAccessed: "2 hours ago",
    category: "Video Editing",
    instructor: "Aaryan Sharma",
    level: "Beginner to Advanced",
    duration: "18 Hours",
    purchased: true,
    modules: [
      {
        id: "mod_1",
        title: "Module 01: Workspace Setup & Premiere Pro Core Controls",
        lessons: [
          { id: "les_101", title: "01. Setting Up High-Performance Scratch Disks", duration: "12:40", completed: true },
          { id: "les_102", title: "02. Keyboard Shortcuts for 3x Editing Speed", duration: "18:15", completed: true },
          { id: "les_103", title: "03. Ingestion & Proxies for Smooth 4K Playback", duration: "15:20", completed: true }
        ]
      },
      {
        id: "mod_2",
        title: "Module 02: Pacing, Cuts & Narrative Structure",
        lessons: [
          { id: "les_201", title: "01. The J-Cut & L-Cut Masterclass", duration: "14:10", completed: true },
          { id: "les_202", title: "02. Trimming & Speed Ramping Essentials", duration: "20:05", completed: true }
        ]
      },
      {
        id: "mod_3",
        title: "Module 03: Color Grading & Lumetri Scopes",
        lessons: [
          { id: "les_301", title: "01. Reading Vector Scopes & Waveforms", duration: "16:30", completed: false },
          { id: "les_302", title: "02. Creating the Cinematic Film Look", duration: "22:45", completed: false }
        ]
      }
    ]
  },
  {
    id: "course_ai_creator",
    title: "10x AI Creator Mastery & Workflows",
    subtitle: "Leverage ChatGPT, Claude, Gemini, Veo & ElevenLabs to scale video production.",
    description: "Learn how to generate viral video scripts, AI voiceovers, photorealistic avatars, and automated editing pipelines.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    progress: 35,
    totalModules: 8,
    completedModules: 3,
    totalLessons: 32,
    completedLessons: 11,
    lastAccessed: "Yesterday",
    category: "AI Automation",
    instructor: "Aaryan Sharma & AI Team",
    level: "All Levels",
    duration: "12 Hours",
    purchased: true,
    modules: [
      {
        id: "mod_ai_1",
        title: "Module 01: ChatGPT & Claude Hook Engineering",
        lessons: [
          { id: "les_ai_101", title: "01. Prompt Templates for Viral Retention Hooks", duration: "11:15", completed: true },
          { id: "les_ai_102", title: "02. B-Roll Script Generation with Gemini", duration: "14:50", completed: true }
        ]
      },
      {
        id: "mod_ai_2",
        title: "Module 02: ElevenLabs & AI Voice Clone Workflows",
        lessons: [
          { id: "les_ai_201", title: "01. Voice Cloning & Dynamic Emotion Tones", duration: "18:00", completed: true },
          { id: "les_ai_202", title: "02. Removing Robotic Inflections", duration: "09:40", completed: false }
        ]
      }
    ]
  },
  {
    id: "course_freelancing",
    title: "Freelancing & Client Acquisition Blueprint",
    subtitle: "How to land $1,000+ high-paying international clients as a solo video editor.",
    description: "Step-by-step framework to build your editor portfolio, send high-converting cold emails, and close retainers.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    progress: 0,
    totalModules: 6,
    completedModules: 0,
    totalLessons: 24,
    completedLessons: 0,
    lastAccessed: "Not started",
    category: "Business & Freelancing",
    instructor: "Aaryan Sharma",
    level: "Intermediate",
    duration: "10 Hours",
    purchased: false,
    modules: [
      {
        id: "mod_free_1",
        title: "Module 01: Crafting a High-Converting Showreel",
        lessons: [
          { id: "les_free_101", title: "01. The 60-Second Showreel Formula", duration: "15:10", completed: false }
        ]
      }
    ]
  }
];
var MOCK_USER = {
  id: "usr_alex",
  name: "Alex Morgan",
  email: "alex.morgan@aaryanmedia.com",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  tier: "Creator Pro Bundle Member",
  enrolledAt: "July 2026",
  purchasedCourseIds: ["course_video_editing", "course_ai_creator"]
};
function getAuthToken(req) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }
  if (req.query.token) {
    return String(req.query.token);
  }
  return null;
}
app.get("/api/courses", (req, res) => {
  const token = getAuthToken(req);
  const isUnauthorizedTest = req.query.unauthorized === "true";
  if (isUnauthorizedTest || token && token === "invalid_token") {
    return res.status(401).json({
      success: false,
      error: "Unauthorized access. Please log in with valid credentials."
    });
  }
  const isAuthenticated = Boolean(token && token !== "unauthenticated");
  res.json({
    success: true,
    authenticated: isAuthenticated,
    user: isAuthenticated ? MOCK_USER : null,
    courses: MOCK_COURSES.map((course) => ({
      ...course,
      // calculate purchased status according to user
      purchased: isAuthenticated ? MOCK_USER.purchasedCourseIds.includes(course.id) : false
    }))
  });
});
app.get("/api/courses/:id", (req, res) => {
  const course = MOCK_COURSES.find((c) => c.id === req.params.id);
  if (!course) {
    return res.status(404).json({ success: false, error: "Course not found" });
  }
  res.json({ success: true, course });
});
app.post("/api/auth/login", (req, res) => {
  const { email } = req.body;
  res.json({
    success: true,
    token: "am_token_mock_12345",
    user: {
      ...MOCK_USER,
      email: email || MOCK_USER.email
    }
  });
});
app.get("/api/auth/me", (req, res) => {
  const token = getAuthToken(req);
  if (!token || token === "unauthenticated" || token === "invalid_token") {
    return res.status(401).json({ success: false, error: "Not authenticated" });
  }
  res.json({
    success: true,
    user: MOCK_USER
  });
});
app.post("/api/enroll", (req, res) => {
  const { courseId, planId } = req.body;
  res.json({
    success: true,
    message: "Successfully enrolled!",
    enrolledCourseId: courseId || "course_video_editing"
  });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
