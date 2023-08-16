interface ProjectOutlineProps {
  data: {
    challenge: {
      title: string;
      description: string;
    };
    goal: {
      title: string;
      description: string;
    };
    result: {
      title: string;
      description: string;
    };
  };
}

export const ProjectOutline: React.FC<ProjectOutlineProps> = ({ data }) => {
  const { challenge, goal, result } = data;
  return (
    <div className='grid gap-4 lg:grid-cols-3'>
      {/* Challenge */}
      <div className='grid items-start p-4 md:p-6 lg:p-8 rounded-lg bg-cod-gray-1 xl:h-[300px]'>
        <div className='flex items-center justify-between mb-12'>
          <h3 className='font-roboto-mono'>Challenge</h3>
        </div>
        <div className='xl:self-end'>
          <h4 className='mb-2 text-xl'>{challenge.title}</h4>
          <p className='text-base text-t-gray'>{challenge.description}</p>
        </div>
      </div>

      {/* Goal */}
      <div className='grid items-start p-4 md:p-6 lg:p-8 rounded-lg bg-cod-gray-1 xl:h-[300px]'>
        <div className='flex items-center justify-between mb-12'>
          <h3 className='font-roboto-mono'>Goal</h3>
        </div>
        <div className='xl:self-end'>
          <h4 className='mb-2 text-xl'>{goal.title}</h4>
          <p className='text-base text-t-gray'>{goal.description}</p>
        </div>
      </div>

      {/* Result */}
      <div className='grid items-start p-4 md:p-6 lg:p-8 rounded-lg bg-cod-gray-1 xl:h-[300px]'>
        <div className='flex items-center justify-between mb-12'>
          <h3 className='font-roboto-mono'>Result</h3>
        </div>
        <div className='xl:self-end'>
          <h4 className='mb-2 text-xl'>{result.title}</h4>
          <p className='text-base text-t-gray'>{result.description}</p>
        </div>
      </div>
    </div>
  );
};
