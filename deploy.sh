cd ./api && npm install --production && cd ../ && \
cd ./spa && npm install && bower install --allow-root --config.interactive=false && gulp build && cd ../ && \
cp ./Makefile ./api/Makefile && \
rsync -avzh ./api/ nurimba@185.14.185.93:/nurimba/projects/nb-chat && \
rsync -avzh ./spa/dist/ nurimba@185.14.185.93:/nurimba/projects/nb-chat/public && \
ssh nurimba@185.14.185.93 'cd /nurimba/projects/nb-chat && make prod'
