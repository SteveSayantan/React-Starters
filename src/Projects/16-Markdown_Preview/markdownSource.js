import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'    // This library converts markdown to html. We have to install this package separately.

function MarkDownPreview() {

  const [markdown,setMarkdown]=useState('## markdown preview')
  return <main>
    <section className="markdown">
      <textarea cols="5" rows="10" className="input" value={markdown} onChange={(e)=>setMarkdown(e.target.value)}></textarea>
    </section>
    <article className="result"><ReactMarkdown>{markdown}</ReactMarkdown></article>   {/* We just need to wrap the text with this default imported component like this */}
  </main>

}

// Checkout the css file to understand how the output (html) has been styled.

export default MarkDownPreview;
