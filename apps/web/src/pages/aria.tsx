import { Layout } from 'ui';
import * as ARIAViews from '../aria';
import { renderViews } from 'helpers';

const Page = () => {
  return <Layout>{renderViews(ARIAViews)}</Layout>;
};

export default Page;
