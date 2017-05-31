        var h_hght = 118;
        var h_mrg = 0;
        $(function () {
        	$(window).scroll(function () {
        		var top = $(this).scrollTop();
        		var elem = $('#top_nav');
        		if (top + h_mrg < h_hght) {
        			elem.css('top', (h_hght - top));
        		} else {
        			elem.css('top', h_mrg);
        		}
        	});
        });




        $(document).ready(function () {

        	$("#owl1").owlCarousel({

        		navigation: false,
        		slideSpeed: 300,
        		paginationSpeed: 400,
        		singleItem: true

        	});

        });
        $(document).ready(function () {

        	var owl = $("#owl2");

        	owl.owlCarousel({

        		itemsCustom: [
        [0, 2],
        [450, 3],
        [600, 3],
        [700, 3],
        [1000, 3]
      ],
        		navigation: false

        	});

        });

        $(document).ready(function () {
        	$('.countdown').final_countdown({
        		'start': 1485907200,
        		'end': 1491769769,
        		'now': 1486646068
        	}, function () {
        		// Finish Callback
        	});
        });

        new WOW().init();

        $("#top_nav ul a").mPageScroll2id();

        function myFunction() {
        	var x = document.getElementById("myTopnav");
        	if (x.className === "topnav") {
        		x.className += " responsive";
        	} else {
        		x.className = "topnav";
        	}
        }