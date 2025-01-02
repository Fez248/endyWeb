'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const videoSnippets = [
    {
      title: "Bodhiria es el MEJOR ÁLBUM del año en español y te explico por qué - Review",
      description: "Discover why 'Bodhiria' is a masterpiece in this in-depth review.",
      thumbnail: "/youtube_thumbnail_maxres.jpg",
      link: "https://www.youtube.com/watch?v=a9iekNlrdFo",
    },
    {
      title: "The Overthinker’s Anthem",
      description: "Music for when your mind won't stop racing.",
      thumbnail: "/video2.jpg",
      link: "https://www.youtube.com/watch?v=video2",
    },
    {
      title: "Ambient Dreams",
      description: "Relax and unwind with these dreamy vibes.",
      thumbnail: "/video3.jpg",
      link: "https://www.youtube.com/watch?v=video3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Head>
        <title>The Overthinker</title>
        <meta name="description" content="Explore the art and music of The Overthinker." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#f4f1ed] text-black min-h-screen">
        <nav className="flex justify-between items-center p-6 bg-[#f4f1ed] shadow-lg">
          <h1 className="text-3xl font-bold">The Overthinker</h1>
          <div className="space-x-6">
            <Link
              href="https://www.youtube.com/@ghost_endy"
              target="_blank"
              className="hover:text-gray-600">
              YouTube
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-gray-600">
              Instagram
            </Link>
            <Link
              href="https://www.tiktok.com/"
              target="_blank"
              className="hover:text-gray-600">
              TikTok
            </Link>
            <Link
              href="https://open.spotify.com/artist/2iHVgzUJwEYLY1MTMQf8X6"
              target="_blank"
              className="hover:text-gray-600">
              Música
            </Link>
            <Link href="/newsletters" className="hover:text-gray-600">
              Newsletter
            </Link>
          </div>
        </nav>

        <main className="p-6">
          <section className="text-center">
            <h2 className="text-4xl font-semibold mb-6">Welcome to The Overthinker’s World</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Dive into a realm of thoughtful music and artistic expression. Scroll through to
              explore some of the latest works.
            </p>
          </section>

          <section className="mt-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-full flex">
              {/* Left Text Section */}
              <div className="w-1/2 bg-black text-white p-6 flex flex-col justify-center">
                <h3 className="text-4xl font-bold uppercase mb-4">{videoSnippets[currentIndex].title}</h3>
                <p className="text-lg text-gray-300">{videoSnippets[currentIndex].description}</p>
              </div>

              {/* Right Thumbnail Section */}
              <div className="w-1/2 relative">
                <img
                  src={videoSnippets[currentIndex].thumbnail}
                  alt={videoSnippets[currentIndex].title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <Link
                  href={videoSnippets[currentIndex].link}
                  className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                >
                  Watch on YouTube
                </Link>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {videoSnippets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
