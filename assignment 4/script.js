var names=new Array();
names[0]="Ishaq";
names[1]="Ismail";
names[2]="Noah";
names[3]="David";
names[4]="Pyana";
names[5]="Lifo";
names[6]="Laty";
names[7]="Jiula";
names[8]="lauura";
names[9]="Jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}