import { useEffect, useState } from 'react';

type OS = 'MacOS' | 'Windows' | 'Linux' | undefined;

/**
 * Lol. Do not use this in your projects.
 * This hook is using the bare minimum logic to determine OS.
 * It's not even close to being accurate.
 */
export const useOS = () => {
  const [os, setOS] = useState<OS>();

  useEffect(() => {
    let detectedOS: OS;

    if (navigator.appVersion.indexOf('Mac') != -1) detectedOS = 'MacOS';
    if (navigator.appVersion.indexOf('Win') != -1) detectedOS = 'Windows';
    if (navigator.appVersion.indexOf('Linux') != -1) detectedOS = 'Linux';

    setOS(detectedOS);
  }, []);

  return os;
};
