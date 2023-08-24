type About = {
  id: number;
  title: string;
  content: string;
};

type Assets = {
  id: number;
  url: string;
};

type Volunteers = {
  id: number;
  title: string;
  content: string;
  extra: string;
  assetId: number;
  asset: {
    id: number;
    url: string;
  };
};

type Animals = {
  id: number;
  name: string;
  description: string;
  age: number;
  assetId: number;
  asset: {
    id: number;
    url: string;
  };
};
