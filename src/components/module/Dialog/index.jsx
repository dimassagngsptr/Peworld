import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ModalDialog = ({ btn, title, content, btnSubmit, onSubmit, loading }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(!open);

  const handleSubmit = () => {
    onSubmit && onSubmit();
    if (loading === false) {
      handleClickOpen();
    } else {
      handleClickOpen();
    }
  };
  return (
    <>
      <button onClick={handleClickOpen}>{btn}</button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClickOpen}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen}>Cancel</Button>
          <Button onClick={handleSubmit}>{btnSubmit}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalDialog;
ModalDialog.propTypes = {
  btn: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.object,
  btnSubmit: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.any,
  ]),
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};
