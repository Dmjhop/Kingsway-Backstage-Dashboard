/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.planningcenteronline.com",
      "s3.amazonaws.com",
      "ik.imagekit.io",
      "services.planningcenteronline.com",
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
}

export default nextConfig
