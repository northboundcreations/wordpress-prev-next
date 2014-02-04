<script>
	//keyboard arrow navigation
    $(document).keydown(function(e) {

		var url = false;
        
		// Left arrow key code
		if (e.which == 37) 
		{  
            url = $('.prev a').attr('href');
        }

        // Right arrow key code
		else if (e.which == 39) 
		{
            url = $('.next a').attr('href');
        }
        if (url) {
            window.location = url;
        }
    });
	
});
</script>