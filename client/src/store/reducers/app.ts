import { AnyAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./../ActionTypes";

enum Time {
	ONE_MIN = 60 * 1000,
	ONE_HOUR = 60 * 60 * 1000,
	ONE_DAY = 24 * 60 * 60 * 1000,
}

export type AppState = {
	userId: number;
	username: string;
    token: string;
	isLoggedIn: boolean;
	openLostConnectAlert: boolean;
};

export const inititalState: AppState = {
	userId: 0,
	username: "",
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
	
	case ActionTypes.APP__SAVE_USER_DATA_IN_COOKIES: {
		const expireDate = new Date(new Date().getTime() + Time.ONE_HOUR).toUTCString();
		document.cookie = `userId=${action.payload.user.id}; SameSite=Strict;  expires=${expireDate};`;
		document.cookie = `username=${action.payload.user.username}; SameSite=Strict; expires=${expireDate};`;
		document.cookie = `token=${action.payload.token}; SameSite=Strict; expires=${expireDate};`;
		console.log({
			...state,
			userId: action.payload.user.id,
			username: action.payload.user.username,
			token: action.payload.token,
			isLoggedIn: true,
		});
		return {
			...state,
			userId: action.payload.user.id,
			username: action.payload.user.username,
			token: action.payload.token,
			isLoggedIn: true,
		};
	}

	case ActionTypes.APP__FIND_USER_DATA_IN_COOKIES: {
		if (document.cookie === "") 
			return state;
		else {
			const userData = document.cookie.split(";").map(str => str.trim());
			return {
				...state,
				userId: +userData[0].replace("userId=", ""),
				username: userData[1].replace("username=", ""),
				token: userData[2].replace("token=", ""),
				isLoggedIn: true,
			};
		}
	}

	case ActionTypes.APP__LOGOUT_AND_DELETE_COOKIES: {
		const expireDate = new Date(0).toUTCString();
		document.cookie = `userId=${state.userId}; SameSite=Strict;  expires=${expireDate};`;
		document.cookie = `username=${state.username}; SameSite=Strict; expires=${expireDate};`;
		document.cookie = `token=${state.token}; SameSite=Strict; expires=${expireDate};`;
		return {
			...state,
			userId: 0,
			username: "",
			token: "",
			isLoggedIn: false,
		};
	}

	default: 
		return state;
	}
}