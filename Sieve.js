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
	
	// If the number is prime, push to the results array
	for(i = 7; i< limit; i++){
		if(sieve[i] ===1){
			results.push(i);
		}
	}
	
	return results;
}

exports.eratosthenesSieve = function(limit){
	var sieve = new Array(limit);
	var results = [];
	// Initialize 1 to 0
	sieve[0] = 0;
	
	// Initialize 2 to 1
	sieve[1] = 1;
	
	// Initialize the starting array, ignoring multiples of 2
	for(var i = 2; i < limit; i++){
		((i+1) % 2) === 0 ? sieve[i] = 0: sieve[i] = 1;
	}
	
	// Iterate through numbers, skipping evens
	for(var j = 2; j <= limit; j += 2){
		
		// If the index is true
		if(sieve[j]){
			// Go to each multiple of this current number, they are not prime
			for(var k = 2*(j+1); k <= limit; k +=(j+1)){
				sieve[k-1] = 0;
			}
		}
	}
	
	// Gather the prime numbers
	for(var l = 1; l <= limit; l++){
		if(sieve[l] === 1){
			results.push(l+1);
		}
	}
	return results;
}