import { Layout } from 'ui';
import * as Concepts from '../concepts';
import { renderViews } from 'helpers';

const Page = () => {
  return <Layout>{renderViews(Concepts)}</Layout>;
};

export default Page;
