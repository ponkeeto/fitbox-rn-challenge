
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
  export interface usersType {
    users: User[];
    addUser: (user: User) => void;
  }

  export interface photoType {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
  }

  export interface postsType {
    userId: number,
    id: number,
    title: string,
    body: string,
  }