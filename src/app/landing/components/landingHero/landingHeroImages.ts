export const landingHeroImages = [
	{
		src: '/images/Friends-golfing.webp',
		aspectRatio: '0.77',
		backCutOut: true,
		backCutOutColor: 'orange',
		imageNameAltText: 'old friends golfing at Ace Golf',
		opacity: 1, // default 1 for visible
		scale: 1.4, // scale transform for aceImage
		rotation: -5, // rotation
		zIndex: 2, // zindex for image container. 1= below section content
		gridPosXColumn: '2', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
		gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
		relPosX: '-80px', //relative position to grid position
		relPosY: '70px',
		paralax: 1,
		

		mobile: {
			aspectRatio: '1/1',
			opacity: 1,
			scale: 1.7,
			rotation: -4,
			zIndex: 1,
			gridPosXColumn: '2',
			gridPosYRow: '2',
			relPosX: '-30px',
			relPosY: '80px',
		},
	},
	{
		src: '/images/night-golfing.webp',
		aspectRatio: '1.130',
		backCutOut: true,
		backCutOutColor: 'sharpTeal',
		imageNameAltText: 'Night Time Golfing',
		opacity: 1,
		scale: 1.2, // scale transform for aceImage
		rotation: -11, // rotation
		zIndex: 1, // zindex for image container
		gridPosXColumn: '3', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
		gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
		relPosX: '-80px', //relative position to grid position
		relPosY: '30px',
		paralax: 2,

		mobile: {
			aspectRatio: '1.130',
			opacity: 0,
			scale: 1.4,
			rotation: -10,
			zIndex: 1,
			gridPosXColumn: '2',
			gridPosYRow: '3',
			relPosX: '-40px',
			relPosY: '50px',
		},
	},
	{
		src: '/images/girl-golfing.webp',
		aspectRatio: '0.95',
		backCutOut: true,
		backCutOutColor: 'sharpTeal',
		imageNameAltText: 'Lady Golfing at Ace Golf',
		opacity: 1,
		scale: 1.4, // scale transform for aceImage
		rotation: 8, // rotation
		zIndex: 1, // zindex for image container
		gridPosXColumn: '4', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
		gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
		relPosX: '-20px', //relative position to grid position
		relPosY: '80px',
		paralax: 1,

		mobile: {
			aspectRatio: '0.95',
			opacity: 0,
			scale: 1.4,
			rotation: 10,
			zIndex: 3,
			gridPosXColumn: '4',
			gridPosYRow: '3',
			relPosX: '-40px',
			relPosY: '80px',
		},
	},
	{
		src: '/images/food/bigbites-place-holder.webp',
		aspectRatio: '1.04',
		backCutOut: true,
		backCutOutColor: 'sharpTeal',
		imageNameAltText: 'food at ace',
		opacity: 1,
		scale: 1.4, // scale transform for aceImage
		rotation: -9, // rotation
		zIndex: 1, // zindex for image container
		gridPosXColumn: '4', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
		gridPosYRow: '1', //enter the grid ROW start position. ex: 5 (start at grid line 5)
		relPosX: '-40px', //relative position to grid position
		relPosY: '80px',
		paralax: 3,

		mobile: {
			aspectRatio: '0.91',
			opacity: 1,
			scale: 1.4,
			rotation: 4,
			zIndex: 1,
			gridPosXColumn: '3',
			gridPosYRow: '2',
			relPosX: '45px',
			relPosY: '120px',
		},
	},

	{
		src: '/images/ace-ball.webp',
		aspectRatio: '1/1',
		backCutOut: false,
		backCutOutColor: 'sharpTeal',
		imageNameAltText: 'Ace branded golf ball',
		opacity: 1,
		scale: 1.3, // scale transform for aceImage
		rotation: -9, // rotation
		zIndex: 3, // zindex for image container
		gridPosXColumn: '3', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
		gridPosYRow: '1', //enter the grid ROW start position. ex: 5 (start at grid line 5)
		relPosX: '0px', //relative position to grid position
		relPosY: '200px',
		paralax: 1,

		mobile: {
			aspectRatio: '1/1',
			opacity: 1,
			scale: 1.2,
			rotation: 10,
			zIndex: 1,
			gridPosXColumn: '3',
			gridPosYRow: '3',
			relPosX: '-30px',
			relPosY: '-10px',
		},
	},
];
