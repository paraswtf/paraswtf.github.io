import React from "react";

import { NextSeo } from "next-seo";

export default function SEO({ title, description, ogImageUrl }: any) {
	return (
		<div>
			<NextSeo
				title={title}
				description={description}
				openGraph={{
					url: "https://styxo.codes",
					title: title,
					description: description,
					images: [
						{
							url: ogImageUrl,
							width: 800,
							height: 600,
							alt: "Og Image Alt",
							type: "image/jpeg"
						},
						{
							url: ogImageUrl,
							width: 900,
							height: 800,
							alt: "Og Image Alt Second",
							type: "image/jpeg"
						},
						{ url: ogImageUrl },
						{ url: ogImageUrl }
					],
					site_name: title
				}}
				twitter={{
					handle: "@paraswtf",
					site: "https://styxo.codes",
					cardType: "summary_large_image"
				}}
			/>
		</div>
	);
}
