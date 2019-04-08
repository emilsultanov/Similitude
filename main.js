function similitude(a,b){

	let aFilter=a.replace(/(.)(?=.*\1)/g, "");
	let bfilter=b.replace(/(.)(?=.*\1)/g, "");
	
	let arr1=aFilter.split('');
	let arr2=bfilter.split('');
	
	let percent,k=0;

	if(arr1.length>arr2.length){
		arr2.forEach((i)=>{
			arr1.forEach((j)=>{
				if(i===j){
					k+=1;
				}
			});
		});
		percent=Math.floor(k/arr1.length*100);
		return percent;
	}

	else if(arr1.length<arr2.length){
		arr1.forEach((i)=>{
			arr2.forEach((j)=>{
				if(i===j){
					k+=1;
				}
			});
		});
		percent=Math.floor(k/arr2.length*100);
		return percent;
	}

	else{
		arr1.forEach((i)=>{
			arr2.forEach((j)=>{
				if(i===j){
					k+=1;
				}
			});
		});
		percent=Math.floor(k/arr2.length*100);
		return percent;
	}
};