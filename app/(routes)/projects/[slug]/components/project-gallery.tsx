import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  return (
    <div>
      <h2 className='text-center pt-8 pb-10 font-roboto-mono'> Gallery</h2>

      <div className='grid gap-4 md:grid-cols-2'>
        {images.map((image, index) => (
          <div key={index} className='overflow-hidden'>
            <Image
              src={image}
              alt={`image_${index}`}
              width={1000}
              height={1000}
              className='w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
