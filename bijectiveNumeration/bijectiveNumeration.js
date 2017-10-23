function bijectiveNumeration (n, d){
	a=((n%100|0)+(n/100|0));
 	return d[n/100|0]+"-"+((a<10)?"0"+a:a);
}