const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const portfolioData = {
  projects: {
    twoworlds: {
      eyebrow: "AI reliability · Thesis research · Ongoing",
      title: "TwoWorlds",
      image: asset("assets/twoworlds-overview.svg"),
      showFullImage: false,
      imageAlt: "An AI agent compares measurements from a hidden scientific world with predictions from an editable simulator.",
      imageCaption: "Conceptual overview of the TwoWorlds setup.",
      imageWidth: 1200,
      imageHeight: 620,
      summary: "A benchmark for understanding how AI agents fail on scientific reasoning tasks.",
      question: "How do agents reason about a scientific system when they can take measurements but only have an approximate simulator to work with?",
      built: "I lead TwoWorlds in SAGE Lab at Virginia Tech. It spans geophysics, semiconductor diagnostics, thermal modeling, and battery monitoring, pairing hidden scientific worlds with editable simulators and budgeted measurement tools.",
      learned: "The work is ongoing. I use agents’ execution traces to investigate their failures and guide improvements in scientific reasoning. This work forms part of my M.S. thesis on AI reliability.",
      tags: ["AI agents", "Scientific reasoning", "MCP", "Agent evaluation"],
      links: []
    },
    optimization: {
      eyebrow: "LLM reasoning · Ongoing research",
      title: "Underspecified Math LLM Reasoning Pipeline",
      image: asset("assets/optimization-concept.png"),
      showFullImage: false,
      imageAlt: "A human and an AI agent face each other with a question mark between them.",
      imageCaption: "Concept illustration: reasoning when information is missing.",
      imageWidth: 1224,
      imageHeight: 660,
      summary: "Developing training methods for language models working on incomplete optimization problems.",
      question: "How should an LLM reason about an optimization problem when constraints or other necessary details are missing?",
      built: "I developed a curriculum-driven, multi-turn on-policy distillation pipeline for Qwen2.5 as part of my research with Dr. Ming Jin at Virginia Tech.",
      learned: "The aim is to reduce syntax errors and hallucinations while maintaining performance on IndustryOR and OptMATH.",
      focusLabel: "Current focus",
      tags: ["Qwen2.5", "On-policy distillation", "Optimization", "Multi-turn reasoning"],
      links: []
    },
    qwen: {
      eyebrow: "Language models · Team project",
      title: "Training Qwen with GRPO",
      image: asset("assets/cot.png"),
      imageAlt: "A side-by-side illustration of standard prompting and chain-of-thought prompting on arithmetic questions.",
      imageCaption: "Reference illustration of standard and chain-of-thought prompting.",
      imageWidth: 2304,
      imageHeight: 1156,
      summary: "Reinforcement learning for medical reasoning with Qwen2.5-3B.",
      question: "Can GRPO training improve Qwen’s answers on medical reasoning tasks beyond a supervised fine-tuning baseline?",
      built: "I implemented and trained the GRPO framework for Qwen2.5-3B, building on the team’s supervised fine-tuning baseline. The training integrated rewards for answer correctness, reasoning similarity, and response format.",
      learned: "Team evaluation showed gains of 9–14.2 percentage points over the SFT baseline in Gemini 2.0 Flash-judged accuracy across three medical QA test sets.",
      tags: ["Qwen2.5", "GRPO", "LLM post-training", "PyTorch"],
      links: [
        { label: "Read the report", href: "https://vikrant-bhati.github.io/profile/cs5624-final-project.pdf" }
      ]
    },
    cnn: {
      eyebrow: "Computer vision · Team project",
      title: "Cross-task CNN benchmarking",
      image: asset("assets/cnn-reference.png"),
      imageAlt: "A diagram showing dense connections between convolutional layers and a transition layer.",
      imageCaption: "Reference illustration of dense connections in a convolutional network.",
      imageWidth: 1072,
      imageHeight: 728,
      summary: "Comparing attention and dynamic convolutions across image and time-series tasks.",
      question: "How do attention-based and dynamic CNNs compare across classification, segmentation, and time-series recognition?",
      built: "We benchmarked CNN architectures on Tiny ImageNet, Pascal VOC 2012, and UCR Adiac, comparing predictive performance and computational cost across the three tasks.",
      learned: "In our team’s experiments, OD-CNN improved image classification accuracy from 65.2% to 73.4% and segmentation mIoU from 67.5 to 73.09. Dynamic CNNs increased Adiac’s 10-fold mean accuracy from 57.1% to 65.3%.",
      tags: ["CNNs", "Dynamic convolution", "Computer vision", "PyTorch"],
      links: [
        { label: "Read the report", href: "https://vikrant-bhati.github.io/Deep-learning/CNNs/Comprehensive_comparision_CNNs/Final-project-report.pdf" }
      ]
    },
    learning: {
      eyebrow: "Machine learning · Implementations and experiments",
      title: "Deep Learning Journey",
      image: asset("assets/deep-learning-examples.png"),
      imageAlt: "A collage of six image-captioning examples, pairing photographs with predicted descriptions.",
      imageCaption: "Examples of image captioning.",
      imageWidth: 1090,
      imageHeight: 626,
      summary: "A collection of machine-learning implementations, experiments, and reports across vision, sequence models, and optimization.",
      question: "How do different deep-learning approaches work in practice?",
      built: "I put together implementations and experiments covering CNNs, RNNs, Transformers, transfer learning, and optimization, using PyTorch and TensorFlow.",
      learned: "The project site collects the code, learning notes, and reports by topic, including the cross-task CNN comparison featured here.",
      focusLabel: "Inside the collection",
      tags: ["PyTorch", "TensorFlow", "CNNs", "Sequence models", "Transformers"],
      links: [
        { label: "Explore the collection", href: "https://vikrant-bhati.github.io/Deep-learning/" }
      ]
    },
    asphalt: {
      eyebrow: "Computer vision · Interaction experiment",
      title: "Asphalt Reimagined",
      image: asset("assets/asphalt-demo.png"),
      imageAlt: "Hand-tracking camera views alongside driving gameplay in Asphalt Reimagined.",
      imageCaption: "Hand tracking and gameplay from the Asphalt Reimagined demo.",
      imageWidth: 1390,
      imageHeight: 604,
      summary: "Exploring hand gestures as controls for a driving game.",
      question: "What would it feel like to control a driving game through hand gestures?",
      built: "I worked on a gesture-control project using Python, OpenCV, and MediaPipe to connect hand tracking with game interaction.",
      learned: "The project explores the connection between visual input and a usable control scheme. The demo shows the interaction in action.",
      tags: ["Python", "OpenCV", "MediaPipe", "Gesture control"],
      links: [
        { label: "Explore the project", href: "https://vikrant-bhati.github.io/asphalt_reimagined/" },
        { label: "Watch the demo", href: "https://youtu.be/jf9etWVmbEA" }
      ]
    }
  },
  experience: {
    vt: {
      eyebrow: "Virginia Tech · Blacksburg, VA",
      title: "Graduate Assistant — Research, Teaching & IT",
      period: "Jan 2025–Present",
      description: "My work at Virginia Tech spans AI reliability research, teaching, and the software that supports university operations.",
      highlights: [
        "Lead TwoWorlds in SAGE Lab and develop a curriculum-driven, multi-turn on-policy distillation pipeline for Qwen2.5, aimed at reducing syntax errors and hallucinations in optimization tasks.",
        "Mentored 45+ graduate students in Advanced Machine Learning and 130+ undergraduates in C++ software design and testing.",
        "Work with the Director of IT to develop features and maintain attendance, directory, and other university applications."
      ],
      tags: ["Agent reliability", "LLM training", "Teaching", "Application development"]
    },
    viavi: {
      eyebrow: "VIAVI Solutions · Germantown, MD",
      title: "Software Developer, AI/ML — Co-op",
      period: "May–Dec 2025",
      description: "I applied machine learning to network-testing workflows and built tools for working with proprietary technical data.",
      highlights: [
        "Implemented and deployed reinforcement learning to tune equalizer parameters, reducing bit error rate from 10⁻⁷ to 10⁻¹⁰ in 1.6 Tbps network-testing workflows.",
        "Developed a RAG application using Gemma 3 to query proprietary data for advanced network testing."
      ],
      tags: ["Reinforcement learning", "RAG", "Gemma 3", "Python"]
    },
    fiserv: {
      eyebrow: "Fiserv · Noida, India",
      title: "Software Developer",
      period: "Oct 2017–Jul 2024",
      description: "I worked on merchant products, large-scale cloud systems, and data security across several years at Fiserv.",
      highlights: [
        "Developed multi-menu inventory management for Clover POS, supporting time-based menus and DoorDash and UberEats integrations.",
        "Built a Google Cloud platform to ingest and validate 300M+ records weekly for Do-Not-Call compliance, and led a migration from a monolith to Kubernetes microservices that enabled weekly deployments.",
        "Developed a database encryption framework for PII and payment-card data, adopted across 120+ applications and integrated into CI/CD pipelines."
      ],
      tags: ["Java", "Google Cloud", "Kubernetes", "Microservices", "Data security"]
    }
  }
};

export default portfolioData;
