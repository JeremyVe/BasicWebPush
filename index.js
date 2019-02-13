if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js');

    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    let registrationAlias;
    navigator.serviceWorker.ready
    .then(function(registration) {
        console.log('GetSubscription');
        registrationAlias = registration;
        return registration.pushManager.getSubscription();
    })
    .then(async function(subscription) {
        console.log('subscription', subscription);

        if (subscription) {
            const endpointContainer = document.querySelector('.endpoint');
            const subscriptionContainer = document.querySelector('.subscription');
            endpointContainer.textContent = subscription.endpoint;
            subscriptionContainer.textContent = JSON.stringify(subscription, null, 2);

            return subscription;
        }
        console.log('Subscribing');
        const vapidPublicKey = '{{ YOUR VAPID PUBLIC KEY HERE }}';
        const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
        return registrationAlias.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidKey
        });
    });
}