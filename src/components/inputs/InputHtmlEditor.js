import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const InputHtmlEditor = (props) => {
  const { htmlContent, setHtmlContent, theme } = props || {};

  const handleEditorChange = (newValue) => {
    setHtmlContent(newValue);
  };

  return (
    <div>
      <Editor
        apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
        value={htmlContent}
        onEditorChange={handleEditorChange}
        init={{
          height: 400,
          menubar: false,
          skin: theme === "dark" ? "oxide-dark" : "oxide",
          content_css: theme === "dark" ? "dark" : "default",
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "link",
            "lists",
            "searchreplace",
            "visualblocks",
            "wordcount",
          ],
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          // ai_request: (request, respondWith) =>
          //   respondWith.string(() =>
          //     Promise.reject("See docs to implement AI Assistant")
          //   ),
        }}
      />
    </div>
  );
};

export default InputHtmlEditor;
