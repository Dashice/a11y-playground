import { Layout } from 'ui';
import * as SemanticViews from '../semantics';
import { renderViews } from 'helpers';

const Page = () => {
  return <Layout>{renderViews(SemanticViews)}</Layout>;
};

export default Page;
