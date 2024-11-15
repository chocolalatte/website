#!/bin/bash
RET=1
while [[ RET -ne 0]]; do
    echo "=> Waiting for Mariadb"
    sleep 2
    mariadb -ppass -e "status" > /dev/null 2>&1
    RET=$?
done
mariadb -ppass -e "source web_db.sql"
echo "Done"