exports.atkinsSieve = function(limit){
	var results = [2,3,5];
	var sieve = new Array(limit+1);
	
	for(var i = 0; i < sieve.length; i++){
		sieve[i] = 0;
	}
	
	var factor = Math.floor(Math.sqrt(limit))+1;
	var n,i,j;
	
	for(i = 1; i < factor; i++){
		for(j = 1; j < factor; j++){
			n = 4 * (Math.pow(i,2)) + (Math.pow(j,2));
			
			if((n <= limit) && ((n % 12 === 1) || (n % 12 === 5))){
				sieve[n] = sieve[n] ^ 1;
			}
			
			n = 3 * (Math.pow(i,2)) + (Math.pow(j,2));
			
			if((n <= limit) && (n % 12 === 7)){
				sieve[n] = sieve[n] ^ 1;
			}
			
			if(i > j){
				n = 3 * (Math.pow(i,2)) - (Math.pow(j,2));
				
				if((n <= limit) && (n % 12 === 11)){
					sieve[n] = sieve[n] ^ 1;
				}
			}
		}	
	}
	
	for(i = 5; i < factor; i++){
		if(sieve[i] === 1){
			for(j = (Math.pow(i,2)); j < limit; j += Math.pow(i,2)){
				sieve[j] = 0;
			}
		}
	}
	
	for(i = 7; i< limit; i++){
		if(sieve[i] ===1){
			results.push(i);
		}
	}
	
	return results;
}