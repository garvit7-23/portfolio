export type Project = {
  title: string;
  tagline: string;
  description: string[];        // ✅ always array
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  github: string;
  features?: string[];          // ✅ optional
};

export const projects: Record<string, Project> = {
  forgequeue: {
    title: "ForgeQueue",
    tagline: "Distributed Background Job Queue & Scheduler (Python + Redis)",
    description: [
      "ForgeQueue is a production-style background job processing system built from scratch using Python and Redis.",
      "It supports asynchronous execution, retries with exponential backoff, priority queues, delayed jobs, cron-based scheduling, graceful shutdown, and metrics.",
      "This project demonstrates real backend systems engineering, not just CRUD APIs.",
    ],
    problem:
      "Modern applications rely on background processing for tasks like email delivery, data processing, and scheduled jobs. Building these systems reliably requires careful handling of retries, failures, and concurrency.",
    solution:
      "ForgeQueue provides a simple API for enqueueing jobs while workers process tasks asynchronously with retry logic and dead-letter queues.",
    features: [
      "Asynchronous background job execution",
      "Redis-backed persistent job storage",
      "Priority queues (HIGH / NORMAL / LOW)",
      "Multiprocessing worker pool",
      "Automatic retries with exponential backoff",
      "Dead-letter queue (DLQ) for failed jobs",
      "Delayed (run-at) jobs",
      "Cron-based recurring jobs",
      "Graceful worker shutdown (SIGINT / SIGTERM)",
      "Redis-backed operational metrics",
      "Dockerized Redis (production-like setup)",
    ],
    architecture: [
      "API enqueues jobs into Redis queues",
      "Workers poll queues based on priority",
      "Failed jobs are retried with backoff",
      "Permanent failures move to a dead-letter queue",
    ],
    techStack: ["Python", "FastAPI", "Redis", "Docker"],
    github: "https://github.com/garvit7-23/forgequeue",
  },

  "paper-trader": {
  title: "Event-Driven Paper Trading & Backtesting Engine",
  tagline: "Multi-symbol candle replay + realistic execution + portfolio PnL tracking.",
  description: [
    "Built a modular, event-driven paper trading system that replays historical OHLCV data candle-by-candle and simulates trades without risking real capital.",
    "Supports both single-symbol and multi-symbol portfolio simulation, enabling strategy evaluation across large watchlists with consistent execution behavior.",
    "Implements a clean separation between strategy logic (signal generation) and execution logic (position lifecycle), making it easy to plug in new strategies and risk rules.",
    "Tracks portfolio state in real-time including cash balance, open positions, unrealized PnL (mark-to-market), and closed trade history with exit reasons (STOP / TARGET).",
    "Designed to reduce backtest-vs-replay drift by ensuring the same indicator pipeline and signal timing logic is used during replay and backtesting.",
  ],
  problem:
    "Most trading strategies look profitable in simple backtests, but fail in practice due to unrealistic assumptions like instant fills, incorrect candle timing, and missing portfolio-level constraints.",
  solution:
    "This engine provides a controlled simulation environment that replays historical candles exactly as they arrive in live markets, executes trades through a portfolio-aware execution layer, and produces transparent trade logs and PnL outcomes.",
  architecture: [
    "Market Data Feeds: CSVReplayFeed (single symbol) and MultiCSVReplayFeed (portfolio-level replay across many symbols)",
    "Strategy Layer: StrategyEngine for candlestick-pattern signal generation, risk-based position sizing, and RRR filtering",
    "Execution Layer: ExecutionEngine to open positions from signals and close them using OHLC stop-loss/target checks",
    "Portfolio Layer: cash + equity accounting, mark-to-market updates, open position management, and closed trade recording",
    "Engine Orchestrator: PaperTradingEngine that coordinates exits → entries → mark-to-market per candle for deterministic replay",
  ],
  techStack: ["Python", "Pandas", "NumPy", "FastAPI"],
  features: [
    "Event-driven design with deterministic candle-by-candle stepping for reproducible results",
    "Multi-symbol portfolio replay tested on a large dataset (watchlist-scale simulation)",
    "Risk-managed position sizing (capital-based risk % per trade) with RRR enforcement",
    "Trade lifecycle tracking with exit reasons and per-trade PnL logging",
    "Extensible architecture: add new strategies, indicators, and execution rules without rewriting the engine",
  ],
  github: "https://github.com/garvit7-23/Auto-Trader",
},

"litter-detection-system": {
  title: "AI-Powered Litter Detection & Vehicle Identification System",
  tagline: "Real-time litter detection with vehicle tracking and license plate recognition.",
  description: [
    "Developed an end-to-end computer vision system to automatically detect roadside littering incidents from images and video streams without manual monitoring.",
    "Uses deep learning–based object detection to identify litter objects and associate them with nearby vehicles at the time of disposal.",
    "Implements a modular pipeline separating detection, tracking, and recognition stages, allowing independent model upgrades and performance tuning.",
    "Extracts vehicle attributes including bounding boxes, movement context, and license plate text for traceability and enforcement use cases.",
    "Designed to run efficiently on CPU-only environments, enabling deployment on edge devices and low-resource systems."
  ],
  problem:
    "Manual monitoring of littering and illegal dumping is inefficient, error-prone, and does not scale across large urban or highway areas, leading to poor enforcement and environmental degradation.",
  solution:
    "This system automates litter detection by continuously analyzing visual data, identifying littering events in real time, linking them to responsible vehicles, and extracting license plate information to enable actionable reporting and accountability.",
  architecture: [
    "Input Layer: Image and video ingestion from CCTV feeds, dashcams, or uploaded media",
    "Detection Layer: Deep learning models for litter object detection and vehicle detection",
    "Tracking & Association Layer: Spatial and temporal linking of litter objects to nearby vehicles",
    "Recognition Layer: License plate detection and OCR-based text extraction",
    "Output Layer: Structured incident logs containing timestamps, vehicle details, bounding boxes, and evidence frames"
  ],
  techStack: ["Python", "OpenCV", "PyTorch", "YOLO", "Tesseract OCR", "NumPy"],
  features: [
    "End-to-end automated pipeline from raw visual input to actionable littering reports",
    "Multi-object detection and vehicle association for realistic real-world scenarios",
    "License plate extraction for accountability and enforcement workflows",
    "Optimized for CPU-only systems to support low-cost deployments",
    "Extensible design allowing new detection models, tracking logic, or OCR engines to be integrated easily"
  ],
  github: "https://github.com/garvit7-23/-Computer-Vision-Project"
}


};
