import { LucideIcon } from "lucide-react";
type IAuthor = {
  id: string;
  name: string;
  email: string;
  activeStaus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

type IComment = {
  id: string;
  authorId: string;
  content: string;
  postId: string;
  status: string;
  createAt: string;
  updateAt: string;
  length?: number;
};
export type IPost = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  status: string;
  tags: string[];
  views: number;
  createAt: string;
  updateAt: string;
  createdAt: string;
  updatedAt: string;
  isPremium: boolean;
  authorId: string;
  comments?: IComment;
  author?: IAuthor;
  _count?: {
    comments: number;
  };
};

// User Response convert typescript
type IUser = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    activeStatus: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    profile: {
      id: string;
      profilePhoto: string;
      bio: string | null;
      userId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
  };
};

export type NavbarProps = {
  user: IUser;
};

export type ISidebarMenu = {
  label: string;
  href: string;
  icon: LucideIcon;
};
