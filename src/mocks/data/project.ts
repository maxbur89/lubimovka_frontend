import galleryImage from '../assets/performance/gallery-item.jpg';

export default {
  titledata: {
    title: 'Любимовка. Ещё',
    intro:
      'Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками Любимовки. Можно слушать, обсуждать и даже участвовать.',
    image:
      'https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1635094786573-fc7fa33497ccimage',
    imageDesc: 'Множество людей принимают участие в межсезонной читке',
    description:
      'За первый сезон проекта организаторы провели 17 мероприятий вместе с режиссёрами и актёрами московских театров: Театра.doc, Театрального Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра «Станиславский», Ленкома.',
  },

  images: Array.from({ length: 8 }, () => ({
    image: galleryImage,
  })),
  cardsArr: Array.from({ length: 5 }, () => ({
    date: '15 декабря',
    time: '11:00',
    title: 'МАМА',
    playwrightArray: ['Ольга Казакова', 'Антон Чехов'],
    directorArray: ['Катя Ганюшина'],
    buttonLinks: [
      'https://lubimovka.timepad.ru/event/1746579/',
      'https://lubimovka.timepad.ru/event/1746502/',
    ],
    coverResourceUrl:
      'https://img05.rl0.ru/afisha/1808x1016q65i/s2.afisha.ru/mediastorage/5e/c5/541412eb0ea14286bad43d20c55e.jpg',
  })),
  basicPlayCard: Array.from({ length: 5 }, () => ({
    play: {
      title: 'Конкретные разговоры пожилых супругов ни о чём',
      city: 'Санкт-Петербург',
      year: '2020',
      linkView: 'https://lubimovka.ru/',
      linkDownload: 'https://lubimovka.ru/',
    },
    author: {
      id: 1,
      name: 'Екатерина Августеняк',
    },
    buttonVisibility: false,
  })),
  personCard: Array.from({ length: 5 }, () => ({
    name: 'Тереза Шимчак',
    link:
      'https://images.unsplash.com/photo-1630255732364-a69ade0f0543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    about: 'Драматург, сценарист, преподаватель',
    participant: true,
  })),
  email: 'more@lubimmovka.ru',
  projectDescription: {
    title: 'Заголовок блока с кнопкой/ссылкой',
    description:
      'Видео прошедших мероприятий можно посмотреть в плейлисте на канале Любимовки в YouTube',
  },
  video: Array.from({ length: 3 }, () => ({
    url: 'https://www.youtube.com/embed/NkvP2jR8xlw',
    videoDescription:
    'Из этого следует два вывода: с одной стороны, искусство не должно быть равно реальности, потому что иначе оно не будет искусством, с другой стороны – оно должно быть все-таки подобно реальности, иначе мы ничего не поймем, не подключимся и не распознаем замыслы автора. Мне нравится такое определение, что один из видов эстетики – это, грубо говоря, \'понимание\' чего-то. Если нам нечего понимать, то мы не получим ни удовольствия, ни какого-то чувства, ничего. А для того, чтобы что-то понять, нам должно быть представлено что-то, что не равно само себе. То есть нам показывают или говорят что-то, а мы понимаем, что там есть что-то еще. Вот мы смотрим на античную статую и понимаем, что это – статуя, но похожа на человека. Если она будет абсолютно такая же как человек, как восковая фигура, то мы поймем, что это уже не искусство. Искусство для того, чтобы люди догадались, домыслили, дочувствовали что-то.',
  })),
};