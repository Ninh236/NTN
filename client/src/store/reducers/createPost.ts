import { AnyAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./../ActionTypes";

export type CreatePostState = {
	openNewPostDialog: boolean;
};

export const inititalState: CreatePostState = {
	openNewPostDialog: false,
};

export function reduce(
	state: CreatePostState = inititalState,
	action: AnyAction,
):  CreatePostState {
	switch (action.type) {
	case ActionTypes.CREATE_POST__CHANGE_OPEN_STATE: 
		return { ...state, openNewPostDialog: action.payload };
		
	case ActionTypes.CREATE_POST__CREATE_NEW_POST:
		return state;

	default: 
		return state;
	}
}