import { index, route } from "@react-router/dev/routes";
export default [
    index("routes/_index.tsx"),
    route("showcase/narrative", "routes/showcase.narrative.tsx"),
    route("showcase/simulated", "routes/showcase.simulated.tsx"),
    route("showcase/editorial", "routes/showcase.editorial.tsx"),
];
