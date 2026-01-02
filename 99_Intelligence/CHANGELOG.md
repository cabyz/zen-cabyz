# Changelog

## [2026-01-02] - Cabyz Home Migration
- Migrated core marketing home page from legacy Next.js implementation to React Router 7.
- Refactored dynamic imports to use `lazy` and `Suspense` for Vite compatibility.
- Implemented placeholder components for 3D and interactive elements (Spline, Orbit, Carousel).
- Standardized typography and shadows in `app.css`.
- Synchronized design tokens with Zinc-950 aesthetic.
- Verified production build successfully.
- Reconfigured and re-deployed under standard `cabyz-zen` name on Coolify (UUID: `j400o4ckcwoo48gg4go80sco`).
- Reverted to generic Zen Monorepo settings (root build/start scripts) per USER preference for original `zen-monolith` behavior.
- Task concluded with `zen done` protocol.
- **[HOTFIX]** Fixed `coolify-manager.sh` bug where `base_dir` was not passed during resource creation.
- Realigned `deploy.json` to use identity `zen` and anchored to new UUID `cogw0gook8sck4cwocc4kwsg`.
- Triggered successful ship sequence for `zen` node using filtered monorepo build commands.
