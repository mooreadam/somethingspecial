PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-17/page-17_0003s_0000_Layer-1.png"
	},
    sound: {
		startTime: 113,
		endTime: 120,
		loop: false
	},
	content: [
	
	
	
	
 /*       {
            // Yaught
			type: "Sprite",
			x: "50px",
			y: "190px",
			url: "images/anim/yaught.png",
            numFrames: 14,
            frameDelay: 20,
            startDelay: 10,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },*/
       
       

       
       
                {
            //  Yaught Animation
			type: "Sprite",
			x: "-500px",
			y: "50px",
			url: "images/anim/yaught2.png",
            numFrames: 8,
            startDelay: 420,
            frameDelay: 90,
            autoStart: true,
            autoReset: false,
            playOnPress: true,
            loop: false
        },
	
	
	

        {
            // Characters
			type: "Sprite",
			x: "0px",
			y: "0px",
			url: "images/pages/page-17/p17-ch.png",
            numFrames: 2,
            frameDelay: 350,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },
        
        
        
        
        
        {
            // E Animation
			type: "Sprite",
			x: "234px",
			y: "307px",
			url: "images/pages/page-17/p17-e.png",
            numFrames: 13,
            frameDelay: 15,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },
         {
            // dog Animation
			type: "Sprite",
			x: "0px",
			y: "750px",
			url: "images/pages/page-17/p17-newdogs.png",
            numFrames: 8,
            frameDelay: 40,
            startDelay: 140,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },
        {
            // Wind Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/wind_left_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            // d1
			type: "Sprite",
			x: "-150px",
			y: "550px",
			url: "images/pages/page-17/dog_1_anim.png",
            numFrames: 4,
            frameDelay: 30,
            autoStart: false,
            autoReset: true,
            playOnPress: true,
            loop: false,
            sound: {
		      startTime: 240,
		      endTime: 241,
		      loop: false
	       }
        },
        {
            // d2
			type: "Sprite",
			x: "550px",
			y: "550px",
			url: "images/pages/page-17/dog_2_anim.png",
            numFrames: 4,
            frameDelay: 30,
            autoStart: false,
            autoReset: true,
            playOnPress: true,
            loop: false,
            sound: {
		      startTime: 240,
		      endTime: 241,
		      loop: false
	       }
        },
        {
			type: "TextArea",
			x: "50px",
			y: "50px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "And the dogs.",
            sound: {
		      startTime: 113,
		      endTime: 115,
		      loop: false
	       }
		},
        {
			type: "TextArea",
			x: "50px",
			y: "170px",
            width: "530px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Never mind,\” said Mum. \“We’ve still got four left\”.",
            sound: {
		      startTime: 116,
		      endTime: 120,
		      loop: false
	       }
		},
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 15"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-18/page-18_0003s_0000_Layer-1.png"
	},
    
	content: [
        {
            // Ship
			type: "Sprite",
			x: "0px",
			y: "360px",
			url: "images/pages/page-18/ship-anim.png",
            numFrames: 12,
            frameDelay: 100,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },
         {
            // Characters
			type: "Sprite",
			x: "0px",
			y: "0px",
			url: "images/pages/page-18/p18-ch.png",
            numFrames: 2,
            frameDelay: 350,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },
        {
            // Wind Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/wind_right_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            // Ship
			type: "Sprite",
			x: "0px",
			y: "360px",
			url: "images/pages/page-18/ship-blank.png",
            numFrames: 1,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: true,
            sound: {
		      startTime: 242,
		      endTime: 250,
		      loop: false
	       }
        },
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 16"
		}
	]
});
