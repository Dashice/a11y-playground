import { RefObject, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from '.';

const isString = (
  element: RefObject<HTMLElement> | string | null
): element is string => typeof element === 'string';

const rootId = 'portal-root';

export const Portal = <T extends HTMLElement>({
  to,
  when,
  children,
  ...rest
}: PortalProps<T>) => {
  const [target, setTarget] = useState<Element | null>(null);

  useLayoutEffect(() => {
    if (document.querySelector(`#${rootId}`)) return;

    const body = document.body;
    const element = document.createElement('div');

    element.setAttribute('id', `${rootId}`);
    body.appendChild(element);
  }, []);

  useEffect(() => {
    const typeString = isString(to);

    if (typeString || to === null) {
      const element = document.querySelector(to || `#${rootId}`);
      return setTarget(element);
    }

    setTarget(to.current);
  }, [to]);

  if (!when || !target) return null;

  return createPortal(<div {...rest}>{children}</div>, target);
};
