var myimptest = (function() {

	var tesvar = "test";

    console.log('test initialized');
	
    function testa() {
        alert(tesvar);
    }

  return myimptest;

})(myimptest||{})
