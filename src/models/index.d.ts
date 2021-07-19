import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Post {
  readonly id: string;
  readonly user_name?: string;
  readonly user_avatar?: string;
  readonly text?: string;
  readonly Author?: Author;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Author {
  readonly id: string;
  readonly user_name?: string;
  readonly user_avatar?: string;
  readonly UserComment?: (UserComment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class UserComment {
  readonly id: string;
  readonly user_name?: string;
  readonly user_avatar?: string;
  readonly media_upload_url?: string;
  readonly comment_text?: string;
  readonly Post?: Post;
  readonly authorID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserComment>);
  static copyOf(source: UserComment, mutator: (draft: MutableModel<UserComment>) => MutableModel<UserComment> | void): UserComment;
}