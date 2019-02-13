# Basic WebPush Setup

1- Install Webpush globally :
```
yarn global add web-push
```

2- Generate VAPID keys :
```
web-push generate-vapid-keys [--json]
```

3- Replace the VAPID placeholder in `index.js` with your public key
```
{{ YOUR VAPID PUBLIC KEY HERE }}
```

4- Serve the directory :
```
python -m SimpleHTTPServer 8000

OR

yarn global add http-server => http-server
```

5- Send basic Notification :
```
web-push send-notification --endpoint='{{USE THE ENDPOINT RETURNED AFTER SUBSCRIBING IN FRONT-END}}' --vapid-subject='{{VAPID SUBJECT}}' --vapid-pubkey={{VAPID PUBKEY}} --vapid-pvtkey={{VAPID PRIVATE KEY}}
```

## More Resources :
[https://github.com/web-push-libs/web-push](https://github.com/web-push-libs/web-push)

[https://github.com/indexzero/http-server](https://github.com/indexzero/http-server)