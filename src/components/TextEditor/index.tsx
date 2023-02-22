import { useFormik } from "formik";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  addTask,
  closeWindow,
  deleteTask,
} from "../../store/boardSlice/boardSlice";
import "react-quill/dist/quill.snow.css";
import {
  ButtonWrapper,
  Editor,
  TaskEditorContainer,
  TitleInput,
  ToolBar,
} from "./TaskEditor.styled";

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

const TaskEditor = () => {
  const { id, title, content, columnName } = useAppSelector(
    (state) => state.board.currentTask
  );
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(closeWindow());

  const handleDelete = () => dispatch(deleteTask({ columnName, taskId: id }));

  useEffect(() => {
    formik.setValues({
      id: "",
      title: title ? title : "",
      content: content ? content : "",
    });
  }, [id]);

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      if (id) {
        console.log("update");
        return;
      }

      dispatch(addTask({
        ...values,
        id: crypto.randomUUID()
      }))
    },
  });

  return (
    <TaskEditorContainer>
      <form onSubmit={formik.handleSubmit}>
        <ToolBar>
          <ButtonWrapper type="submit">
            <SaveIcon />
          </ButtonWrapper>
          {id && <DeleteIcon onClick={handleDelete} />}
          <CloseIcon onClick={handleClose} />
        </ToolBar>
        <TitleInput
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <Editor
          theme="snow"
          modules={modules}
          onChange={(e) => formik.setFieldValue("content", e)}
          value={formik.values.content}
        />
      </form>
    </TaskEditorContainer>
  );
};

export default TaskEditor;
