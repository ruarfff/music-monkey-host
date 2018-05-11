import ITrack from '../../playlists/ITrack'
import IUser from '../../user/IUser'
import IPregameSuggestion from './IPregameSuggestion'

const suggestions: IPregameSuggestion[] = [
  {
    user: { displayName: 'Jim Murakami' } as IUser,
    tracks: [
      {
        album: {
          images: [
            {
              url:
                'https://i.scdn.co/image/92be3249f2cd4e34f624c1f0c2dc1d806f666860'
            }
          ],
          name: 'Habibi - EP',
          release_date: '2018-05-04',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:5dfvaY29NIowd1A4gmwk63'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3IWdvItNhmdo282Wwp0CwH'
            },
            href: 'https://api.spotify.com/v1/artists/3IWdvItNhmdo282Wwp0CwH',
            id: '3IWdvItNhmdo282Wwp0CwH',
            name: 'Tamino',
            type: 'artist',
            uri: 'spotify:artist:3IWdvItNhmdo282Wwp0CwH'
          }
        ],
        disc_number: 1,
        duration_ms: 254570,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GB6TW1800049'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5yF73GP2VJ2IMcp94dMFdo'
        },
        href: 'https://api.spotify.com/v1/tracks/5yF73GP2VJ2IMcp94dMFdo',
        id: '5yF73GP2VJ2IMcp94dMFdo',
        is_local: false,
        name: 'Indigo Night',
        popularity: 31,
        preview_url:
          'https://p.scdn.co/mp3-preview/6e390eb4ff111049465b5ceacd7bf13376a9fdc4?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:5yF73GP2VJ2IMcp94dMFdo'
      } as ITrack,
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4FB0ZlyDLV9zyvtJLNmZNw'
              },
              href: 'https://api.spotify.com/v1/artists/4FB0ZlyDLV9zyvtJLNmZNw',
              id: '4FB0ZlyDLV9zyvtJLNmZNw',
              name: 'Bayuk',
              type: 'artist',
              uri: 'spotify:artist:4FB0ZlyDLV9zyvtJLNmZNw'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/29ORM2rAwrfoJzTz4By64e'
          },
          href: 'https://api.spotify.com/v1/albums/29ORM2rAwrfoJzTz4By64e',
          id: '29ORM2rAwrfoJzTz4By64e',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/e175f9a8daf628cfac8a637917c792ca91014891',
              width: 640
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/4b891c53f8b4ff15bf754fc040c89e3742adeb77',
              width: 300
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/3ae0ec4d696abb2ef6f43ecbeb8a2706df6bbfce',
              width: 64
            }
          ],
          name: 'Rage Tapes',
          release_date: '2018-05-04',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:29ORM2rAwrfoJzTz4By64e'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4FB0ZlyDLV9zyvtJLNmZNw'
            },
            href: 'https://api.spotify.com/v1/artists/4FB0ZlyDLV9zyvtJLNmZNw',
            id: '4FB0ZlyDLV9zyvtJLNmZNw',
            name: 'Bayuk',
            type: 'artist',
            uri: 'spotify:artist:4FB0ZlyDLV9zyvtJLNmZNw'
          }
        ],
        disc_number: 1,
        duration_ms: 275111,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'DECX21800226'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0CZBZbMeoxYuGHjpfMKmox'
        },
        href: 'https://api.spotify.com/v1/tracks/0CZBZbMeoxYuGHjpfMKmox',
        id: '0CZBZbMeoxYuGHjpfMKmox',
        is_local: false,
        name: 'Old June',
        popularity: 23,
        preview_url:
          'https://p.scdn.co/mp3-preview/0392c843974f2d0db00ca04a533d6ccb511d430f?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:0CZBZbMeoxYuGHjpfMKmox'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/44NX2ffIYHr6D4n7RaZF7A'
              },
              href: 'https://api.spotify.com/v1/artists/44NX2ffIYHr6D4n7RaZF7A',
              id: '44NX2ffIYHr6D4n7RaZF7A',
              name: 'Van Morrison',
              type: 'artist',
              uri: 'spotify:artist:44NX2ffIYHr6D4n7RaZF7A'
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2hpwTpq2QENZv7EAvniKDR'
              },
              href: 'https://api.spotify.com/v1/artists/2hpwTpq2QENZv7EAvniKDR',
              id: '2hpwTpq2QENZv7EAvniKDR',
              name: 'Joey DeFrancesco',
              type: 'artist',
              uri: 'spotify:artist:2hpwTpq2QENZv7EAvniKDR'
            }
          ],
          available_markets: [
            'AD',
            'AR',
            'AT',
            'AU',
            'BE',
            'BG',
            'BO',
            'BR',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'EC',
            'EE',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HU',
            'ID',
            'IE',
            'IL',
            'IS',
            'IT',
            'JP',
            'LI',
            'LT',
            'LU',
            'LV',
            'MC',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PL',
            'PT',
            'PY',
            'RO',
            'SE',
            'SG',
            'SK',
            'SV',
            'TH',
            'TR',
            'TW',
            'US',
            'UY',
            'VN',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2IeJQjP8XhVszce2kcO2j8'
          },
          href: 'https://api.spotify.com/v1/albums/2IeJQjP8XhVszce2kcO2j8',
          id: '2IeJQjP8XhVszce2kcO2j8',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/a85bd129080ae7b5d3ef25595f8e8b747da0a60e',
              width: 640
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/3c5f67cb98222da8aa173c5bee345bb1e852c262',
              width: 300
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/85fb0668caaedd8f0beb05be1eb930668b1441c3',
              width: 64
            }
          ],
          name: "You're Driving Me Crazy",
          release_date: '2018-04-27',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:2IeJQjP8XhVszce2kcO2j8'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/44NX2ffIYHr6D4n7RaZF7A'
            },
            href: 'https://api.spotify.com/v1/artists/44NX2ffIYHr6D4n7RaZF7A',
            id: '44NX2ffIYHr6D4n7RaZF7A',
            name: 'Van Morrison',
            type: 'artist',
            uri: 'spotify:artist:44NX2ffIYHr6D4n7RaZF7A'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2hpwTpq2QENZv7EAvniKDR'
            },
            href: 'https://api.spotify.com/v1/artists/2hpwTpq2QENZv7EAvniKDR',
            id: '2hpwTpq2QENZv7EAvniKDR',
            name: 'Joey DeFrancesco',
            type: 'artist',
            uri: 'spotify:artist:2hpwTpq2QENZv7EAvniKDR'
          }
        ],
        disc_number: 1,
        duration_ms: 248986,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBCQT1800002'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/24qPaPRo4VCRM70aHmqxoa'
        },
        href: 'https://api.spotify.com/v1/tracks/24qPaPRo4VCRM70aHmqxoa',
        id: '24qPaPRo4VCRM70aHmqxoa',
        is_local: false,
        name: 'Hold It Right There',
        popularity: 45,
        preview_url:
          'https://p.scdn.co/mp3-preview/cb6eb5c1d7b3bf486e1074606225a1ec03d8599f?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:24qPaPRo4VCRM70aHmqxoa'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3OsRAKCvk37zwYcnzRf5XF'
              },
              href: 'https://api.spotify.com/v1/artists/3OsRAKCvk37zwYcnzRf5XF',
              id: '3OsRAKCvk37zwYcnzRf5XF',
              name: 'Moby',
              type: 'artist',
              uri: 'spotify:artist:3OsRAKCvk37zwYcnzRf5XF'
            }
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6S5OMwB7is2WprcVNYOQHM'
          },
          href: 'https://api.spotify.com/v1/albums/6S5OMwB7is2WprcVNYOQHM',
          id: '6S5OMwB7is2WprcVNYOQHM',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/e62d98a49954759c757bc0d03aeb28df541db121',
              width: 640
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/f0b49145d034a369f5d15d951be0d915a6740886',
              width: 300
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/525e5f50831cb18891aad8804f4bc0fdccce9bf4',
              width: 64
            }
          ],
          name: 'This Wild Darkness Remixes',
          release_date: '2018-04-27',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:6S5OMwB7is2WprcVNYOQHM'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3OsRAKCvk37zwYcnzRf5XF'
            },
            href: 'https://api.spotify.com/v1/artists/3OsRAKCvk37zwYcnzRf5XF',
            id: '3OsRAKCvk37zwYcnzRf5XF',
            name: 'Moby',
            type: 'artist',
            uri: 'spotify:artist:3OsRAKCvk37zwYcnzRf5XF'
          }
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 477367,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GB3AD1800021'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/51dZVIgV494b5jOeZ3tH18'
        },
        href: 'https://api.spotify.com/v1/tracks/51dZVIgV494b5jOeZ3tH18',
        id: '51dZVIgV494b5jOeZ3tH18',
        is_local: false,
        name: 'This Wild Darkness - CYA Remix',
        popularity: 18,
        preview_url: null,
        track: true,
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:51dZVIgV494b5jOeZ3tH18'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ'
              },
              href: 'https://api.spotify.com/v1/artists/51Blml2LZPmy7TTiAg47vQ',
              id: '51Blml2LZPmy7TTiAg47vQ',
              name: 'U2',
              type: 'artist',
              uri: 'spotify:artist:51Blml2LZPmy7TTiAg47vQ'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/0pkvxc39N8K5WZMGq4hHxK'
          },
          href: 'https://api.spotify.com/v1/albums/0pkvxc39N8K5WZMGq4hHxK',
          id: '0pkvxc39N8K5WZMGq4hHxK',
          images: [
            {
              url:
                'https://i.scdn.co/image/7fdbbb3454bdd5eb22a72965e97da54de141d548'
            }
          ],
          name: 'Lights Of Home (Free Yourself / Beck Remix)',
          release_date: '2018-04-27',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:0pkvxc39N8K5WZMGq4hHxK'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ'
            },
            href: 'https://api.spotify.com/v1/artists/51Blml2LZPmy7TTiAg47vQ',
            id: '51Blml2LZPmy7TTiAg47vQ',
            name: 'U2',
            type: 'artist',
            uri: 'spotify:artist:51Blml2LZPmy7TTiAg47vQ'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3vbKDsSS70ZX9D2OcvbZmS'
            },
            href: 'https://api.spotify.com/v1/artists/3vbKDsSS70ZX9D2OcvbZmS',
            id: '3vbKDsSS70ZX9D2OcvbZmS',
            name: 'Beck',
            type: 'artist',
            uri: 'spotify:artist:3vbKDsSS70ZX9D2OcvbZmS'
          }
        ],
        disc_number: 1,
        duration_ms: 230629,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBUM71800174'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/1VQjrafxqkoBXRcaFdqom6'
        },
        href: 'https://api.spotify.com/v1/tracks/1VQjrafxqkoBXRcaFdqom6',
        id: '1VQjrafxqkoBXRcaFdqom6',
        is_local: false,
        name: 'Lights Of Home - Free Yourself / Beck Remix',
        popularity: 58,
        preview_url:
          'https://p.scdn.co/mp3-preview/486a0894841315b5bbfb05e787fb372f608f577c?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1VQjrafxqkoBXRcaFdqom6'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5YHCN15OUsjGAg1az5m818'
              },
              href: 'https://api.spotify.com/v1/artists/5YHCN15OUsjGAg1az5m818',
              id: '5YHCN15OUsjGAg1az5m818',
              name: 'Catrin Finch',
              type: 'artist',
              uri: 'spotify:artist:5YHCN15OUsjGAg1az5m818'
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3iT2a4ug1Z4miaWS0HINdc'
              },
              href: 'https://api.spotify.com/v1/artists/3iT2a4ug1Z4miaWS0HINdc',
              id: '3iT2a4ug1Z4miaWS0HINdc',
              name: 'Seckou Keita',
              type: 'artist',
              uri: 'spotify:artist:3iT2a4ug1Z4miaWS0HINdc'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/2s5WYOg1fezE42u6X0GqJc'
          },
          href: 'https://api.spotify.com/v1/albums/2s5WYOg1fezE42u6X0GqJc',
          id: '2s5WYOg1fezE42u6X0GqJc',
          images: [
            {
              url:
                'https://i.scdn.co/image/20a4dd519f811fef027253171adae9a0be71bfc7'
            }
          ],
          name: 'SOAR',
          release_date: '2018-04-27',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:2s5WYOg1fezE42u6X0GqJc'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5YHCN15OUsjGAg1az5m818'
            },
            href: 'https://api.spotify.com/v1/artists/5YHCN15OUsjGAg1az5m818',
            id: '5YHCN15OUsjGAg1az5m818',
            name: 'Catrin Finch',
            type: 'artist',
            uri: 'spotify:artist:5YHCN15OUsjGAg1az5m818'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3iT2a4ug1Z4miaWS0HINdc'
            },
            href: 'https://api.spotify.com/v1/artists/3iT2a4ug1Z4miaWS0HINdc',
            id: '3iT2a4ug1Z4miaWS0HINdc',
            name: 'Seckou Keita',
            type: 'artist',
            uri: 'spotify:artist:3iT2a4ug1Z4miaWS0HINdc'
          }
        ],

        disc_number: 1,
        duration_ms: 365648,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBCKG1700227'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0kmF7sAZ1pL6gQO1uN5fKc'
        },
        href: 'https://api.spotify.com/v1/tracks/0kmF7sAZ1pL6gQO1uN5fKc',
        id: '0kmF7sAZ1pL6gQO1uN5fKc',
        is_local: false,
        name: 'Clarach',
        popularity: 36,
        preview_url:
          'https://p.scdn.co/mp3-preview/6f3a18bdbddbf4d5e404c027f796c02526fd383f?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:0kmF7sAZ1pL6gQO1uN5fKc'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/71eKk097AIMUOng7PAhqK8'
              },
              href: 'https://api.spotify.com/v1/artists/71eKk097AIMUOng7PAhqK8',
              id: '71eKk097AIMUOng7PAhqK8',
              name: 'theAngelcy',
              type: 'artist',
              uri: 'spotify:artist:71eKk097AIMUOng7PAhqK8'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/5pQP1UXwmPx5loRLGParNU'
          },
          href: 'https://api.spotify.com/v1/albums/5pQP1UXwmPx5loRLGParNU',
          id: '5pQP1UXwmPx5loRLGParNU',
          images: [
            {
              url:
                'https://i.scdn.co/image/5b5b1a2a8b983f1af2369e15aa8eb2e93248705e'
            }
          ],
          name: 'I Worry',
          release_date: '2018-04-20',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:5pQP1UXwmPx5loRLGParNU'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/71eKk097AIMUOng7PAhqK8'
            },
            href: 'https://api.spotify.com/v1/artists/71eKk097AIMUOng7PAhqK8',
            id: '71eKk097AIMUOng7PAhqK8',
            name: 'theAngelcy',
            type: 'artist',
            uri: 'spotify:artist:71eKk097AIMUOng7PAhqK8'
          }
        ],
        disc_number: 1,
        duration_ms: 235785,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'IL5901800001'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/396vWXWmsO1355EkTPxJit'
        },
        href: 'https://api.spotify.com/v1/tracks/396vWXWmsO1355EkTPxJit',
        id: '396vWXWmsO1355EkTPxJit',
        is_local: false,
        name: 'I Worry',
        popularity: 40,
        preview_url:
          'https://p.scdn.co/mp3-preview/6894966812ddfa820fb3d170f3a73c3d89607ebd?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:396vWXWmsO1355EkTPxJit'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2uuSFOLMgwxUEuzMFCNehL'
              },
              href: 'https://api.spotify.com/v1/artists/2uuSFOLMgwxUEuzMFCNehL',
              id: '2uuSFOLMgwxUEuzMFCNehL',
              name: 'Elina Duni',
              type: 'artist',
              uri: 'spotify:artist:2uuSFOLMgwxUEuzMFCNehL'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2Rz462A64on4veQuq9RRL2'
          },
          href: 'https://api.spotify.com/v1/albums/2Rz462A64on4veQuq9RRL2',
          id: '2Rz462A64on4veQuq9RRL2',
          images: [
            {
              url:
                'https://i.scdn.co/image/3dadafbfb92035c0ff60e9a3de11de774e32be69'
            }
          ],
          name: 'Partir',
          release_date: '2018-04-27',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:2Rz462A64on4veQuq9RRL2'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2uuSFOLMgwxUEuzMFCNehL'
            },
            href: 'https://api.spotify.com/v1/artists/2uuSFOLMgwxUEuzMFCNehL',
            id: '2uuSFOLMgwxUEuzMFCNehL',
            name: 'Elina Duni',
            type: 'artist',
            uri: 'spotify:artist:2uuSFOLMgwxUEuzMFCNehL'
          }
        ],
        disc_number: 1,
        duration_ms: 247120,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'DEB331758705'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/4q1PAq8yqUrPbBE9fXNFtI'
        },
        href: 'https://api.spotify.com/v1/tracks/4q1PAq8yqUrPbBE9fXNFtI',
        id: '4q1PAq8yqUrPbBE9fXNFtI',
        is_local: false,
        name: 'Vishnja',
        popularity: 20,
        preview_url:
          'https://p.scdn.co/mp3-preview/05ff8ddc3e978d303c598a78aad46ae0b4dbd427?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 5,
        type: 'track',
        uri: 'spotify:track:4q1PAq8yqUrPbBE9fXNFtI'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/28eXJYBZVGDRy1c7j4dIw2'
              },
              href: 'https://api.spotify.com/v1/artists/28eXJYBZVGDRy1c7j4dIw2',
              id: '28eXJYBZVGDRy1c7j4dIw2',
              name: 'Theo Lawrence & The Hearts',
              type: 'artist',
              uri: 'spotify:artist:28eXJYBZVGDRy1c7j4dIw2'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/2L4gTjINU0FekZam8Hk3lY'
          },
          href: 'https://api.spotify.com/v1/albums/2L4gTjINU0FekZam8Hk3lY',
          id: '2L4gTjINU0FekZam8Hk3lY',
          images: [
            {
              url:
                'https://i.scdn.co/image/d1471dbcb28b7bf00b7a751fdb36effc7aa6b917'
            }
          ],
          name: 'Homemade Lemonade',
          release_date: '2018-03-09',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:2L4gTjINU0FekZam8Hk3lY'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/28eXJYBZVGDRy1c7j4dIw2'
            },
            href: 'https://api.spotify.com/v1/artists/28eXJYBZVGDRy1c7j4dIw2',
            id: '28eXJYBZVGDRy1c7j4dIw2',
            name: 'Theo Lawrence & The Hearts',
            type: 'artist',
            uri: 'spotify:artist:28eXJYBZVGDRy1c7j4dIw2'
          }
        ],
        disc_number: 1,
        duration_ms: 191814,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'FR9W11724871'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/4d1RwUBW8uKrUEB3qTS7gS'
        },
        href: 'https://api.spotify.com/v1/tracks/4d1RwUBW8uKrUEB3qTS7gS',
        id: '4d1RwUBW8uKrUEB3qTS7gS',
        is_local: false,
        name: 'Chew Me Up',
        popularity: 33,
        preview_url:
          'https://p.scdn.co/mp3-preview/e4b0da44a9fe88e361e5d53e80fce29801438770?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:4d1RwUBW8uKrUEB3qTS7gS'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25'
              },
              href: 'https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25',
              id: '6ltzsmQQbmdoHHbLZ4ZN25',
              name: 'Lord Huron',
              type: 'artist',
              uri: 'spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/1QBpyjJ4y0Yp0Aj8mOji5o'
          },
          href: 'https://api.spotify.com/v1/albums/1QBpyjJ4y0Yp0Aj8mOji5o',
          id: '1QBpyjJ4y0Yp0Aj8mOji5o',
          images: [
            {
              url:
                'https://i.scdn.co/image/ff78d4ac1492c0ffce2ea70abdc0c710f13b7855'
            }
          ],
          name: 'Vide Noir',
          release_date: '2018-04-20',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:1QBpyjJ4y0Yp0Aj8mOji5o'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25'
            },
            href: 'https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25',
            id: '6ltzsmQQbmdoHHbLZ4ZN25',
            name: 'Lord Huron',
            type: 'artist',
            uri: 'spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25'
          }
        ],

        disc_number: 1,
        duration_ms: 268560,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'USUG11800084'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5uAAz5XQfeH0q57CnFCmmv'
        },
        href: 'https://api.spotify.com/v1/tracks/5uAAz5XQfeH0q57CnFCmmv',
        id: '5uAAz5XQfeH0q57CnFCmmv',
        is_local: false,
        name: 'Vide Noir',
        popularity: 46,
        preview_url:
          'https://p.scdn.co/mp3-preview/942ead4770631f5f604387a8178b55718021797e?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 11,
        type: 'track',
        uri: 'spotify:track:5uAAz5XQfeH0q57CnFCmmv'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5EP020iZcwBqHRnJftibXX'
              },
              href: 'https://api.spotify.com/v1/artists/5EP020iZcwBqHRnJftibXX',
              id: '5EP020iZcwBqHRnJftibXX',
              name: 'Hooverphonic',
              type: 'artist',
              uri: 'spotify:artist:5EP020iZcwBqHRnJftibXX'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/1kDZXFSYPTllIXhMcOTQBl'
          },
          href: 'https://api.spotify.com/v1/albums/1kDZXFSYPTllIXhMcOTQBl',
          id: '1kDZXFSYPTllIXhMcOTQBl',
          images: [
            {
              url:
                'https://i.scdn.co/image/7171627e962e063d1a4b178706cf433473763949'
            }
          ],
          name: 'Romantic',
          release_date: '2018-04-18',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:1kDZXFSYPTllIXhMcOTQBl'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5EP020iZcwBqHRnJftibXX'
            },
            href: 'https://api.spotify.com/v1/artists/5EP020iZcwBqHRnJftibXX',
            id: '5EP020iZcwBqHRnJftibXX',
            name: 'Hooverphonic',
            type: 'artist',
            uri: 'spotify:artist:5EP020iZcwBqHRnJftibXX'
          }
        ],

        disc_number: 1,
        duration_ms: 197400,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'BEUM71800028'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0uq1Z8z4sNHK1QlC14lLX6'
        },
        href: 'https://api.spotify.com/v1/tracks/0uq1Z8z4sNHK1QlC14lLX6',
        id: '0uq1Z8z4sNHK1QlC14lLX6',
        is_local: false,
        name: 'Romantic',
        popularity: 50,
        preview_url:
          'https://p.scdn.co/mp3-preview/ff5800b9ef432c9d28398aeb9f327b22f8f508bb?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:0uq1Z8z4sNHK1QlC14lLX6'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4zPGlyitRvJo7iz6OKlETa'
              },
              href: 'https://api.spotify.com/v1/artists/4zPGlyitRvJo7iz6OKlETa',
              id: '4zPGlyitRvJo7iz6OKlETa',
              name: 'Gomez',
              type: 'artist',
              uri: 'spotify:artist:4zPGlyitRvJo7iz6OKlETa'
            }
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5iuaZrlcL1xzhWhCbSUAjG'
          },
          href: 'https://api.spotify.com/v1/albums/5iuaZrlcL1xzhWhCbSUAjG',
          id: '5iuaZrlcL1xzhWhCbSUAjG',
          images: [
            {
              url:
                'https://i.scdn.co/image/fba60a0db1b50d6bb871158ec7974ca2d19c2ba1'
            }
          ],
          name: 'Unknown Legend (Sheffield Version)',
          release_date: '2018-03-09',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:5iuaZrlcL1xzhWhCbSUAjG'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4zPGlyitRvJo7iz6OKlETa'
            },
            href: 'https://api.spotify.com/v1/artists/4zPGlyitRvJo7iz6OKlETa',
            id: '4zPGlyitRvJo7iz6OKlETa',
            name: 'Gomez',
            type: 'artist',
            uri: 'spotify:artist:4zPGlyitRvJo7iz6OKlETa'
          }
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 285346,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBUM71705611'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2SDj39fbXm5FLi1mTCkQsG'
        },
        href: 'https://api.spotify.com/v1/tracks/2SDj39fbXm5FLi1mTCkQsG',
        id: '2SDj39fbXm5FLi1mTCkQsG',
        is_local: false,
        name: 'Unknown Legend - Sheffield Version',
        popularity: 28,
        preview_url: null,
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2SDj39fbXm5FLi1mTCkQsG'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3M0H4efyA5YcijrKlaKbYn'
              },
              href: 'https://api.spotify.com/v1/artists/3M0H4efyA5YcijrKlaKbYn',
              id: '3M0H4efyA5YcijrKlaKbYn',
              name: 'Miles Kane',
              type: 'artist',
              uri: 'spotify:artist:3M0H4efyA5YcijrKlaKbYn'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/7zhP9dkXyi10UUv4YGosEs'
          },
          href: 'https://api.spotify.com/v1/albums/7zhP9dkXyi10UUv4YGosEs',
          id: '7zhP9dkXyi10UUv4YGosEs',
          images: [
            {
              url:
                'https://i.scdn.co/image/0213b7c2d1edfac989ae2a2feee719e161f3b5f4'
            }
          ],
          name: 'Loaded',
          release_date: '2018-04-17',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:7zhP9dkXyi10UUv4YGosEs'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3M0H4efyA5YcijrKlaKbYn'
            },
            href: 'https://api.spotify.com/v1/artists/3M0H4efyA5YcijrKlaKbYn',
            id: '3M0H4efyA5YcijrKlaKbYn',
            name: 'Miles Kane',
            type: 'artist',
            uri: 'spotify:artist:3M0H4efyA5YcijrKlaKbYn'
          }
        ],

        disc_number: 1,
        duration_ms: 198106,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBUM71801465'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7eKUG8l9jlGeZ7hh0DA036'
        },
        href: 'https://api.spotify.com/v1/tracks/7eKUG8l9jlGeZ7hh0DA036',
        id: '7eKUG8l9jlGeZ7hh0DA036',
        is_local: false,
        name: 'Loaded',
        popularity: 57,
        preview_url:
          'https://p.scdn.co/mp3-preview/9775e47025f0d3924d7731e8a1b942d102239833?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:7eKUG8l9jlGeZ7hh0DA036'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3oAKWkFSNcK5W1bbXyjrLe'
              },
              href: 'https://api.spotify.com/v1/artists/3oAKWkFSNcK5W1bbXyjrLe',
              id: '3oAKWkFSNcK5W1bbXyjrLe',
              name: 'Louise Thiolon',
              type: 'artist',
              uri: 'spotify:artist:3oAKWkFSNcK5W1bbXyjrLe'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/2G93Xx8dbzI0fVhWlj1AIg'
          },
          href: 'https://api.spotify.com/v1/albums/2G93Xx8dbzI0fVhWlj1AIg',
          id: '2G93Xx8dbzI0fVhWlj1AIg',
          images: [
            {
              url:
                'https://i.scdn.co/image/4bc1edef446d182b8dc5898be930500696b80a20'
            }
          ],
          name: 'Cariatides',
          release_date: '2018-04-19',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:2G93Xx8dbzI0fVhWlj1AIg'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3oAKWkFSNcK5W1bbXyjrLe'
            },
            href: 'https://api.spotify.com/v1/artists/3oAKWkFSNcK5W1bbXyjrLe',
            id: '3oAKWkFSNcK5W1bbXyjrLe',
            name: 'Louise Thiolon',
            type: 'artist',
            uri: 'spotify:artist:3oAKWkFSNcK5W1bbXyjrLe'
          }
        ],

        disc_number: 1,
        duration_ms: 274600,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'NLS6R1837814'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3QASBBjnxL3DKE7nPGC9c9'
        },
        href: 'https://api.spotify.com/v1/tracks/3QASBBjnxL3DKE7nPGC9c9',
        id: '3QASBBjnxL3DKE7nPGC9c9',
        is_local: false,
        name: 'Marie',
        popularity: 21,
        preview_url:
          'https://p.scdn.co/mp3-preview/97d8082636297f1ebb8c2ff8ae13373078fa8bff?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:3QASBBjnxL3DKE7nPGC9c9'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5aIqB5nVVvmFsvSdExz408'
              },
              href: 'https://api.spotify.com/v1/artists/5aIqB5nVVvmFsvSdExz408',
              id: '5aIqB5nVVvmFsvSdExz408',
              name: 'Johann Sebastian Bach',
              type: 'artist',
              uri: 'spotify:artist:5aIqB5nVVvmFsvSdExz408'
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/10vGPmlSczrJzleDu2F4AV'
              },
              href: 'https://api.spotify.com/v1/artists/10vGPmlSczrJzleDu2F4AV',
              id: '10vGPmlSczrJzleDu2F4AV',
              name: 'Austrian Art Gang',
              type: 'artist',
              uri: 'spotify:artist:10vGPmlSczrJzleDu2F4AV'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/5uKKkMeCRyD0UENHv26L3c'
          },
          href: 'https://api.spotify.com/v1/albums/5uKKkMeCRyD0UENHv26L3c',
          id: '5uKKkMeCRyD0UENHv26L3c',
          images: [
            {
              url:
                'https://i.scdn.co/image/2b5845e4c54637273c3131442ba5c2b58cac631c'
            }
          ],
          name: 'The Art of Fugue & The Art of Improvisation',
          release_date: '2018-04-20',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:5uKKkMeCRyD0UENHv26L3c'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5aIqB5nVVvmFsvSdExz408'
            },
            href: 'https://api.spotify.com/v1/artists/5aIqB5nVVvmFsvSdExz408',
            id: '5aIqB5nVVvmFsvSdExz408',
            name: 'Johann Sebastian Bach',
            type: 'artist',
            uri: 'spotify:artist:5aIqB5nVVvmFsvSdExz408'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/10vGPmlSczrJzleDu2F4AV'
            },
            href: 'https://api.spotify.com/v1/artists/10vGPmlSczrJzleDu2F4AV',
            id: '10vGPmlSczrJzleDu2F4AV',
            name: 'Austrian Art Gang',
            type: 'artist',
            uri: 'spotify:artist:10vGPmlSczrJzleDu2F4AV'
          }
        ],

        disc_number: 1,
        duration_ms: 303706,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'ATG301714206'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3Vhoh1oIScfHUGmTMkF8eu'
        },
        href: 'https://api.spotify.com/v1/tracks/3Vhoh1oIScfHUGmTMkF8eu',
        id: '3Vhoh1oIScfHUGmTMkF8eu',
        is_local: false,
        name:
          'Die Kunst der Fuge, BWV 1080 (Arr. for Chamber Ensemble): Fugue No. 12',
        popularity: 29,
        preview_url:
          'https://p.scdn.co/mp3-preview/57d684a31e30969ca438595a63bce42f4690d015?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 6,
        type: 'track',
        uri: 'spotify:track:3Vhoh1oIScfHUGmTMkF8eu'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2o1giMbJ0BMwB2O0zU3aDo'
              },
              href: 'https://api.spotify.com/v1/artists/2o1giMbJ0BMwB2O0zU3aDo',
              id: '2o1giMbJ0BMwB2O0zU3aDo',
              name: 'Hjálmar',
              type: 'artist',
              uri: 'spotify:artist:2o1giMbJ0BMwB2O0zU3aDo'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/2LMUBIyij34pNlYxg5YdLJ'
          },
          href: 'https://api.spotify.com/v1/albums/2LMUBIyij34pNlYxg5YdLJ',
          id: '2LMUBIyij34pNlYxg5YdLJ',
          images: [
            {
              url:
                'https://i.scdn.co/image/507cfb8f1a758d2ca65e3cc5d879af12141c3243'
            }
          ],
          name: 'Aðeins eitt kyn',
          release_date: '2018-04-20',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:2LMUBIyij34pNlYxg5YdLJ'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2o1giMbJ0BMwB2O0zU3aDo'
            },
            href: 'https://api.spotify.com/v1/artists/2o1giMbJ0BMwB2O0zU3aDo',
            id: '2o1giMbJ0BMwB2O0zU3aDo',
            name: 'Hjálmar',
            type: 'artist',
            uri: 'spotify:artist:2o1giMbJ0BMwB2O0zU3aDo'
          }
        ],
        disc_number: 1,
        duration_ms: 287097,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'ISV441811201'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/43UNXaiErb8rhnQGpcKbhi'
        },
        href: 'https://api.spotify.com/v1/tracks/43UNXaiErb8rhnQGpcKbhi',
        id: '43UNXaiErb8rhnQGpcKbhi',
        is_local: false,
        name: 'Aðeins eitt kyn',
        popularity: 30,
        preview_url:
          'https://p.scdn.co/mp3-preview/a91f4157442f3a3fe995cc3262e00303e4230f5a?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:43UNXaiErb8rhnQGpcKbhi'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1ZsnHGOLYFg8CAHQQBc1ut'
              },
              href: 'https://api.spotify.com/v1/artists/1ZsnHGOLYFg8CAHQQBc1ut',
              id: '1ZsnHGOLYFg8CAHQQBc1ut',
              name: 'Richard Hawley',
              type: 'artist',
              uri: 'spotify:artist:1ZsnHGOLYFg8CAHQQBc1ut'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/6EoRQj2f2r85iq6NcBqY9S'
          },
          href: 'https://api.spotify.com/v1/albums/6EoRQj2f2r85iq6NcBqY9S',
          id: '6EoRQj2f2r85iq6NcBqY9S',
          images: [
            {
              url:
                'https://i.scdn.co/image/997d4314bf486946a31c537825df6966b967b3b7'
            }
          ],
          name: 'Funny Cow',
          release_date: '2018-04-20',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:6EoRQj2f2r85iq6NcBqY9S'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1ZsnHGOLYFg8CAHQQBc1ut'
            },
            href: 'https://api.spotify.com/v1/artists/1ZsnHGOLYFg8CAHQQBc1ut',
            id: '1ZsnHGOLYFg8CAHQQBc1ut',
            name: 'Richard Hawley',
            type: 'artist',
            uri: 'spotify:artist:1ZsnHGOLYFg8CAHQQBc1ut'
          }
        ],
        disc_number: 1,
        duration_ms: 282063,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'UKPDC1800001'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2qvj7pewERbUh1jcpWqCuo'
        },
        href: 'https://api.spotify.com/v1/tracks/2qvj7pewERbUh1jcpWqCuo',
        id: '2qvj7pewERbUh1jcpWqCuo',
        is_local: false,
        name: 'Funny Cow',
        popularity: 35,
        preview_url:
          'https://p.scdn.co/mp3-preview/d4031c425d2bf0ffdfe99331ec4d11c5308ad3a5?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2qvj7pewERbUh1jcpWqCuo'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1vdBmNoVYcMaaxNbueb4H3'
              },
              href: 'https://api.spotify.com/v1/artists/1vdBmNoVYcMaaxNbueb4H3',
              id: '1vdBmNoVYcMaaxNbueb4H3',
              name: 'Delgres',
              type: 'artist',
              uri: 'spotify:artist:1vdBmNoVYcMaaxNbueb4H3'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6AAWmmh5lZC7IaU11WZB4Y'
          },
          href: 'https://api.spotify.com/v1/albums/6AAWmmh5lZC7IaU11WZB4Y',
          id: '6AAWmmh5lZC7IaU11WZB4Y',
          images: [
            {
              url:
                'https://i.scdn.co/image/797c4d06d7bda34b449d2a7f5e59d509752d2052'
            }
          ],
          name: 'Mr President',
          release_date: '2018-04-10',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:6AAWmmh5lZC7IaU11WZB4Y'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1vdBmNoVYcMaaxNbueb4H3'
            },
            href: 'https://api.spotify.com/v1/artists/1vdBmNoVYcMaaxNbueb4H3',
            id: '1vdBmNoVYcMaaxNbueb4H3',
            name: 'Delgres',
            type: 'artist',
            uri: 'spotify:artist:1vdBmNoVYcMaaxNbueb4H3'
          }
        ],
        disc_number: 1,
        duration_ms: 225434,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'FR9W11802556'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/6t8OhjnODTT8lWsL4v52of'
        },
        href: 'https://api.spotify.com/v1/tracks/6t8OhjnODTT8lWsL4v52of',
        id: '6t8OhjnODTT8lWsL4v52of',
        is_local: false,
        name: 'Mr President',
        popularity: 36,
        preview_url:
          'https://p.scdn.co/mp3-preview/95784a7b09e066a5e73b9dc6b9b4e4816e52dbbb?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:6t8OhjnODTT8lWsL4v52of'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6jP9Z7o6WlbYvKUOeO5SbP'
              },
              href: 'https://api.spotify.com/v1/artists/6jP9Z7o6WlbYvKUOeO5SbP',
              id: '6jP9Z7o6WlbYvKUOeO5SbP',
              name: 'Goat',
              type: 'artist',
              uri: 'spotify:artist:6jP9Z7o6WlbYvKUOeO5SbP'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5A3Pw3CQl7DSX26vMeOTCC'
          },
          href: 'https://api.spotify.com/v1/albums/5A3Pw3CQl7DSX26vMeOTCC',
          id: '5A3Pw3CQl7DSX26vMeOTCC',
          images: [
            {
              url:
                'https://i.scdn.co/image/37e0e8dc4b458434df347bf753fa321f65f7db21'
            }
          ],
          name: 'Let it Burn',
          release_date: '2018-05-25',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:5A3Pw3CQl7DSX26vMeOTCC'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6jP9Z7o6WlbYvKUOeO5SbP'
            },
            href: 'https://api.spotify.com/v1/artists/6jP9Z7o6WlbYvKUOeO5SbP',
            id: '6jP9Z7o6WlbYvKUOeO5SbP',
            name: 'Goat',
            type: 'artist',
            uri: 'spotify:artist:6jP9Z7o6WlbYvKUOeO5SbP'
          }
        ],

        disc_number: 1,
        duration_ms: 363206,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'UK2SX1805251'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3QH0vAK0h4L9pOZZdHX5YY'
        },
        href: 'https://api.spotify.com/v1/tracks/3QH0vAK0h4L9pOZZdHX5YY',
        id: '3QH0vAK0h4L9pOZZdHX5YY',
        is_local: false,
        name: 'Let it Burn',
        popularity: 47,
        preview_url:
          'https://p.scdn.co/mp3-preview/9f07f3d6f55abcc0adae12a20bf08ee26447fa52?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:3QH0vAK0h4L9pOZZdHX5YY'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1gRNBaI4yn6wCCTvRhGWh8'
              },
              href: 'https://api.spotify.com/v1/artists/1gRNBaI4yn6wCCTvRhGWh8',
              id: '1gRNBaI4yn6wCCTvRhGWh8',
              name: 'Don McLean',
              type: 'artist',
              uri: 'spotify:artist:1gRNBaI4yn6wCCTvRhGWh8'
            }
          ],

          external_urls: {
            spotify: 'https://open.spotify.com/album/3v04ekNcPPNyXXJzcCCdzT'
          },
          href: 'https://api.spotify.com/v1/albums/3v04ekNcPPNyXXJzcCCdzT',
          id: '3v04ekNcPPNyXXJzcCCdzT',
          images: [
            {
              url:
                'https://i.scdn.co/image/7a6be11ad1404dfcb87c487c62723adb9aae06df'
            }
          ],
          name: 'A Total Eclipse of the Sun (Radio Edit)',
          release_date: '2018-04-06',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:3v04ekNcPPNyXXJzcCCdzT'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1gRNBaI4yn6wCCTvRhGWh8'
            },
            href: 'https://api.spotify.com/v1/artists/1gRNBaI4yn6wCCTvRhGWh8',
            id: '1gRNBaI4yn6wCCTvRhGWh8',
            name: 'Don McLean',
            type: 'artist',
            uri: 'spotify:artist:1gRNBaI4yn6wCCTvRhGWh8'
          }
        ],
        disc_number: 1,
        duration_ms: 192380,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'DELV41800320'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/64Mz2Uou2ysmOMmQDzXx9b'
        },
        href: 'https://api.spotify.com/v1/tracks/64Mz2Uou2ysmOMmQDzXx9b',
        id: '64Mz2Uou2ysmOMmQDzXx9b',
        is_local: false,
        name: 'A Total Eclipse of the Sun - Radio Edit',
        popularity: 19,
        preview_url:
          'https://p.scdn.co/mp3-preview/72a544b092cce00e622fe9931a66cb9c0f91c270?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:64Mz2Uou2ysmOMmQDzXx9b'
      } as ITrack
    ]
  } as IPregameSuggestion,
  {
    user: { displayName: 'Will Patrick' } as IUser,
    tracks: [
      {
        album: {
          external_urls: {
            spotify: 'https://open.spotify.com/album/3NPknmp43EBSXqrAAbl2rI'
          },
          href: 'https://api.spotify.com/v1/albums/3NPknmp43EBSXqrAAbl2rI',
          id: '3NPknmp43EBSXqrAAbl2rI',
          images: [
            {
              url:
                'https://i.scdn.co/image/7dd16ab8e825fa1c9011c12cba62b7967926163f'
            }
          ],
          name: 'Mardi Gras Beads',
          release_date: '2018-04-30',
          uri: 'spotify:album:3NPknmp43EBSXqrAAbl2rI'
        },
        disc_number: 1,
        duration_ms: 163413,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/3Poa8xyqlouHvCE7y9meUn'
        },
        href: 'https://api.spotify.com/v1/tracks/3Poa8xyqlouHvCE7y9meUn',
        id: '3Poa8xyqlouHvCE7y9meUn',
        name: 'Mardi Gras Beads',
        popularity: 51,
        preview_url:
          'https://p.scdn.co/mp3-preview/5f71527435ac1685b47755838228861bc45cd45c?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:3Poa8xyqlouHvCE7y9meUn'
      } as ITrack,
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/31xWBejhhuVdm9zRmCQuse'
              },
              href: 'https://api.spotify.com/v1/artists/31xWBejhhuVdm9zRmCQuse',
              id: '31xWBejhhuVdm9zRmCQuse',
              name: 'Hailey Tuck',
              type: 'artist',
              uri: 'spotify:artist:31xWBejhhuVdm9zRmCQuse'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/18FJHVg2pQUU4x2pxuVQ1A'
          },
          href: 'https://api.spotify.com/v1/albums/18FJHVg2pQUU4x2pxuVQ1A',
          id: '18FJHVg2pQUU4x2pxuVQ1A',
          images: [
            {
              url:
                'https://i.scdn.co/image/4830e589777cec3fef9d3c52ca0c9c89eb9ceb3a'
            }
          ],
          name: 'Junk',
          release_date: '2018-05-04',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:18FJHVg2pQUU4x2pxuVQ1A'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/31xWBejhhuVdm9zRmCQuse'
            },
            href: 'https://api.spotify.com/v1/artists/31xWBejhhuVdm9zRmCQuse',
            id: '31xWBejhhuVdm9zRmCQuse',
            name: 'Hailey Tuck',
            type: 'artist',
            uri: 'spotify:artist:31xWBejhhuVdm9zRmCQuse'
          }
        ],
        disc_number: 1,
        duration_ms: 162253,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBARL1800194'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3SGTB0245ztpWiRN6wQvvI'
        },
        href: 'https://api.spotify.com/v1/tracks/3SGTB0245ztpWiRN6wQvvI',
        id: '3SGTB0245ztpWiRN6wQvvI',
        is_local: false,
        name: 'Cry to Me',
        popularity: 34,
        preview_url:
          'https://p.scdn.co/mp3-preview/5cdab93c38c5c003a04b264a48622f597d7dfa67?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:3SGTB0245ztpWiRN6wQvvI'
      } as ITrack,
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1fysQz5w4lIOO4DlZ77fUJ'
              },
              href: 'https://api.spotify.com/v1/artists/1fysQz5w4lIOO4DlZ77fUJ',
              id: '1fysQz5w4lIOO4DlZ77fUJ',
              name: '3MA',
              type: 'artist',
              uri: 'spotify:artist:1fysQz5w4lIOO4DlZ77fUJ'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6vbsCqB8t8LUQzl6eyE0VH'
          },
          href: 'https://api.spotify.com/v1/albums/6vbsCqB8t8LUQzl6eyE0VH',
          id: '6vbsCqB8t8LUQzl6eyE0VH',
          images: [
            {
              url:
                'https://i.scdn.co/image/9445b7629738956aaea4b5e0ceb2016dab2f5a92'
            }
          ],
          name: 'Anarouz',
          release_date: '2017-11-17',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:6vbsCqB8t8LUQzl6eyE0VH'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1fysQz5w4lIOO4DlZ77fUJ'
            },
            href: 'https://api.spotify.com/v1/artists/1fysQz5w4lIOO4DlZ77fUJ',
            id: '1fysQz5w4lIOO4DlZ77fUJ',
            name: '3MA',
            type: 'artist',
            uri: 'spotify:artist:1fysQz5w4lIOO4DlZ77fUJ'
          }
        ],
        disc_number: 1,
        duration_ms: 259893,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'FRF981700001'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0p1EMesgoDWuADWd8jX6nk'
        },
        href: 'https://api.spotify.com/v1/tracks/0p1EMesgoDWuADWd8jX6nk',
        id: '0p1EMesgoDWuADWd8jX6nk',
        is_local: false,
        name: 'Anarouz',
        popularity: 23,
        preview_url:
          'https://p.scdn.co/mp3-preview/137adf81d85f7e8cdc65094286c564212aa845f8?cid=ee4aa78cde4c4be08978d79c180e11c9',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:0p1EMesgoDWuADWd8jX6nk'
      } as ITrack
    ]
  }
]

export default suggestions
