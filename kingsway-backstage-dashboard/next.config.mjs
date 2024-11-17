/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.planningcenteronline.com",
      "s3.amazonaws.com",
      "ik.imagekit.io",
      "services.planningcenteronline.com",
      "openweathermap.org",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "s3.amazonaws.com",
    //     port: "",
    //     pathname: "/planning_center_production/**",
    //   },
    // ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "https://api.planningcenteronline.com",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "'http://localhost:3000", // Set your origin
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET, POST, PUT, DELETE, OPTIONS",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value: "Content-Type, Authorization",
  //         },
  //       ],
  //     },
  //   ]
  // },
}

export default nextConfig
