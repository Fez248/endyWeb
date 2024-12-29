'use client';

//navbar: youtube, instagram, tiktok, musica (todos sus perfiles de musica)
          //THE OVERTHINKER
          //Newsletter
          //Icono de busqueda (para sus articulos)
          //Letras negras, bg la crema del loading

//fade entre la navbar y el scroll de los videos
//ultimos videos de youtube en un scroll animado:
    //fondo de la miniatura blur expandida
    //layout para sus videos de youtube (creo que hay un widget de nextjs)
    //que vaya ciclando

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const videoSnippets = [
    {
        title: "Bodhiria es el MEJOR ÁLBUM del año en español y te explico por qué - Review",
        description: "Pendiente Descripcion",
        thumbnail: "/youtube_thumbnail_maxres.jpg",
        link: "https://www.youtube.com/watch?v=a9iekNlrdFo"
    },
    {
        title: "The Overthinker’s Anthem",
        description: "Music for when your mind won't stop racing.",
        thumbnail: "/video2.jpg",
        link: "https://www.youtube.com/watch?v=video2"
    },
    {
        title: "Ambient Dreams",
        description: "Relax and unwind with these dreamy vibes.",
        thumbnail: "/video3.jpg",
        link: "https://www.youtube.com/watch?v=video3"
    }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

      const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % videoSnippets.length);
      };

      const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + videoSnippets.length) % videoSnippets.length);
      };

      return (<>
        <Head>
          <title>The Overthinker</title>
          <meta name="description" content="Explore the art and music of The Overthinker." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
          <nav className="flex justify-between items-center p-6 bg-gray-900">
            <h1 className="text-3xl font-bold">The Overthinker</h1>
            <div className="space-x-4">
              <Link
                href="https://www.youtube.com/@ghost_endy"
                target="_blank"
                className="hover:text-gray-400">
                YouTube
              </Link>
              <Link
                href="https://open.spotify.com/artist/2iHVgzUJwEYLY1MTMQf8X6"
                target="_blank"
                className="hover:text-gray-400">
                Spotify
              </Link>
              <Link href="/newsletters" className="hover:text-gray-400">
                Newsletters
              </Link>
            </div>
          </nav>

          <main className="p-6">
            <section className="text-center">
              <h2 className="text-4xl font-semibold mb-6">Welcome to The Overthinker’s World</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Dive into a realm of thoughtful music and artistic expression. Scroll through to explore some of the latest works.
              </p>
            </section>

            <section className="mt-10 relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {videoSnippets.map((video, index) => (
                    <div key={index} className="min-w-full flex-shrink-0">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={video.thumbnail === "/youtube_thumbnail_maxres.jpg" ? 800 : 600}
                        height={video.thumbnail === "/youtube_thumbnail_maxres.jpg" ? 450 : 400}
                        className="rounded-t-lg"
                      />
                      <div className="p-4 bg-gray-800">
                        <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                        <p className="text-gray-300">{video.description}</p>
                        <Link href={video.link} className="text-blue-400 hover:underline mt-4 block">
                          Watch on YouTube
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button onClick={prevSlide} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                  &lt;
                </button>
                <button onClick={nextSlide} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                  &gt;
                </button>
              </div>
            </section>
          </main>
        </div>
      </>);
}
