import { Fragment } from 'react';
import type { ViewProps } from '.';
import { tw } from 'helpers';

export const View = ({
  children,
  difficulty,
  title,
  description,
  challenge,
}: ViewProps) => {
  return (
    <div
      className="w-full snap-start flex flex-col"
      style={{ height: 'calc(100vh - 3rem)' }}
    >
      <div className="flex-1 m-4 p-4 bg-gray-950 rounded-xl flex flex-col gap-4">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="text-gray-300 text-2xl">{title}</h2>
            <p className="text-gray-400 max-w-3xl">{description}</p>
            {challenge && (
              <p className="text-gray-400 max-w-3xl mt-4 text-sm">
                <b>Challenge:</b> {challenge}
              </p>
            )}
          </div>
          <div className="flex gap-2 items-center me-2 mt-1.5">
            <p className="text-gray-400 text-sm me-3">
              {difficulty === 1 && 'Beginner'}
              {difficulty === 2 && 'Intermediate'}
              {difficulty === 3 && 'Expert'}
              {difficulty === 'secret' && 'Secret'}
            </p>
            {typeof difficulty === 'number' &&
              [...Array(difficulty)].map((_, index) => (
                <div
                  key={index}
                  className={tw(
                    'rounded-full w-3 h-3',
                    difficulty === 1 && 'bg-blue-500',
                    difficulty === 2 && 'bg-yellow-500',
                    difficulty === 3 && 'bg-red-500'
                  )}
                />
              ))}
            {difficulty === 'secret' && (
              <Fragment>
                <div className="rounded-full w-3 h-3 bg-slate-500" />
                <div className="rounded-full w-3 h-3 bg-slate-400" />
                <div className="rounded-full w-3 h-3 bg-slate-300" />
              </Fragment>
            )}
          </div>
        </div>
        <div className="flex-1 flex gap-32 items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
