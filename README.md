# common-jobs

Shared Renovate configuration for a small set of repositories.

## What is here
- `renovate/config.js`: shared Renovate behavior and repository allowlist
- `renovate.json`: root Renovate entrypoint
- `.github/workflows/renovate-cron.yaml`: scheduled and manual GitHub Actions trigger

## How it works
The GitHub Actions workflow calls `msdeleyto/gh-actions/.github/workflows/renovate.yaml@main`, which runs Renovate using the configuration in this repo.

## Local check
Validate the shared Renovate config loads:

```bash
node -e "require('./renovate/config.js')"
```
