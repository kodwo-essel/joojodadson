const albums = [
  {
    id: 1,
    title: 'Aseda Nnwom',
    year: 2025,
    type: 'Single',
    image:
      'https://static.readdy.ai/image/dcd4ee38d1e8f8ef3de7e0e13f4156f1/77c519eed010a0de126c5cb67974123b.jpeg',
    url: 'https://distrokid.com/hyperfollow/joojodadson/aseda-nnwom-a-psalm-of-thanksgiving/',
  },
  {
    id: 2,
    title: 'Faithful God',
    year: 2024,
    type: 'Single',
    image:
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: '#',
  },
  {
    id: 3,
    title: 'Morning Praise',
    year: 2024,
    type: 'Single',
    image:
      'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: '#',
  },
  {
    id: 4,
    title: 'Grace Abounds',
    year: 2023,
    type: 'Single',
    image:
      'https://images.pexels.com/photos/3945701/pexels-photo-3945701.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: '#',
  },
  {
    id: 5,
    title: 'Worship Sessions Vol. 1',
    year: 2023,
    type: 'EP',
    image:
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: '#',
  }
];

export default function MusicPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-midnight mb-4">
            Music
          </h1>
          <p className="font-cormorant italic text-xl text-gray-600">
            A Growing Collection of Worship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {albums.map((album) => (
            <div key={album.id} className="group cursor-pointer">
              <a
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative w-full mb-5 overflow-hidden rounded-xl aspect-square">
                  <img
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={album.image}
                  />
                  <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <i className="ri-play-fill text-3xl text-midnight"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl transition-shadow duration-300 group-hover:shadow-xl">
                  <h3 className="font-inter text-lg font-semibold text-midnight mb-2">
                    {album.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="font-inter text-xs uppercase text-gray-500">
                      {album.year} · {album.type}
                    </p>
                    <span className="font-inter text-xs text-sky-blue flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Listen
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
