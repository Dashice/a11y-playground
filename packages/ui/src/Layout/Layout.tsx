import Link from 'next/link';
import { useRouter } from 'next/router';
import type { LayoutProps } from '.';
import { tw } from 'helpers';

const navigation = [
  { title: 'Semantics', url: '/', display: true },
  { title: 'ARIA', url: '/aria', display: true },
  { title: 'Patterns', url: '/patterns', display: false },
  { title: 'Advanced Patterns', url: '/advanced-patterns', display: false },
];

export const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <div className="flex flex-col overflow-hidden">
      <header className="bg-gray-900 text-white w-full p-4">
        <div className="bg-gray-800 h-8 w-full rounded-lg flex items-center gap-8 px-8">
          {navigation
            .filter((item) => item.display)
            .map((item, index) => {
              const isCurrentPage = asPath.split('?')[0] === item.url;

              return (
                <Link
                  key={index}
                  href={item.url}
                  aria-current={isCurrentPage ? 'page' : undefined}
                  className={tw(isCurrentPage ? 'text-white' : 'text-gray-400')}
                >
                  {item.title}
                </Link>
              );
            })}
        </div>
      </header>
      <div className="top-12 snap-y snap-mandatory overflow-y-auto bg-gray-900 grid grid-cols-1 absolute h-[calc(100%-3rem)] w-full gap-4 inset-0">
        {children}
      </div>
    </div>
  );
};
