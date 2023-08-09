'use client';

export const Badge: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className='border border-t-gray rounded-[5px] bg-[rgba(255,255,255,.05)] backdrop-blur-[0.25rem] p-2 uppercase font-roboto-mono text-sm'>
      {text}
    </span>
  );
};
