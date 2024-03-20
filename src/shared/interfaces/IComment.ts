import { IUser } from "./IUser";

export interface IComment {
  id: string;
  description: string;
  createdAt?: string;
  isRemoved?: boolean;
  user: IUser;
}


export interface CommentListProps {
  comments: IComment[];
  postUserId?: string;
}