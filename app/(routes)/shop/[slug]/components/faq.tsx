'use client';

import { PlusCircle, MinusCircle } from 'lucide-react';

import { cn } from '@/lib/utils';
import { faq_data } from '@/mockdata/faq_data';
import { useState } from 'react';

export const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<null | number>(null);

  const toggleQuestion = (id: number) => {
    if (id === activeQuestion) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className='grid gap-4 lg:grid-cols-2'>
      <div className='flex flex-col gap-12 justify-between  bg-cod-gray-2 p-6 lg:p-12'>
        <p className='font-roboto-mono uppercase'>FAQ</p>
        <h2 className='text-2xl lg:text-3xl xl:text-5xl'>
          Common
          <br />
          Questions
        </h2>
      </div>

      {/* FAQ QUESTIONS */}
      <div className='grid gap-4'>
        {faq_data.map((item) => (
          <div
            key={item.id}
            className={cn(
              '  cursor-pointer transition-opacity',
              activeQuestion === item.id ? 'bg-mine-shaft' : 'bg-cod-gray-2'
            )}
            onClick={() => toggleQuestion(item.id)}
          >
            {/* Question */}
            <div
              className={cn(
                'relative flex items-center gap-8 justify-between z-10 p-6 md:p-8',
                activeQuestion === item.id
                  ? 'bg-mine-shaft pb-4 md:pb-4'
                  : 'pb-6 md:pb-8'
              )}
            >
              <h3>{item.question}</h3>

              <button className='relative text-t-gray w-6 h-6'>
                <PlusCircle
                  className={cn(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all',
                    activeQuestion === item.id ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <MinusCircle
                  className={cn(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all',
                    activeQuestion === item.id
                      ? 'opacity-100 text-white'
                      : 'opacity-0'
                  )}
                />
              </button>
            </div>
            <p
              className={cn(
                'lg:text-base -translate-y-full text-t-gray transition-all px-6  md:px-8 ',
                activeQuestion === item.id
                  ? 'opacity-100 h-auto translate-y-0 pt-4 z-0 -mt-4 pb-6 md:pb-8 leading-normal'
                  : 'opacity-0 h-1 -z-10 leading-[0px] '
              )}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
