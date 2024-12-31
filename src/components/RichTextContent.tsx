import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

interface RichTextContentProps {
  content: Document;
}

const RichTextContent = ({ content }: RichTextContentProps) => {
  return <div className="prose max-w-none">{documentToReactComponents(content)}</div>;
};

export default RichTextContent;