import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="text-xl font-bold mb-4 mt-4">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="text-lg font-bold mb-2 mt-4">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="text-base font-bold mb-2 mt-4">{children}</h6>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <img
        src={`https:${node.data.target.fields.file.url}`}
        alt={node.data.target.fields.description || ''}
        className="my-8 rounded-lg w-full max-w-3xl mx-auto"
      />
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
    [INLINES.HYPERLINK]: (node: any, children: any) => (
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
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-bold">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <em className="italic">{text}</em>
    ),
    [MARKS.UNDERLINE]: (text: React.ReactNode) => (
      <span className="underline">{text}</span>
    ),
    [MARKS.CODE]: (text: React.ReactNode) => (
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