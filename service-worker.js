self.addEventListener('push', function(event) {
    //// ----- Unsubscribe when receiving push notification -----
    //
    // self.registration.pushManager.getSubscription()
    // .then(subscription => {
    //     console.log('subscription: ', subscription);
    //     return subscription.unsubscribe()
    // })

    const title = "You're flight is waiting for you !";
    const options = {
      body: 'Prepare your luggages, and get ready',
      icon: 'https://cdn2.iconfinder.com/data/icons/ballicons-2-free/100/luggage-512.png',
      image: '/assets/plane.jpg', //'https://ak5.picdn.net/shutterstock/videos/12253685/thumb/1.jpg',
      badge: 'https://cdn2.iconfinder.com/data/icons/ballicons-2-free/100/luggage-512.png',
      actions: [
          {
              action: 'open',
              title: 'Check it out',
              icon: '/assets/eye.png'
          }
      ]
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    if (event.action === 'open') {
        event.notification.close();
        console.log('Check it out - open action clicked');
    }
})

self.addEventListener('notificationclose', function(event) {
    sconsole.log('Notification closed');
})

self.addEventListener('pushsubscriptionchange', function(event) {
    console.log('SUBSCRIPTION CHANGE', event);
})