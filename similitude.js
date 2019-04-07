function similitude(a, b) {
	let aClean = a.replace(/(.)(?=.*\1)/g, "");
	let bClean = b.replace(/(.)(?=.*\1)/g, "");
	let result;
	if (aClean.length > bClean.length) {
		result = Math.floor((bClean.length / aClean.length) * 100);
	}
	else if (aClean.length < bClean.length) {
		result = Math.floor((aClean.length / bClean.length) * 100);
	}
	else {
		let merge = aClean.concat(bClean);
		let mergeClean = merge.replace(/(.)(?=.*\1)/g, "");
		result = Math.floor(((merge.length - mergeClean.length) / aClean.length) * 100);
	}
	return result;
};