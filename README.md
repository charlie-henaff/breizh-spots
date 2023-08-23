# Breizh spots 

This project provide webcam live streams from north coast brittany beaches.  
It's available at https://charlie-henaff.github.io/breizh-spots.

## Requirements

- [docker](https://docs.docker.com/engine/install/)  
- [make](https://www.gnu.org/software/make/) (optional)

## Configuration 

Link video flux's you want to provide inside [cam.csv](public/cam.csv) file.

## Commands

```sh
make                # show help
make start          # start project 
```

After start, application should be available at [localhost:3000](http://localhost:3000)
