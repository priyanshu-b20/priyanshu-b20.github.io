
$(document).ready(() => {
	$('#main').animate({
		width: '40px',
		height: '40px'
	})
	setTimeout(() => {
		$('#main').animate({
			width: '100px',
		})
	},500)
	setTimeout(() => {
		$('#main').append('<b>hello world!</b>')
	},1000)
	setTimeout(() => {
		
		$('#main').animate({
			'border-radius' : '0px'
		})
	},1500)
	setTimeout(() => {
		$('#main').animate({
			width: window.innerWidth,
			height: window.innerHeight
		})
	},2000)
	setTimeout(() => {
		$('body').css('background','#fff')
		$('#main > b').css({
			'background': 'none',
			'width' : 'auto',
			'height' : 'auto',
		})
		$('#main').animate({
			'font-size' : '80vh',
			'opacity' : '0.05'
		})
	},2500)
	
	
	$('body').append('<div id="hd">Hi, I am Priyanshu Bisht!</div>')
	setTimeout(() => {
		$('#hd').show()
		$('#hd').animate({
			'width' : '480px',
		})
	},3000)
	
	$('body').append('<div id="sub">I\'m a college student</div>')
	$('body').append('<div id="sub2">and i love programming</div>')
	setTimeout(() => {
		$('#sub').show()
		$('#sub').animate({
			'width' : '210px'
		})
	}, 3500)
	setTimeout(() => {
		$('#sub2').show()
		$('#sub2').animate({
			'width' : '230px'
		})
	}, 3500)
	
	
	$('body').append('<div id="links"><a href="">>> My Projects</a><a href="resume.pdf">>> My Resum&eacute;</a></div>')
	setTimeout(() => {
		$('#links').show()
		$('#links').animate({
			'width' : '300px',
		})
	}, 3500)
	setTimeout(() => {
		$('#links').css('background','none')
		$('div > a').css('color','#222')
		$('div > a:hover').css('color','#fff')
	},3800)

	setTimeout(() => {
		$('#links').animate({
			'width' : '320px',
		})
		$('div > a').animate({
			'margin' : '10px',
		})
	},4000)
	
})
