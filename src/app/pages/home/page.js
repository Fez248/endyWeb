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
      thumbnail: "/youtube_thumbnail_maxres.jpg",
      link: "https://www.youtube.com/watch?v=video2",
    },
    {
      title: "Ambient Dreams",
      description: "Relax and unwind with these dreamy vibes.",
      thumbnail: "/youtube_thumbnail_maxres.jpg",
      link: "https://www.youtube.com/watch?v=video3",
    },
  ];

  const albumSnippets = [
    {
      title: "Bodhiria",
      description: "The Overthinker's latest album is a journey of self-discovery.",
      thumbnail: "/youtube_thumbnail_maxres.jpg",
      link: "https://www.youtube.com",
    },
    {
      title: "Bodhiria",
      description: "The Overthinker's latest album is a journey of self-discovery.",
      thumbnail: "/youtube_thumbnail_maxres.jpg",
      link: "https://www.youtube.com",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSnippets.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + videoSnippets.length) % videoSnippets.length
    );
  };

  return (
    <>
      <Head>
        <title>The Overthinker</title>
        <meta name="description" content="Explore the art and music of The Overthinker." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='snap-y snap-mandatory overflow-y-scroll h-screen'>
        <div className="bg-[#f4f1ed] text-black min-h-screen snap-start">

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

            <section className="mt-10 relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg relative">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {videoSnippets.map((video, index) => (
                    <div key={index} className="min-w-full h-[450px] flex-shrink-0 relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />

                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white px-4">
                        <h3 className="text-2xl font-semibold mb-2">{video.title}</h3>
                        <p className="text-gray-300">{video.description}</p>
                        <Link
                          href={video.link}
                          className="text-blue-400 hover:underline mt-4 inline-block">
                          Watch on YouTube
                        </Link>
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots navigation */}
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
        <section className="text-center snap-start">
          <div className='relative'>
            {albumSnippets.map((video, index) => (
              <div className='snap-start' key={index}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="inset-0 w-full h-screen object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h3 className="text-2xl font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-300">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
