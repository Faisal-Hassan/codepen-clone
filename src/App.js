
import Editor from './Editor'
import React, { useState, useEffect } from "react"

import useLocalStorage from "./hooks/useLocalStorage"


function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setsrcDoc] = useState("");


  useEffect(() => {
    const timeout = setTimeout(() => {

      setsrcDoc(`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>`
      )
     
    }, 250);
 
    return () => clearTimeout(timeout);
  }, [html, css, js, /* Source document function call so that the site responds again to new code changes */]);

  return (
        <div className="App">
          <div className="pane top-pane">
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setJs}
            />
          </div>

          <div className="panes">
            <iframe
              srcDoc={srcDoc}
              title="output"
              className="CodeMirror"
              sandbox="allow-scripts"
              // frameBorder="0"
              width="100%"
              height="100%"
            /*sandbox option*/
            /*frameBorder option*/
            /*width-height option*/
            /*Title option*/
            ></iframe>
          </div>
        </div>
      );
    }

export default App;
