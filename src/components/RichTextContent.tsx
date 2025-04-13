
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

// Define render functions separately to avoid esbuild issues with JSX in computed properties
const renderBold = (text) => <strong className="font-bold">{text}</strong>;
const renderItalic = (text) => <em className="italic">{text}</em>;
const renderUnderline = (text) => <span className="underline">{text}</span>;
const renderCode = (text) => (
  <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
    {text}
  </code>
);

const renderParagraph = (node, children) => (
  <p className="mb-6 leading-relaxed">{children}</p>
);
const renderHeading1 = (node, children) => (
  <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
);
const renderHeading2 = (node, children) => (
  <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>
);
const renderHeading3 = (node, children) => (
  <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>
);
const renderHeading4 = (node, children) => (
  <h4 className="text-xl font-bold mb-4 mt-4">{children}</h4>
);
const renderHeading5 = (node, children) => (
  <h5 className="text-lg font-bold mb-2 mt-4">{children}</h5>
);
const renderHeading6 = (node, children) => (
  <h6 className="text-base font-bold mb-2 mt-4">{children}</h6>
);
const renderEmbeddedAsset = (node) => (
  <img
    src={`https:${node.data.target.fields.file.url}`}
    alt={node.data.target.fields.description || ''}
    className="my-8 rounded-lg w-full max-w-3xl mx-auto"
  />
);
const renderUlList = (node, children) => (
  <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
);
const renderOlList = (node, children) => (
  <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
);
const renderListItem = (node, children) => (
  <li className="mb-1">{children}</li>
);
const renderQuote = (node, children) => (
  <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">
    {children}
  </blockquote>
);
const renderHr = () => <hr className="my-8 border-gray-200" />;
const renderHyperlink = (node, children) => (
  <a
    href={node.data.uri}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 underline"
  >
    {children}
  </a>
);

const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: renderBold,
    [MARKS.ITALIC]: renderItalic,
    [MARKS.UNDERLINE]: renderUnderline,
    [MARKS.CODE]: renderCode,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [BLOCKS.HEADING_1]: renderHeading1,
    [BLOCKS.HEADING_2]: renderHeading2,
    [BLOCKS.HEADING_3]: renderHeading3,
    [BLOCKS.HEADING_4]: renderHeading4,
    [BLOCKS.HEADING_5]: renderHeading5,
    [BLOCKS.HEADING_6]: renderHeading6,
    [BLOCKS.EMBEDDED_ASSET]: renderEmbeddedAsset,
    [BLOCKS.UL_LIST]: renderUlList,
    [BLOCKS.OL_LIST]: renderOlList,
    [BLOCKS.LIST_ITEM]: renderListItem,
    [BLOCKS.QUOTE]: renderQuote,
    [BLOCKS.HR]: renderHr,
    [INLINES.HYPERLINK]: renderHyperlink,
  },
};

const RichTextContent = ({ content }: { content: Document }) => {
  return <div className="max-w-none">{documentToReactComponents(content, renderOptions)}</div>;
};

export default RichTextContent;
