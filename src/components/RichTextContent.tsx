import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-bold mb-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-bold mb-3">{children}</h3>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <img
        src={`https:${node.data.target.fields.file.url}`}
        alt={node.data.target.fields.description || ''}
        className="my-4 rounded-lg"
      />
    ),
  }
};

const RichTextContent = ({ content }: { content: Document }) => {
  return <>{documentToReactComponents(content, renderOptions)}</>;
};

export default RichTextContent;
