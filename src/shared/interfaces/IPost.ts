import { IHistory } from "./IHistory";
import { IComment } from "./IComment";
import { IUser } from "./IUser";

export interface IPost {
  id: string;
  title: string;
  description: string;
  user_id: string;
  imagePath?: string;
  createdAt?: string;
  views: number;
  likes: number;
  dislikes: number;
  history: IHistory[];
  comments: IComment[];
  user: IUser[];
}
