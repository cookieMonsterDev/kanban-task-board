import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import {
  Editor,
  TaskEditorContainer,
  TitleInput,
  ToolBar,
} from "./TaskEditor.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { useAppDispatch } from "../../hooks/storeHooks";
import { TaskEditorProps } from "./TaskEditor.types";

const TaskEditor = ({ id, title, content }: TaskEditorProps) => {
  const dispatch = useAppDispatch();
  const [head, setHead] = useState(title ? title : "");
  const [body, setBody] = useState(content ? content : "");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  };

  // const handleClose = () => dispatch();

  const handleDelete = () => {};

  const handleSave = () => {
    const task = {
      id: crypto.randomUUID(),
      title: head ? head : "Title",
      content: body,
    };

    console.log(task);
  };

  return (
    <TaskEditorContainer>
      <ToolBar>
        <SaveIcon onClick={handleSave} />
        {id && <DeleteIcon />}
        <CloseIcon  />
      </ToolBar>
      <TitleInput
        placeholder="Title"
        value={head}
        onChange={(e) => setHead(e.target.value)}
      />
      <Editor theme="snow" value={body} onChange={setBody} modules={modules} />
    </TaskEditorContainer>
  );
};

export default TaskEditor;
