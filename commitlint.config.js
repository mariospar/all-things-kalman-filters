module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "style",
        "perf",
        "prune",
        "fix",
        "quickfix",
        "feature",
        "docs",
        "deploy",
        "ui",
        "init",
        "test",
        "security",
        "iphone",
        "clown-face",
        "osx",
        "egg",
        "see-no-evil",
        "camera-flash",
        "experiment",
        "seo",
        "k8s",
        "types",
        "seed",
        "flags",
        "animation",
        "wastebasket",
        "passport-control",
        "adhesive-bandage",
        "monocle-face",
        "coffin",
        "test-tube",
        "necktie",
        "stethoscope",
        "bricks",
        "technologist",
      ],
    ],
  },
};