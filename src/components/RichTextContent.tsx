
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-xl font-bold mb-4 mt-4">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-lg font-bold mb-2 mt-4">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-base font-bold mb-2 mt-4">{children}</h6>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={`https:${node.data.target.fields.file.url}`}
        alt={node.data.target.fields.description || ''}
        className="my-8 rounded-lg w-full max-w-3xl mx-auto"
      />
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </a>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="font-bold">{text}</strong>
    ),
    [MARKS.ITALIC]: (text) => (
      <em className="italic">{text}</em>
    ),
    [MARKS.UNDERLINE]: (text) => (
      <span className="underline">{text}</span>
    ),
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
        {text}
      </code>
    ),
  },
};

const RichTextContent = ({ content }: { content: Document }) => {
  return <div className="max-w-none">{documentToReactComponents(content, renderOptions)}</div>;
};

export default RichTextContent;
