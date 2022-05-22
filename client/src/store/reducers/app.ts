import { AnyAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./../ActionTypes";

export type AppState = {
    token: string;
	isLoggedIn: boolean;
	openLostConnectAlert: boolean;
};

export const inititalState: AppState = {
	token: "",
	isLoggedIn: false, 
	openLostConnectAlert: false,
};

export function reduce(
	state: AppState = inititalState,
	action: AnyAction,
):  AppState {
	switch (action.type) {
	case ActionTypes.APP__CHANGE_OPEN_LOST_CONNECT_ALERT:
		return { ...state, openLostConnectAlert: action.payload };
		
	default: 
		return state;
	}
}