describe("a carousel with an odd number of profiles and a 20% profile width", function() {
	var subject;
	$(window).width("800px");

	beforeEach(function() {
		$("body").append(
			'<div id="fragment">' +
				'<div class="carousel-container" style="width: 1200px;">' +
					'<div class="profile-rotater" style="left: 0; width: 1200px;">' +
						'<div id="profile-1" class="profile" style="width: 20%; height: 400px"></div>' +
						'<div id="profile-2" class="profile" style="width: 20%; height: 400px"></div>' +
						'<div id="profile-3" class="profile" style="width: 20%; height: 400px"></div>' +
						'<div id="profile-4" class="profile" style="width: 20%; height: 400px"></div>' +
						'<div id="profile-5" class="profile" style="width: 20%; height: 400px"></div>' +
					'</div>' +
				'</div>' +
			'</div>'
		);

		subject = Carousel;
		subject.init();
	});

	afterEach(function() {
		$("#fragment").remove();
		subject = null;
	});

	it("should set the middle profile to active", function() {
		expect($("#profile-3").hasClass("active")).toBe(true);
	});

	it("should set the left value of the profile-rotator to place the active profile in the middle", function() {
		expect($(".profile-rotater").css("left")).toBe("0%");
	});

	it("should set the height of the profile-rotater to the width of a profile", function() {
		expect($(".profile-rotater").css("height")).toBe($("#profile-1").css("width"))
	});

	describe("clicking a profile before the active one", function() {
		beforeEach(function() {
			$("#profile-2").click();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-3").hasClass("active")).toBe(false);
		});

		it("should set the clicked profile to active", function() {
			expect($("#profile-2").hasClass("active")).toBe(true);
		});

		it("should add around one profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(20);
		});
	});

	describe("clicking a profile after the active one", function() {
		beforeEach(function() {
			$("#profile-5").click();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-3").hasClass("active")).toBe(false);
		});

		it("should set the clicked profile to active", function() {
			expect($("#profile-5").hasClass("active")).toBe(true);
		});

		it("should reduce around two profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(-40);
		});
	});

	describe("swiping left on the profile-rotater", function() {
		beforeEach(function() {
			$(".profile-rotater").swipeleft();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-3").hasClass("active")).toBe(false);
		});

		it("should add the active class to the profile directly to the right of the active one", function() {
			expect($("#profile-4").hasClass("active")).toBe(true);
		});

		it("should reduce around one profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(-20);
		});
	});

	describe("swiping right on the profile-rotater", function() {
		beforeEach(function() {
			$(".profile-rotater").swiperight();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-3").hasClass("active")).toBe(false);
		});

		it("should add the active class to the profile directly to the right of the active one", function() {
			expect($("#profile-2").hasClass("active")).toBe(true);
		});

		it("should add around one profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(20);
		});
	});

	describe("on window resize", function() {
		beforeEach(function() {
			$(".profile-rotater").css("left", "600px");
			$(window).trigger('resize');
		});

		it("should set the height of the profile-rotater to the height of the active profile", function() {
			expect($(".profile-rotater").css("height")).toBe($(".profile.active").css("height"));
		});

		it("should set the left value of the profile-rotator to place the active profile in the middle", function() {
			expect($(".profile-rotater").css("left")).toBe("0%");
		});
	});
});

describe("a carousel with an even number of profiles and a 33.3% profile width", function() {
	var subject;
	$(window).width("800px");

	beforeEach(function() {
		$("body").append(
			'<div id="fragment">' +
				'<div class="carousel-container" style="width: 1200px;">' +
					'<div class="profile-rotater" style="left: 0; width: 1200px;">' +
						'<div id="profile-1" class="profile" style="width: 33.3%;"></div>' +
						'<div id="profile-2" class="profile" style="width: 33.3%;"></div>' +
						'<div id="profile-3" class="profile" style="width: 33.3%;"></div>' +
						'<div id="profile-4" class="profile" style="width: 33.3%;"></div>' +
						'<div id="profile-5" class="profile" style="width: 33.3%;"></div>' +
						'<div id="profile-6" class="profile" style="width: 33.3%;"></div>' +
					'</div>' +
				'</div>' +
			'</div>'
		);

		subject = Carousel;
		subject.init();
	});

	afterEach(function() {
		$("#fragment").remove();
		subject = null;
	});

	it("should round up to find the middle profile and set it to active", function() {
		expect($("#profile-4").hasClass("active")).toBe(true);
	});

	it("should set the left value of the profile-rotator to place the active profile in the middle", function() {
		expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(-66);
	});

	it("should set the height of the profile-rotater to the width of a profile", function() {
		expect($(".profile-rotater").css("height")).toBe($("#profile-1").css("width"))
	});

	describe("clicking a profile before the active one", function() {
		beforeEach(function() {
			$("#profile-2").click();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-4").hasClass("active")).toBe(false);
		});

		it("should set the clicked profile to active", function() {
			expect($("#profile-2").hasClass("active")).toBe(true);
		});

		it("should add around two profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(0);
		});
	});

	describe("clicking a profile after the active one", function() {
		beforeEach(function() {
			$("#profile-5").click();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-4").hasClass("active")).toBe(false);
		});

		it("should set the clicked profile to active", function() {
			expect($("#profile-5").hasClass("active")).toBe(true);
		});

		it("should reduce around one profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(-100);
		});
	});

	describe("swiping left on the profile-rotater", function() {
		beforeEach(function() {
			$(".profile-rotater").swipeleft();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-4").hasClass("active")).toBe(false);
		});

		it("should add the active class to the profile directly to the right of the active one", function() {
			expect($("#profile-5").hasClass("active")).toBe(true);
		});

		it("should reduce around one profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(-100);
		});
	});

	describe("swiping right on the profile-rotater", function() {
		beforeEach(function() {
			$(".profile-rotater").swiperight();
		});

		it("should remove the active class from the originally active profile", function() {
			expect($("#profile-4").hasClass("active")).toBe(false);
		});

		it("should add the active class to the profile directly to the right of the active one", function() {
			expect($("#profile-3").hasClass("active")).toBe(true);
		});

		it("should add around one profile's width value to the left value of the profile-rotater", function() {
			expect(Math.floor(parseInt($(".profile-rotater").css("left")))).toBe(-33);
		});
	});
});