export type UpcomingEventsListT = {
  time: Date;
  title: string;
  slug: `${string | number}-${string | number}`;
  bgImageUrl: string;
  id: number | string;
};

export type PopularDestinationsListT = {
  title: string;
  slug: `${string | number}-${string | number}`;
  bgImageUrl: `https://${string}`;
};

export const upcomingEventsList: UpcomingEventsListT[] = [
  {
    time: new Date(Date.now() + 24 * 1000 * 10),
    bgImageUrl:
      'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Ffeast-of-holy-cross-shrine-1721215029_b71f086854673d8fd02e.webp&w=640&q=75',
    title: 'Feast of Holy Cross Shrine',
    slug: 'feast-of-holy-cross-shrine',
    id: Math.random(),
  },
  {
    time: new Date(Date.now() + 24 * 1000 * 10),
    bgImageUrl:
      'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fneelamperoor-padayani-1713958934_2e25d9bc7b22d3955b1c.webp&w=640&q=75',
    title: 'Neelamperorr Padayani',
    slug: 'neelamperorr-padayan',
    id: Math.random(),
  },
];

export const popularDestinationsList: PopularDestinationsListT[] = [
  {
    title: 'Bekal Fort',
    slug: 'bekal-fort',
    bgImageUrl:
      'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fbekal-fort-1723618974_50a0a3fc7d65eb9da109.webp&w=640&q=75',
  },
  {
    title: 'Periyar Tiger Reserve',
    slug: 'tiger-reserve',
    bgImageUrl:
      'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fperiyar-tiger-reserve-1723525338_7416b3b102aedc51ef7e.webp&w=640&q=75',
  },
  {
    title: 'Kumarakom',
    slug: 'kumarakom-0',
    bgImageUrl:
      'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fkumarakom-1724149503_97cbfb72f3df1c77c0b5.webp&w=640&q=75',
  },
];
