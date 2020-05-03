let clk,sw,tm
let min = 0
let sec = 0

const cls = () => {
	clearInterval(sw)
	clearInterval(clk)
	clearInterval(tm)
}
const clock = () => {
	cls()
	$('input[value="stopwatch"]').show()
	$('input[value="lap"]').hide()
	$('input[value="stop"]').hide()
	$('ol').hide()
	$('h3').hide()
	$('input[placeholder]').hide()
	clk = setInterval(() => {
		const date = new Date()
		$('#things').text(`${date.getHours()} : ${date.getMinutes()}`)
	},1000)
	
}
const stopwatch = () => {
	cls()
	$('input[value="stopwatch"]').hide()
	$('input[value="lap"]').show()
	$('input[value="stop"]').show()
	$('input[placeholder]').hide()
	sw = setInterval(() => {
		$('#things').text(`${min} : ${sec}`)
		sec++
		if(sec==60){
			min++
			sec=0
		}
	},1000)	
}
const lap = () => {
	$('h3').show()
	$('ol').show()
	$('ol').append("<li><b>" + min + " : " + sec + "</b></li>")	
}
const stop = () => {
	clearInterval(sw)
	$('input[value="stop"]').hide()
	$('input[value="start"]').show()
}
const start = () => {
	$('input[value="stop"]').show()
	$('input[value="start"]').hide()	
	stopwatch()
}
const rst = () => {
	$('li').remove()
	min = 0
	sec = 0
	clearInterval(sw)
}
const timer = () => {
	$('input[value="stopwatch"]').show()
	$('input[value="lap"]').hide()
	$('input[value="stop"]').hide()	
	$('ol').hide()
	$('h3').hide()
	$('input[placeholder]').show()
	cls()
	$('input[placeholder]').keyup((event) =>{
		if(event.keyCode === 13){
			let arr = $('input[placeholder]').val().split(":")
			tm = setInterval(() => {
				$('#things').text(`${arr[0]} : ${arr[1]}`)	
				if(arr[1]==0 && arr[0]!=0){
					arr[1]=59
					--arr[0]
				}
				if(arr[0]==0 && arr[1]==0 && event != null){
					$('input[placeholder]').val(null)					
					alert('timer')
					//arr = null
					event=null
				}
				if(!(arr[0]==0 && arr[1]==0))
				--arr[1];
			},1000)
		}
	})
}
const about = () => {
	cls()
	$('input[value="stopwatch"]').show()
	$('input[value="lap"]').hide()
	$('input[value="stop"]').hide()	
	$('ol').hide()
	$('h3').hide()
	$('input[placeholder]').hide()
	window.location.href = 'https://priyanshu-b20.github.io/'
}
$(document).ready(() =>{
	clock()
	$('input[value="clock"]').click(() => clock())
	$('input[value="stopwatch"]').click(() => stopwatch())
	$('input[value="timer"]').click(() => timer())
	$('input[value="about"]').click(() => about())
	$('input[value="lap"]').click(() => lap())
	$('input[value="stop"]').click(() => stop())
	$('input[value="start"]').click(() => start())
	$('input[value="stop"]').dblclick(() => rst())
	$('input[value="start"]').dblclick(() => rst())
});

