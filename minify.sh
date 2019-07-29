if [ ! -d "js/min" ]; then 
	mkdir js/min;
fi

for d in js/*.js ; do
	name=$(basename "$d" ".js")
	echo $d;
	wget --post-data="input=`cat $d`" --output-document=js/min/$name.js https://javascript-minifier.com/raw
done

