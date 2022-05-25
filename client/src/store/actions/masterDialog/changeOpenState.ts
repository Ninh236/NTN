import { DialogContentType } from "./../../../components/MasterDialog/DialogContent";
import { ActionTypes } from "../../ActionTypes";
import { Action, AppThunkAction } from "../../store";

export function changeOpenState(
	open: boolean, 
	type: DialogContentType = DialogContentType.NONE
): AppThunkAction<Action<object>, unknown> {
	return (dispatch) =>
		dispatch({
			type: ActionTypes.MASTER_DIALOG__CHANGE_OPEN_STATE,
			payload: { open: open, type: type },
		});
}
