import markAvatar from './assets/images/avatar-mark-webber.webp'
import angelaAvatar from './assets/images/avatar-angela-gray.webp'
import jacobAvatar from './assets/images/avatar-jacob-thompson.webp'
import rizkyAvatar from './assets/images/avatar-rizky-hasanuddin.webp'
import kimberlyAvatar from './assets/images/avatar-kimberly-smith.webp'
import nathanAvatar from './assets/images/avatar-nathan-peterson.webp'
import annaAvatar from './assets/images/avatar-anna-kim.webp'

import pic from './assets/images/image-chess.webp'

export const users = [{
      name: 'Mark Webber',
      notification: 'reacted to your recent post',
      avatar: markAvatar,
      time: '1m ago',
      isRecent: true,
      content: {
        type: 'contextual',
        value: 'My first tournament today!'
      },
      associatedColor: 'text-primary-blue'
    }, {
      name: 'Angela Gray',
      notification: 'followed you',
      avatar: angelaAvatar,
      time: '5m ago',
      isRecent: true
    }, {
      name: 'Jacob Thompson',
      notification: 'has joined your group',
      avatar: jacobAvatar,
      time: '1 day ago',
      isRecent: true,
      content: {
        type: 'contextual',
        value: 'Chess Group'
      },
      associatedColor: 'text-primary-blue'
    }, {
      name: 'Rizky Hasanuddin',
      notification: 'sent you a private message',
      avatar: rizkyAvatar,
      time: '5 days ago',
      isRecent: false,
      content: {
        type: 'message',
        value: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game"
      }
    }, {
      name: 'Kimberly Smith',
      notification: 'commented on your picture',
      avatar: kimberlyAvatar,
      time: '1 week ago',
      isRecent: false,
      content: {
        type: 'image',
        value: pic
      }
    }, {
      name: 'Nathan Peterson',
      notification: 'reacted to your post',
      avatar: nathanAvatar,
      time: '2 weeks ago',
      isRecent: false,
      content: {
        type: 'contextual',
        value: '5 end-game strategies to increase your win rate'
      },
      associatedColor: 'text-primary-blue'
    }, {
      name: 'Anna Kim',
      notification: 'has left the group',
      avatar: annaAvatar,
      time: '2 weeks ago',
      isRecent: false,
      content: {
        type: 'contextual',
        value: 'Chess Group'
      },
      associatedColor: 'text-primary-blue'
    }
]