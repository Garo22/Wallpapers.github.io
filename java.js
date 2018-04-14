$('document').ready(function(){

	var a,b;
	a=0;
	b=0;
	if(a==0){jQuery('#Hside').hide();}
	
	jQuery('.gcer').on('click',function(){	
	    
		
		if(a==1){
			jQuery('#Hside').hide();
			a=0;
			
		}
		else{
			
			jQuery('#Hside').show();
			a=1;
		}
		
	});
	if(b==0){jQuery('.Heart2, .Heart01').hide();jQuery('.Heart1').show();}
	
	jQuery('.Heart').on('click',function(){	
	    
		
		if(b==1){
			jQuery('.Heart1').hide();jQuery('.Heart2').show();
			b=0;
			
		}
		else{
			
			jQuery('.Heart2').hide();jQuery('.Heart1').show();
			b=1;
		}
		
	});
	





});