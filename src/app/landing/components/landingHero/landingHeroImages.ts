export const landingHeroImages = [
    {
        src: '/images/friends-photos.jpg',
        aspectRatio: '0.77',
        backCutOut: true,
        backCutOutColor: 'orange',
        imageNameAltText: 'Gif of photos at ace',
        opacity: 1, // default 1 for visible
        scale: 1.4, // scale transform for aceImage
        rotation: -5, // rotation
        zIndex: 1, // zindex for image container. 1= below section content
        gridPosXColumn: '2', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
        gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
        relPosX: '-80px', //relative position to grid position
        relPosY: '70px',
        paralax: 1,
	  

        mobile: {
            opacity: 1,
            scale: 1.2,
            rotation: -10,
            zIndex: 3,
            gridPosXColumn: '2',
            gridPosYRow: '2',
            relPosX: '-80px',
            relPosY: '38px',
        },
    },
    {
        src: '/images/Spin-photo2.png',
        aspectRatio: '0.710',
        backCutOut: true,
        backCutOutColor: 'sharpTeal',
        imageNameAltText: 'the vibes at the bar',
        opacity: 1,
        scale: 1, // scale transform for aceImage
        rotation: 1, // rotation
        zIndex: 1, // zindex for image container
        gridPosXColumn: '3', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
        gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
        relPosX: '0px', //relative position to grid position
        relPosY: '0px',
        paralax: 2,

        mobile: {
            opacity: 1,
            scale: 1.2,
            rotation: 10,
            zIndex: 1,
            gridPosXColumn: '2',
            gridPosYRow: '3',
            relPosX: '0px',
            relPosY: '0px',
        },
    },
    {
        src: '/images/Spin-photo3.png',
        aspectRatio: '1/1',
        backCutOut: true,
        backCutOutColor: 'sharpTeal',
        imageNameAltText: 'the vibes at the bar',
        opacity: 1,
        scale: 1, // scale transform for aceImage
        rotation: 1, // rotation
        zIndex: 1, // zindex for image container
        gridPosXColumn: '4', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
        gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
        relPosX: '0px', //relative position to grid position
        relPosY: '0px',
        paralax: 1,

        mobile: {
            opacity: 1,
            scale: 1,
            rotation: 10,
            zIndex: 1,
            gridPosXColumn: '4',
            gridPosYRow: '2',
            relPosX: '0px',
            relPosY: '0px',
        },
    },
    {
        src: '/images/Spin-photo1.png',
        aspectRatio: '0.637',
        backCutOut: true,
        backCutOutColor: 'sharpTeal',
        imageNameAltText: 'the vibes at the bar',
        opacity: 1,
        scale: 1, // scale transform for aceImage
        rotation: 1, // rotation
        zIndex: 1, // zindex for image container
        gridPosXColumn: '4', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
        gridPosYRow: '1', //enter the grid ROW start position. ex: 5 (start at grid line 5)
        relPosX: '0px', //relative position to grid position
        relPosY: '0px',
        paralax: 3,

        mobile: {
            opacity: 1,
            scale: 1,
            rotation: 10,
            zIndex: 1,
            gridPosXColumn: '4',
            gridPosYRow: '1',
            relPosX: '0px',
            relPosY: '0px',
        },
    },
];