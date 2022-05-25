import NotifyDialog from "./NotifyDialog/NotifyDialog";

export enum DialogContentType {
    NONE = 0,
    // CONFIRM_DIALOG = 1,
    // SUCCESSFULL_DIALOG = 2,
    // ERROR_DIALOG = 3,
    // WARN_DIALOG = 4,
    NOTIFY_DIALOG = 5,
}
  
export const DialogContents = {
	[DialogContentType.NONE]: <></>,
	[DialogContentType.NOTIFY_DIALOG]: <NotifyDialog />
};