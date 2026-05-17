module.exports = {
  globalExtends: ["config:best-practices"], // https://docs.renovatebot.com/presets-config/#configbest-practices
  packageRules: [
    {
      matchManagers: ["github-actions"],
      matchDepNames: [
        "msdeleyto/gh-actions/.github/actions/publish-docker-image",
        "msdeleyto/gh-actions/.github/workflows/renovate.yaml",
      ],
      pinDigests: false,
    },
  ],
  repositories: [
    "msdeleyto/common-jobs",
    "msdeleyto/gh-actions",
    "msdeleyto/homelab-manifests",
    "msdeleyto/qbittorrent-docker",
    "msdeleyto/slskd-docker",
  ],
};
