function similitude(a,b){

			let aClean=a.replace(/(.)(?=.*\1)/g, "");
			let bClean=b.replace(/(.)(?=.*\1)/g, "");
			let k;
			if(aClean.length>bClean.length){
				k=Math.floor((bClean.length/aClean.length)*100);
				return k;
			}
			else if(aClean.length<bClean.length){
				k=Math.floor((aClean.length/bClean.length)*100);
				return k;
			}
			else{
				let merge =aClean.concat(bClean);
				let mergeClean=merge.replace(/(.)(?=.*\1)/g, "");
				k=Math.floor(((merge.length-mergeClean.length)/aClean.length)*100);
				return k;
			}
		};