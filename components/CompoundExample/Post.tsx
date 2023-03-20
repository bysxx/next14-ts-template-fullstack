import type { ReactNode } from 'react';

import Buttons from './Buttons';
import Comment from './Comment';
import Title from './Title';

interface Props {
  children: ReactNode;
}

const Post = ({ children }: Props) => {
  return <div>{children}</div>;
};

Post.Title = Title;
Post.Comment = Comment;
Post.Buttons = Buttons;

export default Post;
