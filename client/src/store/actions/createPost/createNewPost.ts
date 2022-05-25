import { Hashtag } from "../../../components/Post/CreatePost/NewPostDialog";
import { ActionTypes } from "../../ActionTypes";
import { Action, AppThunkAction } from "../../store";

interface PostData {
	token: string;
    content: string;
    tags: Hashtag[];
    image: any;
}

export function createNewPost(
	postData: PostData
): AppThunkAction<Action<PostData>, unknown> {
	return (dispatch) => {
		const authToken = `Bearer ${postData.token}`;
		const formData = new FormData();
		formData.append("content", postData.content);
		postData.tags.map((tag, index) => {
			formData.append(`tags[${index}]`, `${tag.label}`);
		});
		if (postData.image !== null) {
			formData.append("image", postData.image);
		}

		console.log(formData);
		console.log(postData);

		fetch("http://127.0.0.1:8000/api/post/create", {
			method: "POST",
			mode: "cors",
			headers: {
				"Accept": "application/json",
				"Authorization": authToken,
			},
			body: formData,
		}).then(res => {
			console.log(res.status);
			return res.json();
		}).then(data => {
			console.log(data);
		});
	};
}
