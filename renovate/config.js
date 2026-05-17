module.exports = {
  extends: ["helpers:pinGitHubActionDigests"],
  packageRules: [
    {
      matchManagers: ["github-actions"],
      matchPackageNames: ["msdeleyto/gh-actions"],
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
