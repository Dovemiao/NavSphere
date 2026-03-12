// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tw123.eu.cc';
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`, // 如果未來有 blog
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 可再加其他重要頁面
  ];
}
