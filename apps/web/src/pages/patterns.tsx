import { Layout } from 'ui';
import * as Patterns from '../patterns';
import { renderViews } from 'helpers';

const Page = () => {
  return <Layout>{renderViews(Patterns)}</Layout>;
};

export default Page;
