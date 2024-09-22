import Image from 'next/image';

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
    
export default function Home()
{
    return (
        <div>
            <div className="bg-[#E4DBCA] h-4 w-auto"></div>
            <navbar className="flex w-[100%] h-10 bg-[#E4DBCA] text-black">
                <p className="w-2/6 text-center">Newsletter</p>
                <p className="text-xl w-2/6 text-center">THE OVERTHINKER</p>
                <list className="w-1/6 text-center">
                    <a>Y</a>
                    <a>I</a>
                    <a>T</a>
                    <a>M</a>
                </list>
                <p className="w-1/6 text-center">B</p>
            </navbar>
            <div className="w-[100%] h-[400px]">
                <Image src="/images/IMG_6143.jpeg" alt="The Overthinker" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}