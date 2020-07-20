# front

## Run locally
```
python -m SimpleHTTPServer 4242
```

## Initial Deployment
```
create ubuntu 20.04 server
make ip address static
sudo apt update
sudo apt install apache2
cd /var/www/html
rm index.html
git clone https://github.com/donnyzanger-developers/front.git . <--- don't forget the dot
vim config.js
const publicKey = ''; <---------- stripe public key
const unitAmount = 5.00;
const currency = 'usd';
const API = 'https://whereverapiishosted.com';
systemctl restart apache2.service
or..
sudo service apache2 restart
change DNS records to point to this instance's ip address in google cloud DNS only
wait for DNS to propagate
run certbot process [1] to get certificate for serving over https
```

## Subsequent Deployments
```
cd /var/www/html
git pull
systemctl restart apache2.service
or..
sudo service apache2 restart
```

## References
```
[1] https://certbot.eff.org/lets-encrypt/ubuntufocal-apache
```