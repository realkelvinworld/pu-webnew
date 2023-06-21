import { StaticImageData } from "next/image";

export type postdata = {
  orderid: number;
  title: string;
  slug: { current: string };
  description: string;
  author: {
    name: string;
    slug: { current: string };
    image: any;
    bio: any;
    _ref: string;
  };
  mainImage: any;
  categories: any;
  publishedAt: string;
  content: any;
};
export type restpostdata = [
  {
    orderid: number;
    title: string;
    slug: { current: string };
    description: string;
    author: {
      name: string;
      slug: { current: string };
      image: any;
      bio: any;
      _ref: string;
    };
    mainImage: any;
    categories: any;
    publishedAt: string;
    content: any;
  }
];

export type authorDataProps = [
  {
    name: string;
    bio: any[];
    _id: string;
    image: {};
    slug: { current: string; _type: "slug" };
  }
];
export type authorDataProp = {
  name: string;
  bio: any[];
  _id: string;
  image: {};
  slug: { current: string; _type: "slug" };
};

export type memberProps = {
  id: number;
  name: string;
  title: string;
  slug: string;
  img: StaticImageData;
  twitter: string;
  portfolio: string;
  github: string;
};

export type BtnProps = {
  text: string;
  link: string;
  hideNav?: any;
};
export type formDataProps = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  contact: number;
  messageID: string;
  companyName: string;
  message: string;
  services: string;
};
export type BtnIconProps = {
  text: string;
  link: string;
  icon: JSX.Element;
  hideNav?: any;
};

export type waitlIistProps = {
  created_at?: string;
  emailaddress: string;
  firstname: string;
  id?: number;
  lastname: string;
};

//this means the wait listt can take any things so far as the value of it it a string
export type waitlistformProps = {
  emailAddress: string;
  [key: string]: string | undefined;
};
