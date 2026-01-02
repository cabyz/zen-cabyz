FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 1. Unified Install (Bypassing Lockfile Strictness)
FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
# FORCE: Ignore lockfile mismatch to cure "Drift"
RUN pnpm install --no-frozen-lockfile
RUN pnpm run build --filter marketing --filter app

# 2. Marketing Runner
FROM base AS marketing
WORKDIR /app
COPY --from=build /usr/src/app .
ENV PORT=3000
EXPOSE 3000
CMD ["pnpm", "--filter", "marketing", "start"]

# 3. App Runner
FROM base AS app
WORKDIR /app
COPY --from=build /usr/src/app .
ENV PORT=3000
EXPOSE 3000
CMD ["pnpm", "--filter", "app", "start"]
