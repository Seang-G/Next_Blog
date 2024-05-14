import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark"
import { deepCopy } from "../../lib/deepCopy";

export const mdComponents = {
  ul: ({node, ...props}) => <ul className="list-disc" {...props} />,
  ol: ({node, ...props}) => <ol className="list-decimal" {...props} />,
  a: ({node, ...props}) => <a className='text-blue-400 underline cursor-pointer hover:font-bold' {...props} />,
  blockquote: ({children, ...props}) => <blockquote className='pl-5 pb-5 border-l-2 border-l-gray-600' {...props}>{children}</blockquote>,
  pre: ({children, ...props}) => <pre className='bg-gray-700 border-gray-500 border-2 p-5 rounded-md'>{children}</pre>,
  code: ({children, className, node, ...props}) => {
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <SyntaxHighlighter
        {...props}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        language={match[1]}
        style={style}
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    )
  },
  table: ({children, style, ...props}) => <table style={style} className='w-full border-collapse border border-gray-200'>{children}</table>,
  thead: ({children, style, ...props}) => <thead style={style} className='bg-gray-800'>{children}</thead>,
  tr: ({children, style, ...props}) => <tr style={style} className='even:bg-white even:bg-opacity-10 '>{children}</tr>,
  th: ({children, style, ...props}) => <th style={style} className='border border-gray-200 px-4 py-2'>{children}</th>,
  td: ({children, style, ...props}) => <td style={style} className='border border-gray-200 px-4 py-2'>{children}</td>,
}