const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
			},
			{
				protocol: "https",
				hostname: "icons.veryicon.com",
			},
			{
				protocol: "https",
				hostname: "www.svgrepo.com",
			},
			{
				protocol: "https",
				hostname: "registry.npmmirror.com",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
		],
	},
};

export default nextConfig;
