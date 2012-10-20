#!/bin/bash
unoconv --listener &
unoconv -f pdf $1
filename=$1
filenameBase=${filename%.*}
filenamePNG=$filenameBase"-%03d.png"
filenamePDF=$filenameBase".pdf"
cmd="gs -sOutputFile="$filenameBase"-%03d.png -dNOPAUSE -dSAFER -sDEVICE=png16m \
     -dBATCH -q -r300 -dGraphicsAlphaBits=4 -dTextAlphaBits=4 "$filenameBase".pdf"
$cmd
