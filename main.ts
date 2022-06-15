for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    music.playTone(247, music.beat(BeatFraction.Eighth))
    basic.showIcon(IconNames.SmallHeart)
    music.playTone(587, music.beat(BeatFraction.Eighth))
}
basic.showString("joder, estoy vivo")
basic.forever(function () {
	
})
