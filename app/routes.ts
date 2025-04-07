import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout/home/HomeLayout.tsx", [
    index("./routes/views/home/Index.tsx"),
    // route("profil", "./routes/views/profile/Index.tsx"), // children route untuk layout ini
  ]),

] satisfies RouteConfig;