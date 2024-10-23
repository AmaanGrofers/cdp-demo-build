import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import PropTypes from "prop-types";

SQLEditor.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

function SQLEditor({ query, setQuery }) {
  const onChange = (newValue) => {
    setQuery(newValue);
  };

  return (
    <main>
      <label htmlFor="editor">
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          theme="textmate"
          name="editor"
          fontSize={12}
          minLines={15}
          maxLines={15}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your Query here..."
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 2,
          }}
          query={query}
          onChange={onChange}
          showLineNumbers
        />
      </label>
    </main>
  );
}

export default SQLEditor;
