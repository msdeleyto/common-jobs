module.exports = {
  extends: ["config:best-practices"], // https://docs.renovatebot.com/presets-config/#configbest-practices
  packageRules: [
    {
      matchManagers: ["github-actions"],
      matchPackageNames: ["msdeleyto/gh-actions/**"],
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
