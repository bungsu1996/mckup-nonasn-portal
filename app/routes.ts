import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  // index("routes/views/home.tsx"),
  // index("routes/layout/home/HomeLayout.tsx"),
  layout("routes/layout/home/HomeLayout.tsx", [
    index("./routes/views/home/Index.tsx"),
    route("profil", "./routes/views/profile/Index.tsx"),
    // route("pengaturan", "./routes/pages/pengaturan.tsx"),
  ]),

] satisfies RouteConfig;

// const requireLogin = async ({ context, location }) => {
//   if (!context.auth?.user) {
//     throw redirectt({
//       to: "/login",
//       search: { redirect: location.href },
//     });
//   }
// };