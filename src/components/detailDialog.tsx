import Detail from "@/components/dialogContent";
import { Dialog } from "@mui/material";

export interface InfoDialogProps {
    open: boolean;
    onClose: () => void;
    data: Movie;
}

export default function InfoDialog(props: InfoDialogProps) {
    const { onClose, open, data } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} scroll="body">
            <Detail
                data={data}
            />
        </Dialog>
    );
}
