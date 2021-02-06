import React, { useCallback, useMemo } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";
import { view } from '@risingstack/react-easy-state';

function ComponentSlateViewer({ content }) {
    const editor = useMemo(() => withReact(createEditor()), []);
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);

    return (
        <Slate editor={editor} value={[...content]}>
            <Editable
                style={{ whiteSpace: 'normal' }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="…"
                readOnly
            />
        </Slate >
    );
}

const ImageElement = ({ attributes, children, element }) => {
    return (
        <div {...attributes}>
            <div contentEditable={false}>
                <img
                    alt=""
                    src={element.url}
                    style={{ display: 'block', maxWidth: '100%' }}
                />
            </div>
            {children}
        </div>
    )
}

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case "block-quote":
            return <blockquote {...attributes}>{children}</blockquote>;
        case "bulleted-list":
            return <ul {...attributes}>{children}</ul>;
        case "heading-one":
            return <h1 {...attributes}>{children}</h1>;
        case "heading-two":
            return <h2 {...attributes}>{children}</h2>;
        case "list-item":
            return <li {...attributes}>{children}</li>;
        case "numbered-list":
            return <ol {...attributes}>{children}</ol>;
        case 'image':
            const props = { attributes, children, element };
            return <ImageElement {...props} />;
        case "link":
            return <a {...attributes} href={element.url} target="_blank" rel="noopener noreferrer">{children}</a>;
        default:
            return <p {...attributes}>{children}</p>;
    }
};

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.code) {
        children = <code>{children}</code>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    return <span {...attributes}>{children}</span>;
};

export default view(ComponentSlateViewer);