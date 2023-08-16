interface ProjectDetailsProps {
  data: {
    client: string;
    timeline: string;
    services: string;
    website: string;
  };
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ data }) => {
  const { client, timeline, services, website } = data;
  return (
    <div
      id='details'
      className='max-w-[1000px] mx-auto p-8 grid gap-8 md:grid-cols-4 md:px-0 md:w-full text-center uppercase font-roboto-mono lg:flex lg:justify-between  '
    >
      <div className='text-sm lg:text-base'>
        <p className='text-t-gray mb-2'>Client</p>
        <p>{client}</p>
      </div>
      <div className='text-sm lg:text-base'>
        <p className='text-t-gray mb-2'>Timeline</p>
        <p>{timeline}</p>
      </div>
      <div className='text-sm lg:text-base'>
        <p className='text-t-gray mb-2'>Services</p>
        <p>{services}</p>
      </div>
      <div className='text-sm lg:text-base'>
        <p className='text-t-gray mb-2'>Website</p>
        <p>{website}</p>
      </div>
    </div>
  );
};
