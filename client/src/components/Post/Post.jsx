import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  display: "flex",
  flexDirection:"row",
  alignItems:"center",
  width: 500,
  height: 100,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddCircleIcon aria-label="tapez pour inscrire votre demande" />
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tapez votre message ,pour avoir de l'aide ou en pour proposer de
            l'aide :
          </Typography>
          <input
            sx={style2}
            id="type de message"
            label="type: "
            type="text"
            placeholder="tapez le type de votre message"
            aria-label="tapez le type de votre message"
            
          />
          <input
            sx={style2}
            id="Message : "
            label="Message"
            type="text"
             placeholder="tapez votre demande"
            aria-label="tapez votre demande"
          />
        </Box>
      </Modal>
    </div>
  );
}
