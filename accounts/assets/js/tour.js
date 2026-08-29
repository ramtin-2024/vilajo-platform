// Tour js
const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'shepherd-theme-custom',
    scrollTo: {
      behavior: "smooth",
      block: "center"
    },
  }
});

tour.addStep({
  id: 'profile-tabs',
  title: 'همه تب‌ها!',
  text: ' برو و همین حالا امتحان کن 👍\n',
  attachTo: {
    element: '#profile-tabs',
    on: 'bottom'
  },
  buttons: [
    { text: '< قبلی', action: tour.back },
    { text: 'بعدی >', action: tour.next }
  ]
});

tour.addStep({
  id: 'featured-Stories',
  title: 'داستان‌ها!',
  text: ' یک روز زیبا با چند تصویر شروع می‌شود\n',
  attachTo: {
    element: '#featured-Stories',
    on: 'bottom'
  },
  buttons: [
    { text: '< قبلی', action: tour.back },
    { text: 'بعدی >', action: tour.next }
  ]
});

tour.addStep({
  id: 'post',
  title: 'پست',
  text: ' چند تصویر از بخش پست ما..\n',
  attachTo: {
    element: '#post',
    on: 'bottom'
  },
  buttons: [
    { text: '< قبلی', action: tour.back },
    { text: 'بعدی >', action: tour.next }
  ]
});

tour.addStep({
  id: 'about-me',
  title: 'درباره من',
  text: ' چند جزئیات درباره من!!\n',
  attachTo: {
    element: '#about-me',
    on: 'bottom'
  },
  buttons: [
    { text: '< قبلی', action: tour.back },
    { text: 'بعدی >', action: tour.next }
  ]
});

tour.addStep({
  id: 'friend',
  title: 'دوستان',
  text: ' لیست دوستانی که دنبال می‌کنند!\n',
  attachTo: {
    element: '#friend',
    on: 'bottom'
  },
  buttons: [
    { text: '< قبلی', action: tour.back },
    { text: 'تمام &#x1F44D;', action: tour.cancel }
  ]
});

tour.start();

 //  **------ slider**
 
$('.story-container').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});