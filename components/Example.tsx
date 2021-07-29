import { FC, useEffect, useRef, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { CopyToClipboard } from "react-copy-to-clipboard";
export type ExampleProps = {
  title: string;
  text?: string;
  link?: {
    href: string;
    text: string;
  };
};

const Example: FC<ExampleProps> = (props) => {
  const { link, title, text, children } = props;
  const codeRef = useRef<HTMLDivElement>(null);
  const [copy, setCopy] = useState<string | boolean>(false);
  useEffect(() => {
    if (typeof copy === "string") {
      setInterval(() => {
        setCopy(false);
      }, 5000);
    }
  }, [copy]);
  return (
    <section className='py-6 space-y-6 border-b-2'>
      <header className='mb-6 '>
        <h1 className='mb-2 text-2xl font-bold'>{title}</h1>

        {link && (
          <a
            className='text-blue-400'
            target='_blank'
            href={link.href}
            rel='noopener noreferrer'>
            {link.text}
          </a>
        )}
      </header>
      <div className='p-6 border rounded' ref={codeRef}>
        {children}
      </div>
      <Highlight {...defaultProps} code={text} language='markup'>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} px-4 overflow-x-auto relative rounded`}
            style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
            <CopyToClipboard text={text} onCopy={() => setCopy("Copied")}>
              <button
                data-clipboard-text={text}
                className='absolute px-4 py-3 font-bold bg-white rounded opacity-50 top-6 right-6 hover:opacity-100'>
                {typeof copy === "boolean" ? "Copy" : copy}
              </button>
            </CopyToClipboard>
          </pre>
        )}
      </Highlight>
    </section>
  );
};
export default Example;
